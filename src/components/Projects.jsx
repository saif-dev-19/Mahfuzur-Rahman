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
    <section id="projects" className="relative bg-night/82 section-pad">
      <div className="container-shell relative">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <ScrollReveal className="mt-10 flex items-center justify-end gap-3 md:mt-12" delay={120}>
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink text-2xl text-brand transition hover:-translate-x-1 hover:bg-steel md:h-12 md:w-12"
            aria-label="Previous projects"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollProjects(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink text-2xl text-brand transition hover:translate-x-1 hover:bg-steel md:h-12 md:w-12"
            aria-label="Next projects"
          >
            ›
          </button>
        </ScrollReveal>

        <div
          ref={scrollerRef}
          className="project-scroll mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
          aria-label="Project list"
        >
          {data.items.map((project, index) => (
            <ScrollReveal
              as="article"
              key={`${project.title}-${index}`}
              delay={index * 90}
              variant="scale"
              className="motion-card flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-br-[28px] rounded-tl-[28px] border border-white/10 bg-ink/95 shadow-glow transition duration-300 hover:-translate-y-2 hover:border-brand/70 sm:w-[330px] md:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]"
            >
              <div className="bg-night/80 p-3">
                <div className="grid h-40 place-items-center overflow-hidden rounded-tl-[20px] border border-white/10 bg-white/5 md:h-44">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover object-top transition duration-700 hover:scale-105" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div>
                  <p className="font-mono text-xs text-brand">{project.category || "Project"}</p>
                  <h3 className="mt-2 font-ubuntu text-xl leading-tight text-white md:text-2xl">{project.title}</h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full bg-steel px-3 py-1 font-mono text-xs text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid gap-2 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="rounded-full border border-brand bg-brand px-4 py-2.5 text-center font-ubuntu text-sm capitalize text-ink transition hover:bg-mint"
                  >
                    Details
                  </button>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <ProjectLink href={project.githubUrl} label="Github" />
                    <ProjectLink href={project.liveUrl} label="Live Demo" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectDetails({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/85 px-4 py-8 backdrop-blur-sm">
      <article className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-br-[48px] rounded-tl-[48px] border border-brand/50 bg-ink shadow-glow">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid min-h-72 place-items-center bg-night p-8">
            <img src={project.image} alt={project.title} className="max-h-[420px] w-full object-contain" />
          </div>

          <div className="flex flex-col p-7 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-sm text-brand">{project.category}</p>
                <h3 className="mt-3 font-ubuntu text-3xl leading-tight text-white md:text-5xl">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand text-2xl text-brand transition hover:bg-brand hover:text-ink"
                aria-label="Close project details"
              >
                ×
              </button>
            </div>

            <p className="mt-8 font-ubuntu text-base leading-8 text-white/85 md:text-lg">
              {project.details}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-steel px-3 py-1 font-mono text-xs text-white">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <ProjectLink href={project.githubUrl} label="Github" />
              <ProjectLink href={project.liveUrl} label="Live Demo" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function ProjectLink({ href, label }) {
  return (
    <a
      href={href || "#"}
      className="rounded-full border border-brand px-4 py-3 text-center font-ubuntu text-sm capitalize text-white transition hover:bg-brand hover:text-ink"
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
