import ScrollReveal from "./ScrollReveal.jsx";

export default function SectionTitle({ title, children, showScroll = true }) {
  return (
    <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:gap-12">
      {showScroll && (
        <div className="hidden flex-col items-center gap-3 text-brand md:flex">
          <span className="grid h-11 w-8 place-items-center rounded-full border-2 border-brand">
            <span className="h-2 w-1 rounded-full bg-brand pulse-dot" />
          </span>
          <span className="h-20 w-px bg-gradient-to-b from-brand to-transparent" />
        </div>
      )}
      <div className="flex flex-col items-center gap-5">
        <h2 className="section-title-line font-ubuntu text-4xl capitalize leading-tight text-brand md:text-6xl">
          {title}
        </h2>
        {children && <p className="font-mono text-sm leading-6 text-white md:text-base">{children}</p>}
      </div>
    </ScrollReveal>
  );
}
