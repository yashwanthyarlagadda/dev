import { useEffect } from "react";

/**
 * Adds an "is-visible" class to elements with the `data-reveal` attribute
 * once they scroll into view. Uses IntersectionObserver with a graceful
 * fallback that simply reveals everything.
 */
export function useReveal(): void {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/** Resolve a path in /public against the configured base URL. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
