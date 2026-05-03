import { fallbackPortfolio } from "../api/portfolioApi.js";
import ScrollReveal from "./ScrollReveal.jsx";
import KineticWords from "./KineticWords.jsx";

export default function Hero({ data = fallbackPortfolio.hero }) {
  return (
    <section id="home" className="relative overflow-hidden bg-ink/55 pb-12 md:pb-20">
      <div className="absolute left-1/2 top-28 h-48 w-[70vw] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <div className="container-shell">
        <ScrollReveal>
          <h1 className="mb-8 text-center font-ubuntu text-5xl leading-tight text-mint md:mb-10 md:text-7xl">
            <KineticWords text="Developer" />
          </h1>
        </ScrollReveal>

        <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr_220px] xl:gap-20">
          <ScrollReveal
            as="aside"
            variant="left"
            className="hero-scan motion-card float-soft rounded-bl-[150px] rounded-br-[150px] rounded-tl-[150px] border-4 border-white bg-ink/95 p-6 shadow-glow md:p-8"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative">
                <span className="absolute -inset-2 rounded-full border border-brand/60" />
                <img src={data.image} alt="Profile" className="relative h-24 w-24 rounded-full object-cover" />
              </div>
              <div>
                <h2 className="font-mono text-3xl font-medium">{data.name}</h2>
                <p className="font-ubuntu text-md">{data.role}</p>
              </div>
            </div>

            <dl className="mt-8 space-y-3 font-mono text-sm text-white">
              {data.info.map((item) => (
                <Info key={item.label} label={item.label} value={item.value} />
              ))}
            </dl>

            <a href={data.cvUrl} className="mt-7 inline-flex items-center rounded-full bg-white px-5 py-3 font-ubuntu text-sm text-night transition hover:bg-brand">
              Download CV ↓
            </a>

            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-center font-mono text-xs uppercase tracking-widest text-brand">Essential Links</p>
              <div className="mt-4 flex justify-center gap-3">
                {data.essentialLinks.map((link) => (
                  <EssentialLink key={link.label} link={link} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mx-auto max-w-3xl" delay={120}>
            <p className="font-mono text-sm text-brand">&lt;h1&gt;</p>
            <div className="pl-4 md:pl-8">
              <p className="font-ubuntu text-3xl font-light leading-tight md:text-6xl">
                Hey
                <br />
                I&apos;m <span className="text-brand"><KineticWords text={data.headlineName} /></span>,
                <br />
                <span className="type-caret"><KineticWords text={data.headlineRole} /></span>
              </p>
            </div>
            <p className="font-mono text-sm text-brand">&lt;/h1&gt;</p>

            <div className="mt-8 max-w-2xl font-mono text-sm leading-7 text-white/80 md:text-base">
              <p className="text-brand">&lt;p&gt;</p>
              <p className="flow-copy pl-4 md:pl-8">
                {data.description}
              </p>
              <p className="text-brand">&lt;/p&gt;</p>
            </div>

            <a href="#contact" className="group mt-8 inline-flex items-center gap-4 font-mono text-2xl capitalize text-brand transition hover:text-mint">
              Let&apos;s Talk
              <span className="grid h-9 w-9 place-items-center rounded-full bg-steel text-lg text-brand transition group-hover:-translate-y-1 group-hover:bg-brand group-hover:text-ink">✉</span>
            </a>
          </ScrollReveal>

          <ScrollReveal
            variant="right"
            delay={220}
            className="marquee-surface mx-auto flex w-full max-w-xs flex-col gap-8 rounded-[80px] border border-white/10 bg-night/90 px-8 py-10 shadow-glow backdrop-blur"
          >
            {data.stats.map((stat, index) => (
              <div key={stat.label} className="group flex items-center gap-4">
                <span className="font-mono text-5xl font-medium text-brand">{stat.value}</span>
                <span className="font-mono text-sm leading-5 text-white transition group-hover:text-mint">{stat.label}</span>
                <span
                  className="ml-auto h-2 w-2 rounded-full bg-brand pulse-dot"
                  style={{ animationDelay: `${index * 180}ms` }}
                />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex items-start gap-3">
      <dt className="min-w-16 text-brand">{label}</dt>
      <dd className="text-white/80">{value}</dd>
    </div>
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
      className="grid h-10 w-10 place-items-center rounded-full bg-white transition hover:-translate-y-0.5 hover:bg-mint"
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={color} aria-hidden="true">
      {icons[icon] || icons.github}
    </svg>
  );
}
