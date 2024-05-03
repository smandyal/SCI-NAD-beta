import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, g as renderSlot } from './astro/server_BTpTuATe.mjs';
import 'kleur/colors';
import { r as $$Footer, s as settings, o as $$Logo, t as $$Header, b as $$Button, p as $$Base } from './Logo_B_2eLjn6.mjs';

const footerSocials = [
	{
	  name: 'Twitter',
	  url: 'https://twitter.com/SCI-NAD',
	  icon: "mdi:twitter",
	},
	{
	  name: 'Youtube',
	  url: 'https://youtube.com/c/SCI-NAD',
	  icon: "mdi:youtube",
	},
	{
	  name: 'Github',
	  url: 'https://github.com/SCI-NAD',
	  icon: "mdi:github",
	},
	{
	  name: 'Discord',
	  url: 'https://sci-nad.org/discord',
	  icon: "ic:baseline-discord",
	},
  ];
  
  const footerLists = [
	  {
		  title: 'Explore Our Platform',
		  items: [
			  {
				  title: 'Interactive 3D Visualization',
				  slug: '/landing-pages/landing-1',
			  },
			  {
				  title: 'Data Analysis Tools',
				  slug: '/landing-pages/landing-2',
			  },
		// {
			  // 	title: 'Landing Page 3',
			  // 	slug: '/landing-pages/landing-3',
			  // },
		  ],
	  },
	  {
		  title: 'Company',
		  items: [
			  {
				  title: 'About',
				  slug: '/company/about',
			  },
			  {
				  title: 'Blog',
				  slug: '/blog',
			  },
			  {
				  title: 'Contact',
				  slug: '/company/contact',
			  },
		  ],
	  },
	  {
		  title: 'Scientific Community',
		  items: [
			  {
				  title: 'Join the Waitlist',
				  slug: '/theme/get-started',
			  },
			  {
				  title: 'Collaborative Projects',
				  slug: '/theme/style-guide',
			  },
		{
		  title: 'Scientific Events',
		  slug: '/theme/theme-setup',
		},
		{
		  title: 'FAQs',
		  slug: '/theme/customizing-odyssey',
		}
		  ],
	  },
  ];

const nav = [
	{
		title: 'Home',
		slug: '/',
	},
	{
		title: 'Blog',
		slug: '/blog',
	},
	{
		title: 'About',
		slug: '/company/about',
	},
	{
		title: 'Contact',
		slug: '/company/contact',
	},
];

const $$Astro = createAstro("https://sci-nad.com");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { seo } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="page"> ${renderSlot($$result2, $$slots["default"])} </div>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "background": "var(--theme-surface-1)", "color": "var(--theme-on-surface-1)", "footerLists": footerLists, "footerSocials": footerSocials, "copyrightName": settings.name, "showLittleSticksPlug": settings.showLittleSticksPlug }, { "logo": ($$result3) => renderTemplate`${renderComponent($$result3, "Logo", $$Logo, { "slot": "logo" })}` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "rightMenu": true, "navData": nav, "slot": "header" }, { "action-item": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "action-item", "href": "/theme/get-started" }, { "default": ($$result4) => renderTemplate`Get Early Access` })}`, "logo": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Logo", $$Logo, {})} </span>` })}` })}`;
}, "/Users/h/test/src/layouts/Page.astro", void 0);

export { $$Page as $ };
