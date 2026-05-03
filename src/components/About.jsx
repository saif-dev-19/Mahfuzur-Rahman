import { fallbackPortfolio } from "../api/portfolioApi.js";
import ScrollReveal from "./ScrollReveal.jsx";

export default function About({ data = fallbackPortfolio.about }) {
  const paragraphs = data.description.split("\n").filter(Boolean);

  return (
    <section id="about" className="topography bg-night/80 section-pad">
      <div className="container-shell scene-3d grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-24">
        <ScrollReveal variant="left">
          <div className="mb-12 inline-flex rounded-br-[32px] rounded-tl-[32px] border-2 border-brand bg-ink px-8 py-4">
            <h2 className="font-ubuntu text-3xl capitalize text-white md:text-5xl">{data.title}</h2>
          </div>

          <article className="motion-card card-3d max-w-3xl rounded-[40px] border border-white/10 bg-ink/95 p-7 font-mono text-sm leading-7 text-white/85 shadow-glow md:p-10 md:text-base">
            <p className="text-brand">&lt;p&gt;</p>
            <p className="mt-4 text-3xl font-medium text-brand">{data.greeting}</p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5">{paragraph}</p>
            ))}
            <p className="mt-4 text-brand">&lt;/p&gt;</p>
          </article>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={140} className="card-3d card-3d--right relative mx-auto w-full max-w-xl rounded-2xl border border-white/10">
          <div className="noise-layer media-3d overflow-hidden rounded-2xl border border-white/10 shadow-glow">
            <img src={data.image} alt="Developer workspace" className="aspect-[1.02] w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full border-2 border-brand md:block" />
          <div className="absolute -right-5 top-10 hidden h-20 w-20 rounded-full border border-amber-300/50 md:block" />
        </ScrollReveal>
      </div>
    </section>
  );
}
