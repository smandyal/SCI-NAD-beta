import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute, g as renderSlot, F as Fragment } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { $ as $$Container, i as $$AnnouncementBar, b as $$Button, d as $$Icon, j as $$CustomerQuoteSection, k as $$ThreeColumnTextSection, l as $$YouTubeEmbedSection, m as $$StickyTextImageSection, n as $$CtaCardSection } from './Logo_B_2eLjn6.mjs';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
/* empty css                             */

const $$Astro$1 = createAstro("https://sci-nad.com");
const $$TextAndImageHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextAndImageHero;
  const { reversed } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-k22oaszl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(`text-and-image__section ${reversed && `text-and-image__section--reversed`}`, "class")} data-astro-cid-k22oaszl> <div class="text-and-image__text" data-astro-cid-k22oaszl> ${renderSlot($$result2, $$slots["text-container"])} <div class="text-and-image__btns" data-astro-cid-k22oaszl> ${renderSlot($$result2, $$slots["btns-container"])} </div> </div> <div class="text-and-image__image" data-astro-cid-k22oaszl> ${renderSlot($$result2, $$slots["image-container"])} </div> </section> ` })} `;
}, "/Users/h/test/src/components/sections/heros/TextAndImageHero.astro", void 0);

const $$Astro = createAstro("https://sci-nad.com");
const $$Landing1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing1;
  const seo = {
    title: "Interactive 3D Visualization | SCI-NAD",
    description: "Explore how SCI-NAD\u2019s 3D visualization tools are transforming neuroscience research."
  };
  return renderTemplate`${renderComponent($$result, "AnnouncementBar", $$AnnouncementBar, { "text": "Explore the New Frontiers in Neuroscience with Our 3D Visualization", "href": "/features/3d-visualization", "slot": "announcement-bar" })} ${renderComponent($$result, "Layout", $$Page, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TextAndImageHero", $$TextAndImageHero, { "reversed": true }, { "btns-container": ($$result3) => renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result3, "Button", $$Button, { "href": "/features/3d-visualization", "customIcon": true }, { "default": ($$result4) => renderTemplate`Discover More `, "icon": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "ic:baseline-chevron-right" })} ` })}` })} </div>`, "image-container": ($$result3) => renderTemplate`<picture> <img src="/assets/images/features/3d-brain-visualization.jpg" alt="Interactive 3D Brain Visualization" id="home-hero-image"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h1>Interactive 3D Visualization</h1> <p>Unveiling the complexities of the human brain with unprecedented clarity.</p> </div>` })} ${renderComponent($$result2, "CustomerQuoteSection", $$CustomerQuoteSection, { "quoteText": "The SCI-NAD\u2019s 3D visualization tools have transformed our approach to neurological research, allowing us to see and understand aspects of the brain we never could before.", "customerName": "Dr. Emily Roberts, Neuroscientist" })} ${renderComponent($$result2, "ThreeColumnTextSection", $$ThreeColumnTextSection, {}, { "column-1-body": ($$result3) => renderTemplate`<div> <h2>Accuracy</h2> <p>
Experience the high precision of our 3D models, enhancing the accuracy of neurological studies and surgeries.
</p> </div>`, "column-1-cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "column-1-cta", "outlined": true }, { "default": ($$result4) => renderTemplate`Learn More` })}`, "column-2-body": ($$result3) => renderTemplate`<div> <h2>Interactivity</h2> <p>
Engage with interactive features that allow you to manipulate models for better understanding and analysis.
</p> </div>`, "column-2-cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "column-2-cta", "outlined": true }, { "default": ($$result4) => renderTemplate`Learn More` })}`, "column-3-body": ($$result3) => renderTemplate`<div> <h2>Application</h2> <p>
Discover the wide range of applications, from educational tools to advanced research and clinical practice.
</p> </div>`, "column-3-cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "column-3-cta", "outlined": true }, { "default": ($$result4) => renderTemplate`Learn More` })}` })} ${renderComponent($$result2, "YouTubeEmbedSection", $$YouTubeEmbedSection, { "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "rounded": true })} ${renderComponent($$result2, "StickyTextImageSection", $$StickyTextImageSection, {}, { "image-container": ($$result3) => renderTemplate`<picture> <img src="/assets/images/features/detailed-brain.jpg" alt="Detailed View of the Brain" loading="lazy"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h2>Explore Features</h2> <h3>Real-time Analysis</h3> <p>
Instantly analyze complex neural pathways and interactions within our intuitive platform.
</p> <h3>High Detail</h3> <p>
Our technology captures intricate details of the brain, providing a comprehensive view of its structure.
</p> <h3>Customizable Views</h3> <p>
Customize views and layers to focus on specific areas of interest, enhancing both teaching and research.
</p> </div>` })} ${renderComponent($$result2, "CtaCardSection", $$CtaCardSection, { "background": "var(--theme-surface-2)", "color": "var(--theme-on-surface-2)" }, { "default": ($$result3) => renderTemplate` <h2>Join Our Community Today</h2> <p>
Become part of a pioneering community of neuroscientists and researchers utilizing the latest in 3D visualization technology.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/community/join", "customIcon": true }, { "default": ($$result4) => renderTemplate`Join Now`, "icon": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "ic:baseline-chevron-right" })} ` })}` })} ` })} ` })}`;
}, "/Users/h/test/src/pages/landing-pages/landing-1.astro", void 0);

const $$file = "/Users/h/test/src/pages/landing-pages/landing-1.astro";
const $$url = "/landing-pages/landing-1";

export { $$Landing1 as default, $$file as file, $$url as url };
