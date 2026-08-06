import { experience } from "../data/resume";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience"
      subtitle="Backend systems, production ML infrastructure, and experimentation platforms I've designed, built, and operated."
    >
      <article className="role" data-reveal>
        <header className="role__header">
          <div className="role__mark" aria-hidden="true">
            {experience.company.charAt(0)}
          </div>
          <div className="role__id">
            <h3 className="role__title">{experience.title}</h3>
            <p className="role__company">
              {experience.company} · {experience.location}
            </p>
          </div>
          <span className="role__period">{experience.period}</span>
        </header>

        <p className="role__summary">{experience.summary}</p>
      </article>

      <div className="teams">
        {experience.teams.map((team) => (
          <article className="team" key={team.name} data-reveal>
            <div className="team__rail" aria-hidden="true">
              <span className="team__dot" />
            </div>

            <div className="team__body">
              <header className="team__header">
                <h4 className="team__name">{team.name}</h4>
                {team.current && (
                  <span className="badge badge--current">
                    <span className="badge__dot" /> Current
                  </span>
                )}
              </header>
              <p className="team__note">{team.note}</p>

              <div className="chip-row">
                {team.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="team__projects">
                {team.projects.map((project) => (
                  <div className="project-block" key={project.name}>
                    <div className="project-block__head">
                      <span className="project-block__name">{project.name}</span>
                      <span className="project-block__focus">{project.focus}</span>
                    </div>
                    <ul className="bullets">
                      {project.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
