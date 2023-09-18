import { c as createAstro, b as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, i as renderTransition } from '../astro_3791b315.mjs';
import 'html-escaper';
import { $ as $$Navbar, b as $$Layout } from './about_3a2e86c7.mjs';
import { BsWhatsapp } from 'react-icons/bs/index.esm.js';
/* empty css                           *//* empty css                           */import 'clsx';
import '@astrojs/internal-helpers/path';
/* empty css                           */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portofolio Reinaldo Bellorin.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<div class="container-index" data-astro-cid-j7pv25f6${addAttribute(renderTransition($$result2, "benpfmuv", "slide", ""), "data-astro-transition-scope")}><p class="saludo" data-astro-cid-j7pv25f6>Hola, bienvenido👋</p><h3 class="title-text" data-astro-cid-j7pv25f6>Soy Reinaldo Bellorin</h3><h3 class="title-text" data-astro-cid-j7pv25f6>TSU en Informatica & Developer</h3><p class="saludo" data-astro-cid-j7pv25f6>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
      commodi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
      fuga. Ab nisi error inventore, esse officia omnis praesentium cumque
      accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquam nesciunt iure nihil adipisci laborum sed! Est voluptates dolores
      corrupti nobis.
</p><div class="container-botones" data-astro-cid-j7pv25f6><button class="button" data-astro-cid-j7pv25f6><a href="#" class="button-content" data-astro-cid-j7pv25f6>
Descargar CV</a></button><button class="button ws-button" data-astro-cid-j7pv25f6><a href="https://api.whatsapp.com/send/?phone=%2B584248415403&text&type=phone_number&app_absent=0" target="_blank" class="button-content" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>${renderComponent($$result2, "BsWhatsapp", BsWhatsapp, { "data-astro-cid-j7pv25f6": true })}</span>
WhatsApp</a></button></div></div>` })}`;
}, "C:/Users/reybe/OneDrive/Escritorio/portfolio-Reinaldo/src/pages/index.astro", "self");

const $$file = "C:/Users/reybe/OneDrive/Escritorio/portfolio-Reinaldo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
