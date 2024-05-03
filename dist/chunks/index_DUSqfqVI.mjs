import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { b as $$Button, d as $$Icon, $ as $$Container, q as $$FeatureCard } from './Logo_B_2eLjn6.mjs';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://sci-nad.com");
const $$HomeHeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeHeroSection;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-ulkickqi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section__section" data-astro-cid-ulkickqi> <div class="hero-section__text" data-astro-cid-ulkickqi> <h1 data-astro-cid-ulkickqi>Explore the Frontiers of Neuroscience</h1> <p data-astro-cid-ulkickqi>
Welcome to <a href="https://sci-nad.org" target="_blank" rel="noreferrer" data-astro-cid-ulkickqi>SCI-NAD</a>, where the journey through neural pathways begins. Dive into our interactive 3D visualization of the human brain, and discover a dynamic, ever-expanding universe of neuroscience research.
</p> <div class="hero-btns__container" data-astro-cid-ulkickqi> ${renderComponent($$result2, "Button", $$Button, { "href": "/waitlist", "customIcon": true, "data-astro-cid-ulkickqi": true }, { "default": ($$result3) => renderTemplate`Join the Waitlist
 `, "icon": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-ulkickqi": true })} ` })}` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/demo", "unelevated": true, "data-astro-cid-ulkickqi": true }, { "default": ($$result3) => renderTemplate`Watch the Demo` })} </div> ${renderTemplate`${renderComponent($$result2, "ThemeSwitcher", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-ulkickqi": true, "client:component-path": "/Users/h/test/src/components/theme-switcher/theme-switcher", "client:component-export": "ThemeSwitcher" })}`} </div> <div class="hero-section__image" data-astro-cid-ulkickqi> <picture data-astro-cid-ulkickqi> <img src="/assets/images/home/neuroscience-hero.jpg" alt="Interactive 3D Brain Visualization" id="home-hero-image" data-astro-cid-ulkickqi> </picture> </div> </section> ` })} `;
}, "/Users/h/test/src/components/sections/heros/HomeHeroSection.astro", void 0);

const $$Astro = createAstro("https://sci-nad.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeHeroSection", $$HomeHeroSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="feature-card__section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Explore Our Platform</h2> <p data-astro-cid-j7pv25f6>
Dive into the core features of the SCI-NAD platform, designed to revolutionize neuroscience research.
</p> <div class="feature-card__grid" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/platform/visualization", "title": "Interactive 3D Visualization", "imgSrc": "/assets/images/home/screenshots/landing-1", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Discover interactive 3D visualizations of neural activity and brain mapping technologies.
` })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/platform/data-analysis", "title": "Data Analysis Tools", "imgSrc": "/assets/images/home/screenshots/landing-2", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Access advanced tools for data analysis and interpretation, enhancing your research capabilities.
` })} </div> </section> ` })} ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <section class="feature-card__section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Scientific Community</h2> <p data-astro-cid-j7pv25f6>
Connect with a global network of researchers and utilize collaborative tools to enhance your studies.
</p> <div class="feature-card__grid" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/community/collaboration", "title": "Collaborative Projects", "imgSrc": "/assets/images/home/screenshots/about", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Engage with experts and peers in groundbreaking research projects.
` })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/community/events", "title": "Scientific Events", "imgSrc": "/assets/images/home/screenshots/contact", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Stay informed about the latest seminars, workshops, and conferences.
` })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/community/publications", "title": "Latest Publications", "imgSrc": "/assets/images/home/screenshots/blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Explore recent articles and publications from leading neuroscientists.
` })} </div> </section> ` })} ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <section class="feature-card__section" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Support and Documentation</h2> <p data-astro-cid-j7pv25f6>Access comprehensive guides and support resources to maximize your use of the SCI-NAD platform.</p> <div class="feature-card__grid" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/support/get-started", "imgSrc": "/assets/images/home/screenshots/get-started", "title": "Getting Started", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Learn how to get started with SCI-NAD for optimal use of our platform.
` })} ${renderComponent($$result3, "FeatureCard", $$FeatureCard, { "href": "/support/faq", "imgSrc": "/assets/images/home/screenshots/style-guide", "title": "FAQs", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Find answers to frequently asked questions about our platform and services.
` })} </div> </section> ` })} ` })} `;
}, "/Users/h/test/src/pages/index.astro", void 0);

const $$file = "/Users/h/test/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
