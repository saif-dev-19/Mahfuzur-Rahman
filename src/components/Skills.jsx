import SectionTitle from "./SectionTitle.jsx";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import { assets } from "../data/portfolio.js";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Skills({ data = fallbackPortfolio.skills }) {
  return (
    <section id="skills" className="relative bg-ink section-pad">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${assets.skillsBg})`, backgroundSize: "cover" }} />
      <div className="container-shell relative">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-16 text-center md:gap-20">
          {data.categories.map((category, categoryIndex) => (
            <ScrollReveal as="article" key={category.title} delay={categoryIndex * 120}>
              <CategoryTitle>{category.title}</CategoryTitle>

              <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3 md:gap-4">
                {category.groups.flatMap((group) => group.skills).map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} delay={index * 24} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTitle({ children }) {
  return (
    <div className="relative flex justify-center">
      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-ubuntu text-3xl font-medium uppercase text-transparent opacity-20 [-webkit-text-stroke:1px_#12f7d6] md:block md:text-5xl">
        {children}
      </span>
      <h3 className="relative font-ubuntu text-2xl font-medium uppercase leading-tight text-brand md:text-4xl">
        {children}
      </h3>
    </div>
  );
}

function SkillBadge({ skill, delay = 0 }) {
  const iconUrl = getIconUrl(skill);

  return (
    <div
      className="motion-card flex h-10 items-center gap-2 rounded-full bg-white px-4 text-night shadow-[0_8px_18px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-mint md:h-11"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-full">
        {skill.image ? (
          <img src={skill.image} alt="" className="h-5 w-5 object-contain" />
        ) : skill.fallback || !iconUrl ? (
          <span className="font-mono text-xs font-bold" style={{ color: skill.color }}>
            {skill.fallback || skill.name.slice(0, 2)}
          </span>
        ) : (
          <img src={iconUrl} alt="" className="h-5 w-5 object-contain" />
        )}
      </span>
      <span className="whitespace-nowrap font-ubuntu text-xs font-medium md:text-sm">{skill.name}</span>
    </div>
  );
}

function getIconUrl(skill) {
  const knownSimpleIconSlugs = new Set([
    "c",
    "cplusplus",
    "python",
    "dart",
    "django",
    "jsonwebtokens",
    "redis",
    "docker",
    "react",
    "javascript",
    "html5",
    "tailwindcss",
    "postgresql",
    "mysql",
    "sqlite",
    "supabase",
    "git",
    "github",
    "vercel",
    "render",
    "netlify",
    "githubcopilot",
    "googlegemini",
  ]);

  if (!skill.icon || !knownSimpleIconSlugs.has(skill.icon)) return "";
  return `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace("#", "")}`;
}
