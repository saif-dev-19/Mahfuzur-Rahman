import { useState, useEffect } from "react";
import { navLinks } from "../data/portfolio.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-night/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-shell flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 font-mono text-xl font-bold leading-none group"
          aria-label="Home"
        >
          <span className="text-brand font-mono">&lt;C/&gt;</span>
          <span className="text-white transition-colors group-hover:text-brand">
            Mahfuz
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-sm text-slate-300 hover:text-white font-medium transition-colors duration-200 capitalize"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button on desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="magnetic inline-flex items-center gap-2 rounded-xl bg-brand/10 border border-brand/40 px-4 py-2 font-mono text-xs font-semibold text-brand hover:bg-brand hover:text-night transition-all"
          >
            <span>Let&apos;s Talk</span>
            <span>✉</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg text-slate-200 hover:text-white transition-colors border border-white/10"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav
          className="md:hidden bg-surface/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4 mt-3 shadow-2xl"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-mono text-sm text-slate-200 hover:text-brand transition-colors capitalize py-1.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand py-2.5 font-mono text-xs font-semibold text-night"
          >
            Let&apos;s Talk ✉
          </a>
        </nav>
      )}
    </header>
  );
}
