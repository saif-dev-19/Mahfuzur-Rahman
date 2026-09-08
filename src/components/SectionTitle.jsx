import ScrollReveal from "./ScrollReveal.jsx";
import KineticWords from "./KineticWords.jsx";

export default function SectionTitle({ title, children }) {
  return (
    <ScrollReveal className="flex flex-col items-center gap-3 text-center mb-4">
      <h2 className="section-title-line font-ubuntu text-3xl sm:text-4xl md:text-5xl font-bold capitalize leading-tight text-white">
        <KineticWords text={title} />
      </h2>
      {children && (
        <p className="mt-4 max-w-2xl font-ubuntu text-base sm:text-lg leading-relaxed text-slate-300">
          {children}
        </p>
      )}
    </ScrollReveal>
  );
}
