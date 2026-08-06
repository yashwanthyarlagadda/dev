import { useEffect, useState } from "react";
import { navItems } from "../data/resume";

export default function Nav() {
  const [activeId, setActiveId] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const marker = window.scrollY + 140;
      let current = sections[0]?.id ?? "about";
      for (const section of sections) {
        if (section.offsetTop <= marker) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a
          className="nav__brand"
          href="#about"
          aria-label="Back to top"
        >
          <span className="nav__brand-mark">YY</span>
          <span className="nav__brand-name">Yashwanth Yarlagadda</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${
                activeId === item.id ? "nav__link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
