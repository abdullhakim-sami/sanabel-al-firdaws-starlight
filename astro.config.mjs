import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://abdullhakim-sami.github.io',
	// base: '/sanabel-al-firdaws-starlight',
	
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/abdullhakim-sami/sanabel-al-firdaws-starlight/',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
