import Section from "./Section";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Skills"
      subtitle="The languages, cloud services, and tools I use to design, build, and operate production systems."
    >
      <div className="skills">
        {skills.map((category) => (
          <div className="skill-card" key={category.label} data-reveal>
            <h3 className="skill-card__label">{category.label}</h3>
            <div className="skill-card__tags">
              {category.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
