// --- Highlight active nav link based on scroll position ---
const navLinks = document.querySelectorAll(".site-nav__link");

// Build list of sections linked from nav
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveLink() {
  let current = null;
  const scrollY = window.scrollY + 130; // offset for sticky header

  for (const section of sections) {
    if (section.offsetTop <= scrollY) {
      current = section.id;
    }
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").slice(1);
    if (href === current) {
      link.classList.add("site-nav__link--active");
    } else {
      link.classList.remove("site-nav__link--active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink(); // initialize


// --- Scroll reveal animation ---
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealEls.forEach((el) => el.classList.add("reveal--visible"));
}
