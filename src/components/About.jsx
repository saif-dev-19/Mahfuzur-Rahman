import { fallbackPortfolio } from "../api/portfolioApi.js";
import ScrollReveal from "./ScrollReveal.jsx";

export default function About({ data = fallbackPortfolio.about }) {
  const paragraphs = data.description.split("\n").filter(Boolean);

  return (
    <section id="about" className="bg-ink section-pad">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-2 xl:gap-20">
        <ScrollReveal variant="left">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-3">
            // About Me
          </span>
          <h2 className="font-ubuntu text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {data.title}
          </h2>
          <div className="card-clean p-6 sm:p-8 space-y-4 font-ubuntu text-base sm:text-lg leading-relaxed text-slate-200">
            <p className="text-xl sm:text-2xl font-bold text-brand">
              {data.greeting}
            </p>
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={140} className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-surface shadow-2xl">
            <img
              src={data.image}
              alt="Mahfuzur Rahman Saif"
              className="aspect-[4/5] w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
            />
          </div>
          {/* Subtle accent corner ring */}
          <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl border-2 border-brand/30 -z-10" />
        </ScrollReveal>
      </div>
    </section>
  );
}
