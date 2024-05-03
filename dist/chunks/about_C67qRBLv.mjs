import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, g as renderSlot } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { $ as $$Container, f as $$TextSection } from './Logo_B_2eLjn6.mjs';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://sci-nad.com");
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-6xraqmxa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section__section" data-astro-cid-6xraqmxa> <div class="hero-section__text" data-astro-cid-6xraqmxa> ${renderSlot($$result2, $$slots["text-container"])} </div> <div class="hero-section__image" data-astro-cid-6xraqmxa> ${renderSlot($$result2, $$slots["image-container"])} </div> </section> ` })} `;
}, "/Users/h/test/src/components/sections/heros/HeroSection.astro", void 0);

const $$Astro = createAstro("https://sci-nad.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const seo = {
    title: "About SCI-NAD",
    description: "Learn more about SCI-NAD and our mission to revolutionize neuroscience research."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {}, { "image-container": ($$result3) => renderTemplate`${maybeRenderHead()}<picture> <img src="/assets/images/about/neuro-imaging.jpg" alt="Advanced Neuroscientific Visualization" id="about-hero-image"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h1>About SCI-NAD</h1> <p>
At SCI-NAD, we're dedicated to advancing the frontiers of neuroscience through cutting-edge technology and research. Our platform integrates sophisticated neural mapping with deep scholarly resources to propel neuroscientific discovery and innovation.
</p> </div>` })} ${renderComponent($$result2, "TextSection", $$TextSection, { "narrow": true }, { "default": ($$result3) => renderTemplate` <p>
SCI-NAD leverages immersive 3D visualizations to provide researchers and clinicians unprecedented insights into the human brain. Our collaborative environment facilitates a deeper understanding of neural mechanisms, aiming to foster breakthroughs in both academic and clinical applications.
</p> <p>
Our platform is not just a tool but a gateway to a comprehensive repository of high-impact research. From real-time data analysis to collaborative project management, SCI-NAD is designed to support and enhance the work of neuroscientists around the globe.
</p> <p>
The integration of tools like Zotero for citation management and embedded cloud-based computational notebooks ensures that our users can trace the lineage of research ideas and build on the collective knowledge of the neuroscience community.
</p> <p>
At SCI-NAD, we are committed to making neuroscientific research more accessible and impactful. Join us as we explore new dimensions in neuroscience, pushing the boundaries of what is possible.
</p> ` })} ` })}`;
}, "/Users/h/test/src/pages/company/about.astro", void 0);

const $$file = "/Users/h/test/src/pages/company/about.astro";
const $$url = "/company/about";

export { $$About as default, $$file as file, $$url as url };
