import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, F as Fragment } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { parse, isBefore } from 'date-fns';
import { c as $$FormInput, d as $$Icon, b as $$Button, $ as $$Container, a as $$TextCardSection, e as $$BlogPostsList } from './Logo_B_2eLjn6.mjs';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://sci-nad.com");
const $$NewsletterForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsletterForm;
  return renderTemplate`${maybeRenderHead()}<form name="Newsletter Form" method="POST" action="/newsletter-thank-you" data-astro-cid-eiktfxgb> <div class="newsletter-form__container" data-astro-cid-eiktfxgb> ${renderComponent($$result, "FormInput", $$FormInput, { "name": "Email", "placeholder": "musk@neuralink.com", "data-astro-cid-eiktfxgb": true })} ${renderComponent($$result, "Button", $$Button, { "customIcon": true, "data-astro-cid-eiktfxgb": true }, { "default": ($$result2) => renderTemplate`Submit
 `, "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-eiktfxgb": true })} ` })}` })} </div> </form> `;
}, "/Users/h/test/src/components/forms/NewsletterForm.astro", void 0);

const $$Astro = createAstro("https://sci-nad.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "./posts/*.mdx").then(
    (posts2) => posts2.map(({ frontmatter, url }) => ({
      title: frontmatter.title,
      description: frontmatter.description,
      authors: frontmatter.authors,
      publishDate: parse(frontmatter.publishDate, "MMMM d, yyyy", /* @__PURE__ */ new Date()),
      featuredImage: frontmatter.featuredImage,
      excerpt: frontmatter.excerpt,
      href: url
    })).sort((a, b) => {
      if (isBefore(a.publishDate, b.publishDate))
        return 1;
      if (isBefore(b.publishDate, a.publishDate))
        return -1;
      return 0;
    })
  );
  const seo = {
    title: "Blog | Astro Odyssey Theme",
    description: "Astro Odyssey Theme Blog Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-5tznm7mj": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextCardSection", $$TextCardSection, { "data-astro-cid-5tznm7mj": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-5tznm7mj>Blog</h1> <p data-astro-cid-5tznm7mj>
View our blog to stay up to date on the latest news about SCI-NAD.
				Want to be the first to hear about a new blog post? Join our newsletter!
</p> ${renderComponent($$result4, "NewsletterForm", $$NewsletterForm, { "data-astro-cid-5tznm7mj": true })} ` })} <section class="blog-posts-list__section" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>Recent Posts</h2> ${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": posts, "data-astro-cid-5tznm7mj": true })} </section> ` })} ` })} `;
}, "/Users/h/test/src/pages/blog/index.astro", void 0);

const $$file = "/Users/h/test/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
