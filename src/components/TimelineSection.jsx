import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function TimelineSection({ id, title, description, eyebrow, items, variant = "role", dark = false }) {
  return (
    <section id={id} className={`${dark ? "bg-night" : "bg-ink"} section-pad`}>
      <div className="container-shell">
        <SectionTitle title={title}>{description}</SectionTitle>

        <div className="mx-auto mt-20 max-w-5xl">
          <ScrollReveal className="relative rounded-[40px] border border-white/10 bg-night/70 p-6 shadow-glow md:p-10">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div>
                <p className="font-mono text-sm uppercase tracking-widest text-brand">{eyebrow}</p>
                <h3 className="mt-2 font-ubuntu text-3xl text-white md:text-4xl">{title}</h3>
              </div>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand text-2xl text-brand">
                &lt;/&gt;
              </span>
            </div>

            <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-brand/40">
              {items.map((item, index) => (
                <ScrollReveal
                  as="article"
                  key={`${item.period}-${item.company || item.school || item.issuer}`}
                  className="relative pl-12"
                  delay={index * 110}
                  variant="right"
                >
                  <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border-2 border-brand bg-ink">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand pulse-dot" />
                  </span>

                  <div className="motion-card rounded-br-[32px] rounded-tl-[32px] border border-white/10 bg-ink p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/70">
                    <p className="font-mono text-sm text-brand">{item.period}</p>
                    <h4 className="mt-2 font-ubuntu text-2xl leading-tight text-white md:text-3xl">
                      {getTitle(item, variant)}
                    </h4>
                    <p className="mt-2 font-mono text-sm text-mint">{getMeta(item, variant)}</p>
                    <p className="mt-5 font-ubuntu text-base leading-7 text-white/80">{item.description}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-steel px-3 py-1 font-mono text-xs text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
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
