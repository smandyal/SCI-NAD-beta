import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$TextCardSection, b as $$Button, d as $$Icon } from './Logo_B_2eLjn6.mjs';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
/* empty css                               */

const $$Astro = createAstro("https://sci-nad.com");
const $$GetStarted = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GetStarted;
  const seo = {
    title: "Join the Waitlist | SCI-NAD",
    description: "Join our waitlist to get early access to new features and updates from SCI-NAD."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-mz6karmx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-mz6karmx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextCardSection", $$TextCardSection, { "data-astro-cid-mz6karmx": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-mz6karmx>Join the SCI-NAD Waitlist</h1> <p data-astro-cid-mz6karmx>Sign up today to get early access to revolutionary neuroscience tools and research advancements.</p> <div class="cta-buttons__container" data-astro-cid-mz6karmx> ${renderComponent($$result4, "Button", $$Button, { "href": "https://sci-nad.org/register", "outlined": true, "newTab": true, "customIcon": true, "data-astro-cid-mz6karmx": true }, { "default": ($$result5) => renderTemplate`
Register Now
 `, "icon": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-mz6karmx": true })} ` })}` })} ${renderComponent($$result4, "Button", $$Button, { "href": "/updates/latest-features", "customIcon": true, "data-astro-cid-mz6karmx": true }, { "default": ($$result5) => renderTemplate`
Learn About Features
 `, "icon": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-mz6karmx": true })} ` })}` })} ${renderComponent($$result4, "Button", $$Button, { "href": "/updates/news", "customIcon": true, "data-astro-cid-mz6karmx": true }, { "default": ($$result5) => renderTemplate`
Latest News
 `, "icon": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-mz6karmx": true })} ` })}` })} </div> ` })} ` })} ` })} `;
}, "/Users/h/test/src/pages/theme/get-started.astro", void 0);

const $$file = "/Users/h/test/src/pages/theme/get-started.astro";
const $$url = "/theme/get-started";

export { $$GetStarted as default, $$file as file, $$url as url };
