// ===== Active nav link on scroll =====
const navLinks = document.querySelectorAll(".site-nav__link");

const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveLink() {
  let currentId = null;
  const scrollY = window.scrollY + 130; // offset for sticky nav

  for (const section of sections) {
    if (section.offsetTop <= scrollY) {
      currentId = section.id;
    }
  }

  navLinks.forEach((link) => {
    const target = link.getAttribute("href").slice(1);
    if (target === currentId) {
      link.classList.add("site-nav__link--active");
    } else {
      link.classList.remove("site-nav__link--active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();

// ===== Scroll reveal =====
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
  // Fallback: show all
  revealEls.forEach((el) => el.classList.add("reveal--visible"));
}

// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
