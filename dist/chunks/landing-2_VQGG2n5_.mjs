import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, F as Fragment } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { c as $$FormInput, d as $$Icon, b as $$Button, o as $$Logo, p as $$Base } from './Logo_B_2eLjn6.mjs';
/* empty css                             */

const $$Astro$1 = createAstro("https://sci-nad.com");
const $$LandingContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LandingContactForm;
  return renderTemplate`${maybeRenderHead()}<form name="Contact Form" method="POST" action="/contact-thank-you" data-astro-cid-glhcn673> ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "First Name", "name": "First Name", "placeholder": "Elon", "data-astro-cid-glhcn673": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "Last Name", "name": "Last Name", "placeholder": "Musk", "data-astro-cid-glhcn673": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "email", "label": "Email", "name": "Email", "placeholder": "musk@neuralink.com", "data-astro-cid-glhcn673": true })} ${renderComponent($$result, "Button", $$Button, { "customIcon": true, "data-astro-cid-glhcn673": true }, { "default": ($$result2) => renderTemplate`Submit
 `, "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-glhcn673": true })} ` })}` })} </form> `;
}, "/Users/h/test/src/components/forms/LandingContactForm.astro", void 0);

const $$Astro = createAstro("https://sci-nad.com");
const $$Landing2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing2;
  const seo = {
    title: "Landing Page #2 | Astro Odyssey Theme",
    description: "Landing Page #2 | Astro Odyssey Theme"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo, "data-astro-cid-xeyyrucl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="full-page-split__wrapper" data-astro-cid-xeyyrucl> <section class="full-page-split__image-section" data-astro-cid-xeyyrucl> <div class="full-page-split__logo" data-astro-cid-xeyyrucl> <a href="/" data-astro-cid-xeyyrucl> ${renderComponent($$result2, "Logo", $$Logo, { "data-astro-cid-xeyyrucl": true })} </a> </div> <picture data-astro-cid-xeyyrucl> <img src="/assets/images/home/classic-hero.jpg" alt="Astro Odyssey" class="full-page-split__image" data-astro-cid-xeyyrucl> </picture> </section> <section class="full-page-split__content-section" data-astro-cid-xeyyrucl> <div class="full-page-split__content-container" data-astro-cid-xeyyrucl> <h1 data-astro-cid-xeyyrucl>Contact Us For a Free Consultation</h1> <p data-astro-cid-xeyyrucl>Fill out the form below to schedule a free consultation on your business' website needs.</p> ${renderComponent($$result2, "LandingContactForm", $$LandingContactForm, { "data-astro-cid-xeyyrucl": true })} </div> </section> </div> ` })} `;
}, "/Users/h/test/src/pages/landing-pages/landing-2.astro", void 0);

const $$file = "/Users/h/test/src/pages/landing-pages/landing-2.astro";
const $$url = "/landing-pages/landing-2";

export { $$Landing2 as default, $$file as file, $$url as url };
