import Section from "./Section";
import { contact, profile } from "../data/resume";
import { asset } from "../hooks/useReveal";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  LinkedInIcon,
  GitHubIcon,
  DownloadIcon,
} from "./Icons";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's connect"
      subtitle="Open to opportunities in backend engineering, production ML infrastructure, and GenAI-powered products."
    >
      <div className="contact" data-reveal>
        <div className="contact__cards">
          <a className="contact-card" href={`mailto:${contact.email}`}>
            <span className="contact-card__icon">
              <MailIcon size={20} />
            </span>
            <span className="contact-card__text">
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">{contact.email}</span>
            </span>
          </a>

          <a className="contact-card" href={`tel:${contact.phoneHref}`}>
            <span className="contact-card__icon">
              <PhoneIcon size={20} />
            </span>
            <span className="contact-card__text">
              <span className="contact-card__label">Phone</span>
              <span className="contact-card__value">{contact.phone}</span>
            </span>
          </a>

          <a
            className="contact-card"
            href={contact.linkedin.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__icon">
              <LinkedInIcon size={20} />
            </span>
            <span className="contact-card__text">
              <span className="contact-card__label">LinkedIn</span>
              <span className="contact-card__value">{contact.linkedin.label}</span>
            </span>
          </a>

          <a
            className="contact-card"
            href={contact.github.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__icon">
              <GitHubIcon size={20} />
            </span>
            <span className="contact-card__text">
              <span className="contact-card__label">GitHub</span>
              <span className="contact-card__value">{contact.github.label}</span>
            </span>
          </a>

          <span className="contact-card contact-card--static">
            <span className="contact-card__icon">
              <PinIcon size={20} />
            </span>
            <span className="contact-card__text">
              <span className="contact-card__label">Location</span>
              <span className="contact-card__value">{contact.location}</span>
            </span>
          </span>

          <a
            className="contact-card contact-card--cta"
            href={asset(profile.resumePath)}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__icon">
              <DownloadIcon size={20} />
            </span>
            <span className="contact-card__text">
              <span className="contact-card__label">Resume</span>
              <span className="contact-card__value">Download PDF</span>
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
