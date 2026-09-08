import { useEffect, useMemo, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { fallbackPortfolio } from "../api/portfolioApi.js";
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
      groups:
        activeFilter === "All"
          ? category.groups
          : category.groups.filter(
              (group) =>
                category.title === activeFilter || group.label === activeFilter
            ),
    }))
    .filter((category) => category.groups.length > 0);

  return (
    <section id="skills" className="bg-night section-pad">
      <div className="container-shell">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        {/* Filter pills */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-4 py-2 font-mono text-xs font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "border-brand bg-brand text-night shadow-[0_0_18px_rgba(18,247,214,0.35)]"
                  : "border-white/10 bg-surface text-slate-200 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skill groups */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-12">
          {visibleCategories.map((category, categoryIndex) => (
            <ScrollReveal as="article" key={category.title} delay={categoryIndex * 100}>
              {/* Main Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <h3 className="font-ubuntu text-lg sm:text-xl font-bold text-white">
                  {category.title}
                </h3>
                <span className="flex-1 h-px bg-white/10" />
              </div>

              {/* Sub-groups */}
              <div className="space-y-6">
                {category.groups.map((group) => (
                  <div key={group.label} className="card-clean p-5 sm:p-6 border border-white/10">
                    <p className="font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-4">
                      // {group.label}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill, index) => (
                        <SkillBadge key={skill.name} skill={skill} delay={index * 20} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ skill, delay = 0 }) {
  const iconUrl = getIconUrl(skill);

  return (
    <div
      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-night/80 px-3.5 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="grid h-5 w-5 shrink-0 place-items-center">
        {skill.image ? (
          <img src={skill.image} alt="" className="h-4 w-4 object-contain" />
        ) : skill.fallback || !iconUrl ? (
          <span className="font-mono text-xs font-bold" style={{ color: skill.color }}>
            {skill.fallback || skill.name.slice(0, 2)}
          </span>
        ) : (
          <img src={iconUrl} alt="" className="h-4 w-4 object-contain" />
        )}
      </span>
      <span className="whitespace-nowrap font-ubuntu text-sm font-medium text-slate-100">
        {skill.name}
      </span>
    </div>
  );
}

function getIconUrl(skill) {
  const knownSimpleIconSlugs = new Set([
    "c", "cplusplus", "python", "dart", "django", "jsonwebtokens",
    "redis", "docker", "react", "javascript", "html5", "tailwindcss",
    "postgresql", "mysql", "sqlite", "supabase", "git", "github",
    "vercel", "render", "netlify", "githubcopilot", "googlegemini",
  ]);

  if (!skill.icon || !knownSimpleIconSlugs.has(skill.icon)) return "";
  return `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace("#", "")}`;
}
