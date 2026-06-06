const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

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
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
