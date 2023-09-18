import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, i as renderTransition } from '../astro_3791b315.mjs';
import 'html-escaper';
import { $ as $$Navbar, b as $$Layout } from './about_3a2e86c7.mjs';
import { BsGithub } from 'react-icons/bs/index.esm.js';
/* empty css                              *//* empty css                           */import 'clsx';
import '@astrojs/internal-helpers/path';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { repo, img, tecnologies, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container-card" data-astro-cid-dohjnao5><a${addAttribute(repo, "href")} target="_blank" data-astro-cid-dohjnao5><img${addAttribute(img, "src")}${addAttribute(title, "alt")} data-astro-cid-dohjnao5></a><h5 class="title-card" data-astro-cid-dohjnao5>${title}</h5><section class="tenologias" data-astro-cid-dohjnao5>${tecnologies.map((tech) => renderTemplate`<img${addAttribute(tech, "src")} class="tecnologias-usadas" data-astro-cid-dohjnao5>`)}</section><p data-astro-cid-dohjnao5>${body}</p><div class="div-repo" data-astro-cid-dohjnao5><a class="repo"${addAttribute(repo, "href")} data-astro-cid-dohjnao5><span data-astro-cid-dohjnao5>${renderComponent($$result, "BsGithub", BsGithub, { "data-astro-cid-dohjnao5": true })}</span><label for="" data-astro-cid-dohjnao5>Ver el codigo</label></a></div></div>`;
}, "C:/Users/reybe/OneDrive/Escritorio/portfolio-Reinaldo/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portofolio Reinaldo Bellorin.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-aid3sr62": true })}${maybeRenderHead()}<div class="container-projects" data-astro-cid-aid3sr62${addAttribute(renderTransition($$result2, "7ftz4ykn", "slide", ""), "data-astro-transition-scope")}><h2 class="text-project" data-astro-cid-aid3sr62>Proyectos</h2><div class="container" data-astro-cid-aid3sr62><div class="container-cards-projects" data-astro-cid-aid3sr62>${renderComponent($$result2, "Card", $$Card, { "title": "Portafolio", ",": true, "body": "Portfolio web donde muestro informaci\xF3n sobre m\xED como el stack tecnol\xF3gico, proyectos personales, poder contactar conmigo v\xEDa redes sociales o correo electr\xF3nico, ver mi experiencia.", ",": true, "repo": "https://github.com/Reinaldito04/portfolio", ",": true, "img": "/Portfolio.png", ",": true, "tecnologies": ["/astro.svg"], "data-astro-cid-aid3sr62": true })}${renderComponent($$result2, "Card", $$Card, { "title": "Aplicacion de Escritorio", "body": "Aplicacion de Escritorio para el control de consultas e historias medicas de un consultorio, permite agregar,eliminar,editar y actualizar citas ,pacientes ,procedimientos ,etc", "repo": "test", "img": "/consultorio.png", "tecnologies": ["/python.svg", "/qt.svg"], "data-astro-cid-aid3sr62": true })}${renderComponent($$result2, "Card", $$Card, { "title": "Periodico Escolar", "body": "Periodico Escolar con la capacidad de subir noticias , acotecimientos importantes , curiosidades ,etc , adem\xE1s cuenta con informaci\xF3n referent a la instituci\xF3n ", "repo": "https://github.com/Reinaldito04/Periodico", "img": "/periodico.png", "tecnologies": ["/php.svg", "/jquery.svg", "/boostrap.svg"], "data-astro-cid-aid3sr62": true })}${renderComponent($$result2, "Card", $$Card, { "title": "Heladeria (test)", "body": "Aplicaci\xF3n web SPA realizada con React con componentes reutilizables, prueba del instituto (estudiantil)", "repo": "https://github.com/Reinaldito04/heladeria-reinaldo", "img": "/heladeria.png", "tecnologies": ["/react.svg"], "data-astro-cid-aid3sr62": true })}</div></div></div>` })}`;
}, "C:/Users/reybe/OneDrive/Escritorio/portfolio-Reinaldo/src/pages/projects.astro", "self");

const $$file = "C:/Users/reybe/OneDrive/Escritorio/portfolio-Reinaldo/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
