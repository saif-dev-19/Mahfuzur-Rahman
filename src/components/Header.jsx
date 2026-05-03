import { navLinks } from "../data/portfolio.js";

export default function Header() {
  return (
    <header className="relative z-20 bg-ink/85 backdrop-blur-xl">
      <div className="container-shell flex flex-col gap-6 py-8 xl:flex-row xl:items-center xl:justify-between xl:py-12">
        <a href="#" className="group flex items-center gap-2 font-mono text-xl font-medium capitalize leading-none md:text-3xl">
          <span className="text-brand">&lt;C/&gt;</span>
          <span className="transition group-hover:text-mint">Mahfuz</span>
        </a>

        <nav className="flex flex-wrap gap-3 font-mono text-sm capitalize md:gap-4" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="motion-card rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white transition duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-night"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
