import { navLinks, essentialLinks } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night pt-14 pb-8">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] pb-12 border-b border-white/[0.08]">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-mono text-xl font-bold text-white group"
            >
              <span className="text-brand">&lt;C/&gt;</span>
              <span className="transition group-hover:text-brand">Mahfuz</span>
            </a>
            <p className="font-ubuntu text-sm leading-relaxed text-slate-300 max-w-sm">
              Backend Developer crafting reliable APIs, performant architectures, and clean web experiences.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-brand transition-colors capitalize"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Essential Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {essentialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noreferrer" : undefined}
                  className="magnetic inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-3 py-1.5 font-mono text-xs text-slate-200 hover:border-brand/40 hover:text-brand transition-all"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} Mahfuzur Rahman Saif. All rights reserved.</p>
          <p>
            Designed & Built with{" "}
            <span className="text-brand font-medium">Passion</span>
            {" · "}
            <a
              href="https://www.facebook.com/hey.mahfuz.here.ok"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-brand transition-colors underline"
            >
              mahfuz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
