import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Things I've built"
      title="Projects"
      subtitle="Full-stack and serverless applications built with modern backend, cloud, and AI tooling."
    >
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.name} data-reveal>
            <div className="project__top">
              <h3 className="project__name">{project.name}</h3>
              <p className="project__tagline">{project.tagline}</p>
            </div>

            <div className="chip-row">
              {project.stack.map((tech) => (
                <span key={tech} className="chip chip--accent">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="project__list">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <footer className="project__footer">
              {project.technologies.map((tech) => (
                <span key={tech} className="pill pill--ghost">
                  {tech}
                </span>
              ))}
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
