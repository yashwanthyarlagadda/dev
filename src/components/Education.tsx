import Section from "./Section";
import { education } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" eyebrow="Academic background" title="Education">
      <div className="edu">
        {education.map((item) => (
          <article className="edu-card" key={item.school} data-reveal>
            <div className="edu-card__badge">{item.degree}</div>
            <div className="edu-card__body">
              <h3 className="edu-card__school">{item.school}</h3>
              <p className="edu-card__field">{item.field}</p>
              <p className="edu-card__meta">
                {item.location} · {item.period}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
