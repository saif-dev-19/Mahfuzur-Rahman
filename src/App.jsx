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

export default function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolio);

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

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="live-backdrop" aria-hidden="true" />
      <Header />
      <main className="relative z-10">
        <Hero data={portfolio.hero} />
        <About data={portfolio.about} />
        <Experience data={portfolio.experience} />
        <Skills data={portfolio.skills} />
        <Education data={portfolio.education} />
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
