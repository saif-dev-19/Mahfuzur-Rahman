import { useEffect, useState } from "react";
import { fallbackPortfolio, fetchPortfolio } from "./api/portfolioApi.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
// import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import EntryIntro from "./components/EntryIntro.jsx";
import CodeFlowBackground from "./components/CodeFlowBackground.jsx";
import InteractionLayer from "./components/InteractionLayer.jsx";

export default function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolio);
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem("portfolioIntroSeen") !== "true";
  });
  const [introLeaving, setIntroLeaving] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetchPortfolio()
      .then((data) => {
        if (isMounted) setPortfolio(data);
      })
      .catch(() => {
        if (isMounted) setPortfolio(fallbackPortfolio);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!showIntro) return undefined;

    document.body.classList.add("intro-active");
    const timer = window.setTimeout(() => {
      completeIntro();
    }, 10000);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-active");
    };
  }, [showIntro]);

  const completeIntro = () => {
    setIntroLeaving(true);
    window.sessionStorage.setItem("portfolioIntroSeen", "true");

    window.setTimeout(() => {
      setShowIntro(false);
      setIntroLeaving(false);
      document.body.classList.remove("intro-active");
    }, 820);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="live-backdrop" aria-hidden="true" />
      <CodeFlowBackground />
      <InteractionLayer />
      {showIntro && (
        <EntryIntro data={portfolio.hero} onEnter={completeIntro} isLeaving={introLeaving} />
      )}
      <Header />
      <main className="relative z-10">
        <Hero data={portfolio.hero} />
        <About data={portfolio.about} />
        <Experience data={portfolio.experience} />
         <Education data={portfolio.education} />
        <Skills data={portfolio.skills} />
        <Projects data={portfolio.projects} />
        <Certificates data={portfolio.certificates} />
        {/* <Blogs /> */}
        <Contact data={portfolio.contact} />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
