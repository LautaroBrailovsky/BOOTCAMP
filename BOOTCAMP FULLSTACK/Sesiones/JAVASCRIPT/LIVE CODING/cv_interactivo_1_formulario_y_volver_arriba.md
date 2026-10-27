
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CV interactivo — Contacto y volver arriba</title>
<style>
:root{--ink:#242424;--muted:#686868;--paper:#f7f5f0;--card:#fff;--accent:#c6f277;--line:#dedbd3}
*{box-sizing:border-box}
/* scroll-behavior: smooth hace que los desplazamientos dentro de la página sean graduales, en lugar de instantáneos. */
html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif;line-height:1.55}
a{color:inherit}
.portfolio__header{display:flex;justify-content:space-between;align-items:center;padding:22px max(6vw,20px);border-bottom:1px solid var(--line)}
.portfolio__logo{font-weight:800;letter-spacing:-.04em;text-decoration:none}
.portfolio__nav{display:flex;gap:22px;font-size:.92rem}
.portfolio__nav a{text-decoration:none;transition:opacity .2s}
.portfolio__nav a:hover{opacity:.55}
.portfolio__main{max-width:1000px;margin:auto;padding:50px 22px 90px}
.portfolio__eyebrow{text-transform:uppercase;letter-spacing:.15em;font-size:.76rem;color:var(--muted)}
.portfolio__title{font-size:clamp(2.5rem,7vw,5.7rem);line-height:.98;letter-spacing:-.07em;max-width:780px;margin:14px 0 24px}
.portfolio__heading{font-size:clamp(1.8rem,4vw,3rem);letter-spacing:-.05em;line-height:1.05}
.portfolio__intro{max-width:650px;font-size:1.12rem;color:var(--muted)}
.portfolio__pill{display:inline-block;background:var(--accent);padding:8px 14px;border-radius:999px;font-size:.9rem;margin-top:14px}
.portfolio__section{margin-top:90px}
.portfolio__projects{display:flex;flex-wrap:wrap;gap:18px}
.portfolio__project{flex:1 1 calc(50% - 18px);min-width:0;min-height:180px;background:#e8e4da;border-radius:18px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .22s,box-shadow .22s}
.portfolio__project:nth-child(2){background:#e4e9d9}.portfolio__project:nth-child(3){background:#e8dfe2}.portfolio__project:nth-child(4){background:#e0e6eb}
.portfolio__project:hover{transform:translateY(-5px);box-shadow:0 12px 28px #24242412}
.portfolio__project strong{font-size:1.35rem}
.portfolio__project small{color:var(--muted)}
.portfolio__contact-layout{display:flex;align-items:flex-start;gap:35px}
.portfolio__contact-copy{flex:0 1 40%}
.portfolio__contact-copy p{color:var(--muted)}
.portfolio__contact-form-area{flex:1 1 0;min-width:0;width:100%}
.portfolio__form,.portfolio__success{background:var(--card);padding:26px;border:1px solid var(--line);border-radius:18px}
.portfolio__field{margin-bottom:17px}
.portfolio__label{display:block;font-weight:700;font-size:.9rem;margin-bottom:6px}
.portfolio__input,.portfolio__select,.portfolio__textarea{width:100%;font:inherit;padding:12px 13px;border:1px solid #c9c6be;border-radius:9px;background:#fff;color:var(--ink);transition:border-color .2s,box-shadow .2s}
.portfolio__input:focus,.portfolio__select:focus,.portfolio__textarea:focus{outline:none;border-color:#555;box-shadow:0 0 0 3px #c6f27780}
.portfolio__textarea{min-height:125px;resize:vertical}
.portfolio__error{min-height:1.2em;color:#a32626;font-size:.84rem;margin:5px 0 0}
.portfolio__button{border:0;border-radius:999px;background:var(--ink);color:#fff;padding:12px 19px;font:inherit;font-weight:700;cursor:pointer;transition:transform .2s,background .2s,color .2s}
.portfolio__button:hover{transform:translateY(-2px);background:var(--accent);color:var(--ink)}
.portfolio__button:focus-visible,.portfolio__nav a:focus-visible,.portfolio__footer a:focus-visible{outline:3px solid #779e35;outline-offset:3px}
.portfolio__success{border-color:#b4d875}
.portfolio__success h3{margin-top:0;font-size:1.5rem}
.portfolio__success p{overflow-wrap:anywhere}
.portfolio__hidden{display:none!important}
.portfolio__footer{border-top:1px solid var(--line);padding:25px max(6vw,20px);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:.9rem}
.portfolio__back-to-top{position:fixed;right:22px;bottom:22px;width:48px;height:48px;border-radius:50%;padding:0;font-size:1.4rem;box-shadow:0 5px 20px #0002;opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .2s,transform .2s,background .2s}
.portfolio__back-to-top--visible{opacity:1;pointer-events:auto;transform:translateY(0)}
@media(max-width:650px){.portfolio__header{align-items:flex-start;gap:15px;flex-direction:column}.portfolio__nav{gap:15px;flex-wrap:wrap}.portfolio__project{flex-basis:100%}.portfolio__contact-layout{flex-direction:column}.portfolio__contact-copy,.portfolio__contact-form-area{width:100%}.portfolio__section{margin-top:65px}.portfolio__main{padding-top:35px}.portfolio__footer{flex-direction:column}}
</style>
</head>
<body>
<header class="portfolio__header" id="top">
  <a class="portfolio__logo" href="#top" aria-label="Volver al inicio">Miguel Donaire</a>
  <nav class="portfolio__nav"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav>
</header>
<main class="portfolio__main">
  <section id="sobre-mi">
    <div class="portfolio__eyebrow">Desarrollador · Portfolio personal</div>
    <h1 class="portfolio__title">Diseño digital con intención.</h1>
    <p class="portfolio__intro">Hola, soy Miguel. Me interesa crear experiencias digitales sencillas, útiles y cuidadas. Esta página de ejemplo incorpora interacciones con JavaScript.</p>
    <span class="portfolio__pill">Disponible para nuevos proyectos</span>
  </section>

  <section class="portfolio__section" id="proyectos">
    <div class="portfolio__eyebrow">Una selección</div><h2 class="portfolio__heading">Proyectos destacados</h2>
    <div class="portfolio__projects">
      <article class="portfolio__project"><small>01 / Identidad</small><strong>Marca editorial</strong><span>Diseño visual · 2026</span></article>
      <article class="portfolio__project"><small>02 / Digital</small><strong>Aplicación de hábitos</strong><span>UX/UI · 2026</span></article>
      <article class="portfolio__project"><small>03 / Web</small><strong>Portfolio creativo</strong><span>Diseño web · 2025</span></article>
      <article class="portfolio__project"><small>04 / Concepto</small><strong>Objeto cotidiano</strong><span>Dirección de arte · 2025</span></article>
    </div>
  </section>

  <section class="portfolio__section" id="contacto">
    <div class="portfolio__eyebrow">Hablemos</div><h2 class="portfolio__heading">¿Tienes un proyecto en mente?</h2>
    <div class="portfolio__contact-layout">
      <div class="portfolio__contact-copy">
        <p>Cuéntame un poco qué necesitas y me pondré en contacto contigo.</p>
        <p><strong>Email</strong><br><a href="mailto:hola@ejemplo.com">hola@ejemplo.com</a></p>
        <p><strong>Nota</strong><br>Este formulario es una demostración: no envía datos a ningún servidor.</p>
      </div>
      <div class="portfolio__contact-form-area">
        <form class="portfolio__form" id="contact-form" novalidate>
          <div class="portfolio__field">
            <label class="portfolio__label" for="name">Nombre</label>
            <input class="portfolio__input" id="name" name="name" type="text" autocomplete="name" required minlength="2" placeholder="Tu nombre">
            <p class="portfolio__error" id="name-error" aria-live="polite"></p>
          </div>
          <div class="portfolio__field">
            <label class="portfolio__label" for="email">Correo electrónico</label>
            <input class="portfolio__input" id="email" name="email" type="email" autocomplete="email" required placeholder="nombre@ejemplo.com">
            <p class="portfolio__error" id="email-error" aria-live="polite"></p>
          </div>
          <div class="portfolio__field">
            <label class="portfolio__label" for="profession">¿A qué te dedicas?</label>
            <select class="portfolio__select" id="profession" name="profession" required>
              <option value="">Selecciona una opción</option>
              <option>Diseño</option><option>Desarrollo web</option><option>Estudiante</option><option>Otro</option>
            </select>
            <p class="portfolio__error" id="profession-error" aria-live="polite"></p>
          </div>
          <div class="portfolio__field">
            <label class="portfolio__label" for="message">Mensaje</label>
            <textarea class="portfolio__textarea" id="message" name="message" required minlength="10" placeholder="Cuéntame brevemente tu idea"></textarea>
            <p class="portfolio__error" id="message-error" aria-live="polite"></p>
          </div>
          <button class="portfolio__button" type="submit">Enviar mensaje ↗</button>
        </form>
        <section class="portfolio__success portfolio__hidden" id="success" aria-live="polite">
          <h3>¡Muchas gracias!</h3>
          <p>Tu mensaje se ha enviado correctamente.</p>
          <p><strong>Resumen de tu mensaje</strong></p>
          <div class="portfolio__summary" id="summary">
            <p><strong>Nombre:</strong> <span id="summary-name"></span></p>
            <p><strong>Correo:</strong> <span id="summary-email"></span></p>
            <p><strong>Profesión:</strong> <span id="summary-profession"></span></p>
            <p><strong>Mensaje:</strong> <span id="summary-message"></span></p>
          </div>
          <p><small>Demostración de clase: no se ha enviado ningún correo.</small></p>
          <button class="portfolio__button" type="button" id="send-another">Enviar otro mensaje</button>
        </section>
      </div>
    </div>
  </section>
</main>
<footer class="portfolio__footer"><span>© 2026 Miguel Donaire</span><a href="mailto:hola@ejemplo.com">Escríbeme ↗</a></footer>
<button class="portfolio__button portfolio__back-to-top" id="back-to-top" type="button" aria-label="Volver arriba" title="Volver arriba">↑</button>
<script>
const form = document.querySelector("#contact-form");
const success = document.querySelector("#success");
const fields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  profession: document.querySelector("#profession"),
  message: document.querySelector("#message")
};

function isValidEmail(value) {
  // Patrón introductorio para practicar expresiones regulares; no cubre todos los formatos posibles.
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

function showError(fieldName, message) {
  document.querySelector(`#${fieldName}-error`).textContent = message;
}

form.addEventListener("submit", function(event) {
  // Evita la navegación/recarga que haría normalmente el envío del formulario.
  event.preventDefault();
  Object.keys(fields).forEach(key => showError(key, ""));

  let valid = true;
  if (!fields.name.checkValidity()) {
    showError("name", "Escribe tu nombre (al menos 2 caracteres).");
    valid = false;
  }
  if (!fields.email.checkValidity() || !isValidEmail(fields.email.value.trim())) {
    showError("email", "Introduce un correo válido, por ejemplo nombre@ejemplo.com.");
    valid = false;
  }
  if (!fields.profession.value) {
    showError("profession", "Selecciona una opción.");
    valid = false;
  }
  if (!fields.message.checkValidity()) {
    showError("message", "Escribe un mensaje de al menos 10 caracteres.");
    valid = false;
  }
  if (!valid) return;

  // Rellenamos los campos del resumen que ya existen en el HTML.
  // Es una demostración: los datos no se envían a un servidor.
  document.querySelector("#summary-name").textContent = fields.name.value.trim();
  document.querySelector("#summary-email").textContent = fields.email.value.trim();
  document.querySelector("#summary-profession").textContent = fields.profession.value;
  document.querySelector("#summary-message").textContent = fields.message.value.trim();
  form.classList.add("portfolio__hidden");
  success.classList.remove("portfolio__hidden");
});

document.querySelector("#send-another").addEventListener("click", function() {
  form.reset();
  success.classList.add("portfolio__hidden");
  form.classList.remove("portfolio__hidden");
  fields.name.focus();
});

const backToTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", function() {
  backToTop.classList.toggle("portfolio__back-to-top--visible", window.scrollY > 350);
});
backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
</body>
</html>