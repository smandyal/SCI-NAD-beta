import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$TextCardSection, b as $$Button } from './Logo_B_2eLjn6.mjs';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
/* empty css                       */

const $$Astro = createAstro("https://sci-nad.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seo = {
    title: "Get Started using the Astro Odyssey Theme",
    description: "Get started on how to setup and use this Astro theme."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextCardSection", $$TextCardSection, { "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-zetdm5md>404</h1> <h2 data-astro-cid-zetdm5md>Page Not Found 👀</h2> <div class="cta-buttons__container" data-astro-cid-zetdm5md> ${renderComponent($$result4, "Button", $$Button, { "href": "/", "data-astro-cid-zetdm5md": true }, { "default": ($$result5) => renderTemplate`
Return Home
` })} </div> ` })} ` })} ` })} `;
}, "/Users/h/test/src/pages/404.astro", void 0);

const $$file = "/Users/h/test/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
