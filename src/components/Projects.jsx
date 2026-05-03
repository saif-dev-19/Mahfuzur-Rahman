import { useRef, useState } from "react";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import SectionTitle from "./SectionTitle.jsx";
import { assets } from "../data/portfolio.js";
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
    <section id="projects" className="relative bg-night section-pad">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${assets.worksBg})`, backgroundSize: "560px" }} />
      <div className="container-shell relative">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <ScrollReveal className="mt-16 flex items-center justify-end gap-4 md:mt-20" delay={120}>
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-ink text-3xl text-brand transition hover:-translate-x-1 hover:bg-steel md:h-16 md:w-16"
            aria-label="Previous projects"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollProjects(1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-ink text-3xl text-brand transition hover:translate-x-1 hover:bg-steel md:h-16 md:w-16"
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
              className="motion-card flex min-h-[620px] w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-br-[40px] rounded-tl-[40px] border border-white/10 bg-ink/95 shadow-glow transition duration-300 hover:-translate-y-2 hover:border-brand/70 sm:w-[420px] md:w-[calc((100%_-_24px)/2)] xl:w-[calc((100%_-_48px)/3)]"
            >
              <div className="bg-night/80 p-4">
                <div className="grid h-64 place-items-center overflow-hidden rounded-tl-[28px] border border-white/10 bg-white/5">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover object-top transition duration-700 hover:scale-105" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <p className="font-mono text-sm text-brand">{project.category || "Project"}</p>
                  <h3 className="mt-3 font-ubuntu text-2xl leading-tight text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-4 line-clamp-4 min-h-28 font-ubuntu text-base leading-7 text-white/80">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full bg-steel px-3 py-1 font-mono text-xs text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid gap-3 pt-8">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="rounded-full border border-brand bg-brand px-5 py-3 text-center font-ubuntu text-sm capitalize text-ink transition hover:bg-mint"
                  >
                    Details
                  </button>
                  <div className="grid gap-3 sm:grid-cols-2">
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
