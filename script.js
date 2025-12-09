// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
  
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  
  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top");
  
  function handleScroll() {
    if (window.scrollY > 240) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }
  window.addEventListener("scroll", handleScroll);
  
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Active section highlighting (desktop nav)
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  function highlightNav() {
    let current = null;
  
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 160) {
        current = section.id;
      }
    });
  
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").replace("#", "");
      if (href === current) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
  window.addEventListener("scroll", highlightNav);
  window.addEventListener("load", highlightNav);
  
  // Theme toggle (light/dark)
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");
  
  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      themeIcon.textContent = "☀️";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeIcon.textContent = "🌙";
    }
  }
  
  function getPreferredTheme() {
    const saved = localStorage.getItem("yy-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  
  let currentTheme = getPreferredTheme();
  applyTheme(currentTheme);
  
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("yy-theme", currentTheme);
    applyTheme(currentTheme);
  });
  
  // Reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  
  document.querySelectorAll(".section, .timeline-item, .card").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
  
  // Dynamic year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  