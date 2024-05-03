import { a as createAstro, b as createComponent, d as renderTemplate } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sci-nad.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate``;
}, "/Users/h/test/src/pages/blog/tags/index.astro", void 0);

const $$file = "/Users/h/test/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

export { $$Index as default, $$file as file, $$url as url };
