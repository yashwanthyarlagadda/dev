import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <a className="footer__top" href="#about">
        ↑ Back to top
      </a>
      <span className="footer__copy">
        © {year} {profile.name}. Built with React &amp; Vite.
      </span>
    </footer>
  );
}
