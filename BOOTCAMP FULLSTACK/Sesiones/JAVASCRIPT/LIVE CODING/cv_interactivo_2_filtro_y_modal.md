<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CV interactivo — Filtro y detalles</title>
<style>
:root{--ink:#242424;--muted:#686868;--paper:#f7f5f0;--card:#fff;--accent:#c6f277;--line:#dedbd3}
*{box-sizing:border-box}
/* scroll-behavior: smooth hace que los desplazamientos dentro de la página sean graduales, en lugar de instantáneos. */
html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif;line-height:1.55}
.portfolio__header{display:flex;justify-content:space-between;align-items:center;padding:22px max(6vw,20px);border-bottom:1px solid var(--line)}
.portfolio__logo{font-weight:800;letter-spacing:-.04em;text-decoration:none}
.portfolio__nav{display:flex;gap:22px;font-size:.92rem}
.portfolio__nav a{text-decoration:none;transition:opacity .2s}.portfolio__nav a:hover{opacity:.55}
.portfolio__main{max-width:1000px;margin:auto;padding:50px 22px 90px}
.portfolio__eyebrow{text-transform:uppercase;letter-spacing:.15em;font-size:.76rem;color:var(--muted)}
.portfolio__title{font-size:clamp(2.5rem,7vw,5.7rem);line-height:.98;letter-spacing:-.07em;max-width:780px;margin:14px 0 24px}
.portfolio__heading{font-size:clamp(1.8rem,4vw,3rem);letter-spacing:-.05em;line-height:1.05}
.portfolio__intro{max-width:650px;font-size:1.12rem;color:var(--muted)}
.portfolio__section{margin-top:70px}
.portfolio__controls{display:flex;gap:10px;flex-wrap:wrap;margin:22px 0}
.portfolio__search{font:inherit;padding:12px 14px;border:1px solid #c9c6be;border-radius:999px;background:#fff;min-width:min(100%,260px);flex:1}
.portfolio__search:focus{outline:3px solid #c6f27780;border-color:#555}
.portfolio__button{border:0;border-radius:999px;background:#fff;color:var(--ink);padding:11px 16px;font:inherit;font-weight:700;cursor:pointer;border:1px solid var(--line);transition:transform .2s,background .2s,color .2s}
.portfolio__button:hover{transform:translateY(-2px);background:var(--accent);color:var(--ink)}
.portfolio__button--active{background:var(--ink);color:#fff;border-color:var(--ink)}
.portfolio__projects{display:flex;flex-wrap:wrap;gap:18px}
.portfolio__project{flex:1 1 calc(50% - 18px);min-width:0;border-radius:18px;padding:24px;min-height:230px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;transition:transform .22s,box-shadow .22s}
.portfolio__project:nth-child(4n+1){background:#e8e4da}.portfolio__project:nth-child(4n+2){background:#e4e9d9}.portfolio__project:nth-child(4n+3){background:#e8dfe2}.portfolio__project:nth-child(4n){background:#e0e6eb}
.portfolio__project:hover{transform:translateY(-5px);box-shadow:0 12px 28px #24242412}
.portfolio__project-title{font-size:1.6rem;line-height:1.1;letter-spacing:-.04em;margin:12px 0}
.portfolio__project-description{color:#555;margin-top:0}
.portfolio__category{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase}
.portfolio__project .portfolio__button{margin-top:16px}
.portfolio__count{color:var(--muted);font-size:.9rem;margin:10px 0 20px}
.portfolio__empty{padding:25px;background:#fff;border-radius:14px}
.portfolio__footer{border-top:1px solid var(--line);padding:25px max(6vw,20px);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:.9rem}
.portfolio__back-to-top{position:fixed;right:22px;bottom:22px;width:48px;height:48px;border-radius:50%;padding:0;font-size:1.6rem;line-height:1;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 5px 20px #0002;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s,transform .2s,background .2s;z-index:5}
.portfolio__back-to-top--visible{opacity:1;pointer-events:auto;transform:translateY(0)}
.portfolio__modal-backdrop{position:fixed;inset:0;background:#171717a8;display:flex;align-items:center;justify-content:center;padding:20px;z-index:10;opacity:0;pointer-events:none;transition:opacity .2s}
.portfolio__modal-backdrop--open{opacity:1;pointer-events:auto}
.portfolio__modal{width:min(560px,100%);background:var(--paper);padding:30px;border-radius:20px;transform:translateY(12px);transition:transform .2s;position:relative}
.portfolio__modal-backdrop--open .portfolio__modal{transform:translateY(0)}
.portfolio__modal-title{margin-top:8px}
.portfolio__modal-close{position:absolute;right:18px;top:18px}
.portfolio__hidden{display:none!important}
@media(max-width:650px){.portfolio__header{align-items:flex-start;gap:15px;flex-direction:column}.portfolio__nav{gap:15px;flex-wrap:wrap}.portfolio__project{flex-basis:100%}.portfolio__main{padding-top:35px}.portfolio__footer{flex-direction:column}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition:none!important}}
</style>
</head>
<body>
<header class="portfolio__header" id="top">
  <a class="portfolio__logo" href="#top">Miguel Donaire</a>
  <nav class="portfolio__nav"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav>
</header>
<main class="portfolio__main">
  <section id="sobre-mi">
    <div class="portfolio__eyebrow">Desarrollador · Portfolio personal</div>
    <h1 class="portfolio__title">Ideas que toman forma.</h1>
    <p class="portfolio__intro">Explora una selección de proyectos. Puedes buscar por nombre, filtrar por categoría y abrir cada tarjeta para ver más detalles.</p>
  </section>
  <section class="portfolio__section" id="proyectos">
    <div class="portfolio__eyebrow">Portfolio</div><h2 class="portfolio__heading">Proyectos seleccionados</h2>
    <div class="portfolio__controls" role="search">
      <input class="portfolio__search" id="search" type="search" placeholder="Buscar proyecto..." aria-label="Buscar proyectos">
      <button type="button" class="portfolio__button portfolio__button--active" data-category="Todos">Todos</button>
      <button type="button" class="portfolio__button" data-category="Diseño">Diseño</button>
      <button type="button" class="portfolio__button" data-category="Web">Web</button>
      <button type="button" class="portfolio__button" data-category="Identidad">Identidad</button>
    </div>
    <p class="portfolio__count" id="count" aria-live="polite"></p>
    <div class="portfolio__projects" id="project-grid">
      <article class="portfolio__project" data-title="Marca editorial" data-category="Identidad" data-description="Sistema visual para una pequeña editorial independiente: logotipo, tipografía, paleta de color y aplicaciones impresas.">
        <div><span class="portfolio__category">Identidad · 2026</span><h3 class="portfolio__project-title">Marca editorial</h3><p class="portfolio__project-description">Un lenguaje visual para contar historias.</p></div>
        <button type="button" class="portfolio__button portfolio__button--details">Ver detalles ↗</button>
      </article>
      <article class="portfolio__project" data-title="Aplicación de hábitos" data-category="Diseño" data-description="Propuesta de interfaz para ayudar a organizar rutinas cotidianas con una experiencia clara y amable.">
        <div><span class="portfolio__category">Diseño · 2026</span><h3 class="portfolio__project-title">Aplicación de hábitos</h3><p class="portfolio__project-description">Pequeños pasos, mejores rutinas.</p></div>
        <button type="button" class="portfolio__button portfolio__button--details">Ver detalles ↗</button>
      </article>
      <article class="portfolio__project" data-title="Portfolio creativo" data-category="Web" data-description="Diseño responsive de un portfolio personal, con una estructura sencilla y atención a la lectura en móvil.">
        <div><span class="portfolio__category">Web · 2025</span><h3 class="portfolio__project-title">Portfolio creativo</h3><p class="portfolio__project-description">Una casa digital para el trabajo creativo.</p></div>
        <button type="button" class="portfolio__button portfolio__button--details">Ver detalles ↗</button>
      </article>
      <article class="portfolio__project" data-title="Objeto cotidiano" data-category="Diseño" data-description="Exploración conceptual de un objeto cotidiano a través de forma, materiales y dirección de arte.">
        <div><span class="portfolio__category">Diseño · 2025</span><h3 class="portfolio__project-title">Objeto cotidiano</h3><p class="portfolio__project-description">Mirar de otra manera lo que ya conocemos.</p></div>
        <button type="button" class="portfolio__button portfolio__button--details">Ver detalles ↗</button>
      </article>
      <article class="portfolio__project" data-title="Café de barrio" data-category="Identidad" data-description="Identidad gráfica cálida para una cafetería local, adaptable a carta, packaging y redes sociales.">
        <div><span class="portfolio__category">Identidad · 2025</span><h3 class="portfolio__project-title">Café de barrio</h3><p class="portfolio__project-description">Una identidad cercana y reconocible.</p></div>
        <button type="button" class="portfolio__button portfolio__button--details">Ver detalles ↗</button>
      </article>
      <article class="portfolio__project" data-title="Archivo cultural" data-category="Web" data-description="Concepto de web para organizar actividades culturales y facilitar la exploración de contenidos.">
        <div><span class="portfolio__category">Web · 2024</span><h3 class="portfolio__project-title">Archivo cultural</h3><p class="portfolio__project-description">Encontrar conexiones entre ideas.</p></div>
        <button type="button" class="portfolio__button portfolio__button--details">Ver detalles ↗</button>
      </article>
    </div>
    <p class="portfolio__empty portfolio__hidden" id="empty">No se han encontrado proyectos con esa búsqueda.</p>
  </section>
  <section class="portfolio__section" id="contacto"><div class="portfolio__eyebrow">Contacto</div><h2 class="portfolio__heading">¿Hablamos?</h2><p>Escríbeme a <a href="mailto:hola@ejemplo.com">hola@ejemplo.com</a>.</p></section>
</main>
<footer class="portfolio__footer"><span>© 2026 Miguel Donaire</span><a href="#top">Volver al inicio ↑</a></footer>

<button class="portfolio__button portfolio__back-to-top" id="back-to-top" type="button" aria-label="Volver arriba" title="Volver arriba">↑</button>

<div class="portfolio__modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <section class="portfolio__modal">
    <button type="button" class="portfolio__button portfolio__modal-close" id="modal-close" aria-label="Cerrar ventana">✕</button>
    <div class="portfolio__eyebrow" id="modal-category">Proyecto</div>
    <h2 class="portfolio__modal-title" id="modal-title">Título del proyecto</h2>
    <p id="modal-description"></p>
    <button class="portfolio__button" type="button" id="modal-ok">Cerrar</button>
  </section>
</div>
<script>
const searchInput = document.querySelector("#search");
const filterButtons = document.querySelectorAll("button[data-category]");
const projects = [...document.querySelectorAll(".portfolio__project")];
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
let selectedCategory = "Todos";

function filterProjects() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  projects.forEach(project => {
    const title = project.dataset.title.toLowerCase();
    const category = project.dataset.category;
    const matchesText = title.includes(query);
    const matchesCategory = selectedCategory === "Todos" || category === selectedCategory;
    const show = matchesText && matchesCategory;
    project.classList.toggle("portfolio__hidden", !show);
    if (show) visible++;
  });
  count.textContent = `${visible} proyecto${visible === 1 ? "" : "s"}`;
  empty.classList.toggle("portfolio__hidden", visible !== 0);
}

searchInput.addEventListener("input", filterProjects);
filterButtons.forEach(button => {
  button.addEventListener("click", function() {
    selectedCategory = button.dataset.category;
    filterButtons.forEach(item => item.classList.toggle("portfolio__button--active", item === button));
    filterProjects();
  });
});

const backdrop = document.querySelector("#modal-backdrop");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
function closeModal() {
  backdrop.classList.remove("portfolio__modal-backdrop--open");
}
projects.forEach(project => {
  project.querySelector(".portfolio__button--details").addEventListener("click", function() {
    modalTitle.textContent = project.dataset.title;
    modalCategory.textContent = project.dataset.category;
    modalDescription.textContent = project.dataset.description;
    backdrop.classList.add("portfolio__modal-backdrop--open");
    document.querySelector("#modal-close").focus();
  });
});
document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-ok").addEventListener("click", closeModal);
backdrop.addEventListener("click", function(event) {
  if (event.target === backdrop) closeModal();
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeModal();
});
const backToTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", function() {
  backToTop.classList.toggle("portfolio__back-to-top--visible", window.scrollY > 350);
});
backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

filterProjects();
</script>
</body>
</html>