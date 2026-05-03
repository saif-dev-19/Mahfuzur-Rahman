import { useEffect, useMemo, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import { assets } from "../data/portfolio.js";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Skills({ data = fallbackPortfolio.skills }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = useMemo(() => {
    const labels = data.categories.flatMap((category) => [
      category.title,
      ...category.groups.map((group) => group.label),
    ]);
    const meaningfulLabels = labels.filter((label) => label && label !== "Skills");
    return ["All", ...Array.from(new Set(meaningfulLabels))];
  }, [data.categories]);

  useEffect(() => {
    if (!filters.includes(activeFilter)) setActiveFilter("All");
  }, [activeFilter, filters]);

  const visibleCategories = data.categories
    .map((category) => ({
      ...category,
      groups: activeFilter === "All"
        ? category.groups
        : category.groups.filter((group) => category.title === activeFilter || group.label === activeFilter),
    }))
    .filter((category) => category.groups.length > 0);

  return (
    <section id="skills" className="relative bg-ink/78 section-pad">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${assets.skillsBg})`, backgroundSize: "cover" }} />
      <div className="container-shell relative">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`magnetic rounded-full border px-4 py-2 font-mono text-xs transition ${
                activeFilter === filter
                  ? "border-brand bg-brand text-ink"
                  : "border-white/10 bg-night/70 text-white hover:border-brand hover:text-brand"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-10 text-center md:gap-12">
          {visibleCategories.map((category, categoryIndex) => (
            <ScrollReveal as="article" key={category.title} delay={categoryIndex * 120}>
              <CategoryTitle>{category.title}</CategoryTitle>

              <div className="scene-3d mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-3 md:gap-4">
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
      className="motion-card card-3d tilt-3d flex h-10 items-center gap-2 rounded-full bg-white px-4 text-night shadow-[0_8px_18px_rgba(0,0,0,0.25)] hover:bg-mint md:h-11"
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
