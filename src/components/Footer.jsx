import { socialLinks } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-night py-6">
      <div className="container-shell flex flex-col items-center justify-between gap-6 text-center font-ubuntu text-sm text-white md:flex-row md:text-left">
        <p>© 2025 Mahfuz Saif. All rights reserved.</p>
        {/* <div className="flex gap-5">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label} className="grid h-8 w-8 place-items-center rounded-full bg-mint text-ink transition hover:bg-brand">
              {social.icon}
            </a>
          ))}
        </div> */}
        <p>
          Design By <a href="https://www.facebook.com/hey.mahfuz.here.ok" className="text-brand underline">mahfuz</a>
        </p>
      </div>
    </footer>
  );
}
