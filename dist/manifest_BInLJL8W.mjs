import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_BTpTuATe.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/h/test/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/blog/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/tags","isIndex":true,"type":"page","pattern":"^\\/blog\\/tags\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/tags/index.astro","pathname":"/blog/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/company/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/company/about","isIndex":false,"type":"page","pattern":"^\\/company\\/about\\/?$","segments":[[{"content":"company","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/company/about.astro","pathname":"/company/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/company/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/company/contact","isIndex":false,"type":"page","pattern":"^\\/company\\/contact\\/?$","segments":[[{"content":"company","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/company/contact.astro","pathname":"/company/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/company/legal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/company/legal","isIndex":false,"type":"page","pattern":"^\\/company\\/legal\\/?$","segments":[[{"content":"company","dynamic":false,"spread":false}],[{"content":"legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/company/legal.astro","pathname":"/company/legal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/landing-pages/landing-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/landing-pages/landing-1","isIndex":false,"type":"page","pattern":"^\\/landing-pages\\/landing-1\\/?$","segments":[[{"content":"landing-pages","dynamic":false,"spread":false}],[{"content":"landing-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing-pages/landing-1.astro","pathname":"/landing-pages/landing-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/landing-pages/landing-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/landing-pages/landing-2","isIndex":false,"type":"page","pattern":"^\\/landing-pages\\/landing-2\\/?$","segments":[[{"content":"landing-pages","dynamic":false,"spread":false}],[{"content":"landing-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing-pages/landing-2.astro","pathname":"/landing-pages/landing-2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/theme/customizing-odyssey/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/theme/customizing-odyssey","isIndex":false,"type":"page","pattern":"^\\/theme\\/customizing-odyssey\\/?$","segments":[[{"content":"theme","dynamic":false,"spread":false}],[{"content":"customizing-odyssey","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/theme/customizing-odyssey.mdx","pathname":"/theme/customizing-odyssey","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/theme/get-started/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/theme/get-started","isIndex":false,"type":"page","pattern":"^\\/theme\\/get-started\\/?$","segments":[[{"content":"theme","dynamic":false,"spread":false}],[{"content":"get-started","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/theme/get-started.astro","pathname":"/theme/get-started","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/theme/style-guide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/theme/style-guide","isIndex":false,"type":"page","pattern":"^\\/theme\\/style-guide\\/?$","segments":[[{"content":"theme","dynamic":false,"spread":false}],[{"content":"style-guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/theme/style-guide.astro","pathname":"/theme/style-guide","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/theme/theme-setup/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/theme/theme-setup","isIndex":false,"type":"page","pattern":"^\\/theme\\/theme-setup\\/?$","segments":[[{"content":"theme","dynamic":false,"spread":false}],[{"content":"theme-setup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/theme/theme-setup.mdx","pathname":"/theme/theme-setup","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/h/test/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sci-nad.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/h/test/src/pages/theme/customizing-odyssey.mdx",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/theme/theme-setup.mdx",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/blog/tags/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/company/about.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/company/contact.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/company/legal.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/landing-pages/landing-1.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/theme/get-started.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/theme/style-guide.astro",{"propagation":"none","containsHead":true}],["/Users/h/test/src/pages/landing-pages/landing-2.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/tags/[slug]@_@astro":"pages/blog/tags/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/tags/index@_@astro":"pages/blog/tags.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/company/about@_@astro":"pages/company/about.astro.mjs","\u0000@astro-page:src/pages/company/contact@_@astro":"pages/company/contact.astro.mjs","\u0000@astro-page:src/pages/company/legal@_@astro":"pages/company/legal.astro.mjs","\u0000@astro-page:src/pages/landing-pages/landing-1@_@astro":"pages/landing-pages/landing-1.astro.mjs","\u0000@astro-page:src/pages/landing-pages/landing-2@_@astro":"pages/landing-pages/landing-2.astro.mjs","\u0000@astro-page:src/pages/theme/customizing-odyssey@_@mdx":"pages/theme/customizing-odyssey.astro.mjs","\u0000@astro-page:src/pages/theme/get-started@_@astro":"pages/theme/get-started.astro.mjs","\u0000@astro-page:src/pages/theme/style-guide@_@astro":"pages/theme/style-guide.astro.mjs","\u0000@astro-page:src/pages/theme/theme-setup@_@mdx":"pages/theme/theme-setup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BInLJL8W.mjs","/src/pages/404.astro":"chunks/404_BUgXPRhy.mjs","/src/pages/blog/tags/[slug].astro":"chunks/_slug__BcHyWj_k.mjs","/src/pages/blog/tags/index.astro":"chunks/index_7LrMpIg6.mjs","/src/pages/blog/index.astro":"chunks/index_Ct1Gpnev.mjs","/src/pages/company/about.astro":"chunks/about_C67qRBLv.mjs","/src/pages/company/contact.astro":"chunks/contact_DiON7KHl.mjs","/src/pages/company/legal.astro":"chunks/legal_BGlnIU-d.mjs","/src/pages/landing-pages/landing-1.astro":"chunks/landing-1_QgkKgTD8.mjs","/src/pages/landing-pages/landing-2.astro":"chunks/landing-2_VQGG2n5_.mjs","/src/pages/theme/customizing-odyssey.mdx":"chunks/customizing-odyssey_ZqCFND9z.mjs","/src/pages/theme/get-started.astro":"chunks/get-started_Dz6xWAxn.mjs","/src/pages/theme/style-guide.astro":"chunks/style-guide_BwInP_7V.mjs","/src/pages/theme/theme-setup.mdx":"chunks/theme-setup_DUtc9OXV.mjs","/src/pages/index.astro":"chunks/index_DUSqfqVI.mjs","/Users/h/test/src/layouts/Post.astro":"chunks/Post_BwaWF2Lz.mjs","@astrojs/lit/dist/client.js":"_astro/client.DEGHhFmz.js","/astro/hoisted.js?q=0":"_astro/hoisted.l0sNRNKZ.js","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.Cdv5htNp.js","/Users/h/test/src/components/theme-switcher/theme-switcher":"_astro/theme-switcher.CXXJDOSD.js"},"inlinedScripts":[],"assets":["/file:///Users/h/test/dist/404.html","/file:///Users/h/test/dist/blog/tags/index.html","/file:///Users/h/test/dist/blog/index.html","/file:///Users/h/test/dist/company/about/index.html","/file:///Users/h/test/dist/company/contact/index.html","/file:///Users/h/test/dist/company/legal/index.html","/file:///Users/h/test/dist/landing-pages/landing-1/index.html","/file:///Users/h/test/dist/landing-pages/landing-2/index.html","/file:///Users/h/test/dist/theme/customizing-odyssey/index.html","/file:///Users/h/test/dist/theme/get-started/index.html","/file:///Users/h/test/dist/theme/style-guide/index.html","/file:///Users/h/test/dist/theme/theme-setup/index.html","/file:///Users/h/test/dist/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
