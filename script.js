const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setNavState(open) {
  body.classList.toggle("nav-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
  navToggle?.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

navToggle?.addEventListener("click", () => {
  setNavState(!body.classList.contains("nav-open"));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNavState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNavState(false);
});

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 10);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 50}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
