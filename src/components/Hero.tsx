import { contact, profile, stats } from "../data/resume";
import { asset } from "../hooks/useReveal";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__grid">
        <div className="hero__content" data-reveal>
          <span className="hero__status">
            <span className="hero__status-dot" />
            {profile.availability}
          </span>

          <span className="hero__eyebrow">
            {profile.role} · {profile.location}
          </span>

          <h1 className="hero__title">
            Hi, I'm <span className="hero__title-accent">Yashwanth</span>.
          </h1>

          <p className="hero__lead">{profile.tagline}</p>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__focus">
            {profile.focusAreas.map((area) => (
              <span key={area} className="tag">
                {area}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#experience">
              View experience <ArrowIcon size={17} />
            </a>
            <a
              className="btn btn--outline"
              href={asset(profile.resumePath)}
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon size={17} /> Download resume
            </a>
          </div>

          <div className="hero__contact">
            <a className="hero__contact-item" href={`mailto:${contact.email}`}>
              <MailIcon size={16} /> {contact.email}
            </a>
            <span className="hero__contact-item">
              <PinIcon size={16} /> {contact.location}
            </span>
            <a
              className="hero__contact-item"
              href={contact.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              className="hero__contact-item"
              href={contact.github.href}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero__aside" data-reveal>
          <div className="hero__photo-frame">
            <img
              className="hero__photo"
              src={asset(profile.photoPath)}
              alt="Portrait of Yashwanth Yarlagadda"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="hero__stats" data-reveal>
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
