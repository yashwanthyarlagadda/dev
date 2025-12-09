// ===== Active nav link on scroll =====
const navLinks = document.querySelectorAll(".site-nav__link");

// Collect sections from nav hrefs
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveLink() {
  let currentId = null;
  const scrollY = window.scrollY + 130; // nav offset

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

// ===== Dark mode toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

function getPreferredTheme() {
  const stored = localStorage.getItem("yy-theme");
  if (stored === "light" || stored === "dark") return stored;

  if (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    root.setAttribute("data-theme", "light");
    if (themeToggle) themeToggle.textContent = "🌙";
  }
}

const initialTheme = getPreferredTheme();
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || initialTheme;
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("yy-theme", next);
    applyTheme(next);
  });
}

// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
