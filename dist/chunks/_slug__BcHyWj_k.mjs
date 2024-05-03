import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { $ as $$Page } from './Page_Biy5wPKW.mjs';
import { $ as $$Container } from './Logo_B_2eLjn6.mjs';
import { g as generateTagData } from './helpers_CRdKBoFS.mjs';
/* empty css                          */

const $$Astro = createAstro("https://sci-nad.com");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.mdx");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
  const allCategoriesUnique = /* @__PURE__ */ new Set();
  sortedPosts.forEach((post) => {
    post.frontmatter.tags && post.frontmatter.tags.map((tag) => {
      allCategoriesUnique.add(tag);
    });
  });
  const allCategoriesData = generateTagData(allCategoriesUnique);
  return allCategoriesData.map((tag) => {
    const posts = sortedPosts.filter((post) => post.frontmatter.tags.includes(tag.title));
    return {
      params: { slug: tag.slug },
      props: {
        tag: tag.title,
        posts
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { tag, posts } = Astro2.props;
  const seo = {
    title: `${tag} | Astro Odyssey`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-5igcag46": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "narrow": true, "data-astro-cid-5igcag46": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="tag-page__section" data-astro-cid-5igcag46> <h1 data-astro-cid-5igcag46>Posts Tagged with "${tag}"</h1> <ul data-astro-cid-5igcag46> ${posts.map((post) => renderTemplate`<li data-astro-cid-5igcag46><a${addAttribute(post.url, "href")} data-astro-cid-5igcag46>${post.frontmatter.title}</a></li>`)} </ul> </section> ` })} ` })} `;
}, "/Users/h/test/src/pages/blog/tags/[slug].astro", void 0);

const $$file = "/Users/h/test/src/pages/blog/tags/[slug].astro";
const $$url = "/blog/tags/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
