import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function TimelineSection({
  id,
  title,
  description,
  eyebrow,
  items,
  variant = "role",
  dark = false,
}) {
  return (
    <section id={id} className={`${dark ? "bg-night" : "bg-ink"} section-pad`}>
      <div className="container-shell">
        <SectionTitle title={title}>{description}</SectionTitle>

        <div className="mx-auto mt-14 max-w-3xl">
          {/* Timeline */}
          <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-white/10">
            {items.map((item, index) => (
              <ScrollReveal
                as="article"
                key={`${item.period}-${item.company || item.school || item.issuer}`}
                delay={index * 100}
                variant="lift"
                className="relative"
              >
                {/* Timeline dot with glowing ring */}
                <span className="absolute -left-8 top-5 flex h-6 w-6 items-center justify-center rounded-full border border-brand/50 bg-night">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </span>

                <div className="card-clean p-6 sm:p-7 border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-md">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs font-medium text-slate-300">
                      {getLocation(item)}
                    </span>
                  </div>

                  <h4 className="font-ubuntu text-xl sm:text-2xl font-bold leading-tight text-white">
                    {getTitle(item, variant)}
                  </h4>
                  <p className="mt-1 font-mono text-sm text-brand font-medium">
                    {getMeta(item, variant)}
                  </p>
                  <p className="mt-3.5 font-ubuntu text-base leading-relaxed text-slate-200">
                    {item.description}
                  </p>

                  {item.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-xs font-medium text-slate-200 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getTitle(item, variant) {
  if (variant === "education") return item.degree;
  if (variant === "certificate") return item.name;
  return item.role;
}

function getMeta(item, variant) {
  if (variant === "education") return `${item.school} · ${item.location}`;
  if (variant === "certificate") return `${item.issuer} · ${item.credential}`;
  return `${item.company} · ${item.location}`;
}

function getLocation(item) {
  return item.location || "";
}
