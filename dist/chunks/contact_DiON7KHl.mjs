import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { c as $$FormInput, g as $$FormSelect, h as $$FormTextarea, b as $$Button, $ as $$Container } from './Logo_B_2eLjn6.mjs';
/* empty css                           */
import { $ as $$Page } from './Page_Biy5wPKW.mjs';

const $$Astro$1 = createAstro("https://sci-nad.com");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const selectOptions = [
    "NeuroTechX",
    "LinkedIn",
    "NeuroscienceNews.com"
  ];
  return renderTemplate`${maybeRenderHead()}<form name="Contact Form" method="POST" action="/contact-thank-you" data-astro-cid-baqc3mtv> ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "Name", "name": "Name", "placeholder": "Elon Musk", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "email", "label": "Email", "name": "Email", "placeholder": "musk@neuralink.com", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormSelect", $$FormSelect, { "label": "How Did You Hear About Us?", "options": selectOptions, "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormTextarea", $$FormTextarea, { "label": "Message", "name": "Message", "placeholder": "Your message here...", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "Button", $$Button, { "data-astro-cid-baqc3mtv": true }, { "default": ($$result2) => renderTemplate`Submit` })} </form> `;
}, "/Users/h/test/src/components/forms/ContactForm.astro", void 0);

const $$Astro = createAstro("https://sci-nad.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const seo = {
    title: "Join the Waitlist | SCI-NAD",
    description: "Sign up for the SCI-NAD waitlist to stay ahead in neuroscience research and development."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gum5xmpw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gum5xmpw": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="contact-hero__section" data-astro-cid-gum5xmpw> <div class="contact-hero__text-section" data-astro-cid-gum5xmpw> <h1 data-astro-cid-gum5xmpw>Contact Us</h1> <p data-astro-cid-gum5xmpw>
Sign up to stay informed about the latest developments at SCI-NAD. Get early access to new features, exclusive insights, and updates directly from the frontier of neuroscience research.
</p> <div data-astro-cid-gum5xmpw> <p data-astro-cid-gum5xmpw>
Have questions? Reach out to us:
<em data-astro-cid-gum5xmpw><a href="mailto:support@sci-nad.org" data-astro-cid-gum5xmpw>support@sci-nad.org</a></em> </p> </div> </div> <div class="col-2__container" data-astro-cid-gum5xmpw> ${renderComponent($$result3, "ContactForm", $$ContactForm, { "data-astro-cid-gum5xmpw": true })} </div> </section> ` })} ` })} `;
}, "/Users/h/test/src/pages/company/contact.astro", void 0);

const $$file = "/Users/h/test/src/pages/company/contact.astro";
const $$url = "/company/contact";

export { $$Contact as default, $$file as file, $$url as url };
