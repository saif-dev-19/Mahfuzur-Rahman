import { useRef, useState } from "react";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Projects({ data = fallbackPortfolio.projects }) {
  const scrollerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollProjects = (direction) => {
    if (!scrollerRef.current) return;

    const firstCard = scrollerRef.current.querySelector("article");
    const cardWidth = firstCard?.offsetWidth || 360;
    scrollerRef.current.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative bg-ink section-pad">
      <div className="container-shell relative">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        {/* Scroll Controls */}
        <ScrollReveal className="mt-8 flex items-center justify-end gap-3 md:mt-10" delay={120}>
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            className="magnetic grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-surface text-xl text-slate-200 transition hover:border-brand hover:text-brand"
            aria-label="Previous projects"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollProjects(1)}
            className="magnetic grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-surface text-xl text-slate-200 transition hover:border-brand hover:text-brand"
            aria-label="Next projects"
          >
            →
          </button>
        </ScrollReveal>

        {/* Project Card List */}
        <div
          ref={scrollerRef}
          className="project-scroll mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-2"
          aria-label="Project list"
        >
          {data.items.map((project, index) => (
            <ScrollReveal
              as="article"
              key={`${project.title}-${index}`}
              delay={index * 80}
              variant="lift"
              className="project-preview card-clean flex w-[85vw] shrink-0 snap-start flex-col overflow-hidden sm:w-[340px] md:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]"
            >
              {/* Image Preview */}
              <div className="relative overflow-hidden bg-night aspect-[16/10] border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-preview__image h-full w-full object-cover object-top"
                />
                <div className="project-preview__overlay">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">Preview</span>
                  <span className="text-base">↗</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                    {project.category || "Project"}
                  </span>
                  <h3 className="mt-1.5 font-ubuntu text-xl font-bold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-ubuntu text-sm leading-relaxed text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-1 font-mono text-xs text-slate-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-5 space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="magnetic w-full rounded-xl bg-brand/10 border border-brand/40 px-4 py-2.5 text-center font-ubuntu text-sm font-semibold text-brand transition hover:bg-brand hover:text-night"
                  >
                    View Details
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <ProjectLink href={project.githubUrl} label="GitHub" />
                    <ProjectLink href={project.liveUrl} label="Live Demo" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectDetails({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/85 p-4 backdrop-blur-md">
      <article className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-surface shadow-2xl">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Image side */}
          <div className="grid min-h-64 place-items-center bg-night p-6 border-b lg:border-b-0 lg:border-r border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[380px] w-full object-contain rounded-lg"
            />
          </div>

          {/* Details side */}
          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                  {project.category}
                </span>
                <h3 className="mt-1 font-ubuntu text-2xl sm:text-3xl font-bold leading-tight text-white">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="magnetic grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/15 text-xl text-slate-300 transition hover:border-brand hover:text-brand"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <p className="mt-5 font-ubuntu text-base leading-relaxed text-slate-200">
              {project.details}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.06] border border-white/10 px-3 py-1 font-mono text-xs text-slate-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ProjectLink href={project.githubUrl} label="GitHub Repo" />
              <ProjectLink href={project.liveUrl} label="Live Demo ↗" highlight />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function ProjectLink({ href, label, highlight = false }) {
  return (
    <a
      href={href || "#"}
      className={`magnetic rounded-xl px-4 py-2.5 text-center font-ubuntu text-sm font-medium transition ${
        highlight
          ? "bg-brand text-night font-semibold hover:bg-mint"
          : "border border-white/15 bg-white/[0.03] text-slate-200 hover:border-brand/40 hover:text-brand"
      }`}
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
