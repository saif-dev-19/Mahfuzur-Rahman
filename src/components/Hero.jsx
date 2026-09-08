import { fallbackPortfolio } from "../api/portfolioApi.js";
import ScrollReveal from "./ScrollReveal.jsx";
import KineticWords from "./KineticWords.jsx";
import TerminalWidget from "./TerminalWidget.jsx";

export default function Hero({ data = fallbackPortfolio.hero }) {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-night">
      <div className="container-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[330px_1fr_220px] xl:gap-14">

          {/* Left — Profile card */}
          <ScrollReveal variant="left">
            <aside className="card-clean p-6 sm:p-7 flex flex-col items-center text-center">
              {/* Profile image with status ring */}
              <div className="relative mb-4">
                <div className="p-1 rounded-full bg-gradient-to-tr from-brand via-brand/40 to-transparent">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="h-32 w-32 rounded-full object-cover bg-surface"
                  />
                </div>
                <span className="absolute bottom-1 right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-brand border-2 border-night" />
                </span>
              </div>

              {/* Name & role */}
              <h2 className="font-ubuntu text-2xl font-bold text-white leading-tight">
                {data.name}
              </h2>
              <div className="mt-1.5 inline-flex items-center px-3 py-1 rounded-full bg-brand/10 border border-brand/25 text-brand font-mono text-xs font-medium">
                {data.role}
              </div>

              {/* Aligned Key-Value Info List */}
              <div className="w-full border-y border-white/10 py-4 my-5 space-y-2.5">
                {data.info.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[72px_1fr] items-center text-left gap-2"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-brand font-semibold">
                      {item.label}
                    </span>
                    <span
                      className="font-mono text-sm text-slate-100 font-medium break-all text-right"
                      title={item.value}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Download CV button */}
              <a
                href={data.cvFile || data.cvUrl}
                className="magnetic w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 font-ubuntu text-sm font-semibold text-night transition hover:bg-mint hover:shadow-[0_0_20px_rgba(18,247,214,0.35)]"
              >
                <span>Download CV</span>
                <span aria-hidden="true" className="text-base font-bold">↓</span>
              </a>

              {/* Social / Essential links */}
              <div className="w-full mt-5 pt-4 border-t border-white/10">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold mb-3">
                  Connect & Socials
                </p>
                <div className="flex justify-center gap-2.5">
                  {data.essentialLinks.map((link) => (
                    <EssentialLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
            </aside>
          </ScrollReveal>

          {/* Center — Main Hero Typography */}
          <ScrollReveal delay={100} className="flex flex-col justify-center pt-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand/80 mb-2">
              &lt;h1&gt;
            </p>
            <div className="pl-4 sm:pl-6 border-l-2 border-brand/30">
              <h1 className="font-ubuntu text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-white tracking-tight">
                <span className="block text-slate-300 font-light text-2xl sm:text-4xl lg:text-5xl mb-1">
                  <KineticWords text="Hey," />
                </span>
                <span className="block">
                  I&apos;m{" "} Mahfuz
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-mint to-white">
                    <KineticWords text={data.headlineName} />
                  </span>
                </span>
                <span className="block text-brand type-caret mt-2 font-mono text-xl sm:text-3xl lg:text-4xl font-medium">
                  <KineticWords text={data.headlineRole} />
                </span>
              </h1>
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand/80 mt-2">
              &lt;/h1&gt;
            </p>

            {/* Description - Large, crisp, and high contrast */}
            <div className="mt-6 max-w-2xl font-ubuntu text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
              {data.description}
            </div>

            {/* Terminal status widget */}
            <TerminalWidget />

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="magnetic inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-3.5 font-ubuntu text-base font-semibold text-night shadow-[0_0_24px_rgba(18,247,214,0.3)] transition hover:bg-mint hover:shadow-[0_0_32px_rgba(18,247,214,0.45)] hover:-translate-y-0.5"
              >
                <span>Let&apos;s Talk</span>
                <span aria-hidden="true" className="text-lg">✉</span>
              </a>
              <a
                href="#projects"
                className="magnetic inline-flex items-center gap-2 rounded-xl border border-white/20 bg-surface px-6 py-3.5 font-ubuntu text-base font-medium text-white transition hover:border-brand hover:text-brand hover:bg-brand/5"
              >
                <span>View Projects</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Stats */}
          <ScrollReveal variant="right" delay={200}>
            <div className="flex flex-col gap-4">
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-clean p-5 relative overflow-hidden group border border-white/10"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand/50 group-hover:bg-brand transition-colors" />
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-brand block leading-none">
                    {stat.value}
                  </span>
                  <span className="font-ubuntu text-sm sm:text-base text-slate-200 mt-2 font-medium block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

function EssentialLink({ link }) {
  return (
    <a
      href={link.href}
      aria-label={link.label}
      title={link.label}
      target={link.href !== "#" ? "_blank" : undefined}
      rel={link.href !== "#" ? "noreferrer" : undefined}
      className="magnetic grid h-10 w-10 place-items-center rounded-xl bg-surface border border-white/15 transition hover:border-brand hover:bg-brand/10 hover:-translate-y-0.5"
    >
      <EssentialIcon icon={link.icon} color={link.color} />
    </a>
  );
}

function EssentialIcon({ icon, color }) {
  const icons = {
    github: (
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.97c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    ),
    linkedin: (
      <path d="M6.94 8.98H3.73V20h3.21V8.98ZM5.34 7.48c1.03 0 1.86-.84 1.86-1.86s-.83-1.86-1.86-1.86-1.86.84-1.86 1.86.83 1.86 1.86 1.86ZM20.5 20h-3.2v-5.36c0-1.28-.03-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V20h-3.2V8.98h3.07v1.5h.04c.43-.81 1.47-1.66 3.03-1.66 3.24 0 3.84 2.13 3.84 4.9V20h.27Z" />
    ),
    leetcode: (
      <path d="M13.55 4.13 7.45 10.2a2.56 2.56 0 0 0 0 3.62l4.26 4.25a2.56 2.56 0 0 0 3.62 0l2.44-2.44 1.86 1.86-2.44 2.44a5.2 5.2 0 0 1-7.34 0L5.6 15.68a5.2 5.2 0 0 1 0-7.34l6.1-6.08 1.85 1.87Zm1.02 4.06 1.86-1.86 3.15 3.15a3.57 3.57 0 0 1 0 5.05l-1.48 1.48-1.86-1.86 1.48-1.48a.94.94 0 0 0 0-1.33l-3.15-3.15ZM9.28 11.1h8.77v2.62H9.28V11.1Z" />
    ),
    codeforces: (
      <path d="M4 10.4h3.4V20H4v-9.6Zm6.3-6.4h3.4v16h-3.4V4Zm6.3 4.8H20V20h-3.4V8.8Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={color || "#FFFFFF"} aria-hidden="true">
      {icons[icon] || icons.github}
    </svg>
  );
}
