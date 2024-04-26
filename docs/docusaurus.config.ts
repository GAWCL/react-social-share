import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'React Social Share',
	tagline: 'Dinosaurs are cool',
	favicon: 'img/favicon.ico',

	url: 'https://gawcl.github.io',
	baseUrl: '/react-social-share/',

	organizationName: 'GAW',
	projectName: 'react-social-share',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	trailingSlash: false,

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'React Social Share',
			logo: {
				alt: 'React Social Share Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Tutorial',
				},
				// { to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/GAWCL/react-social-share',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				// {
				// 	title: 'Community',
				// 	items: [
				// 		{
				// 			label: 'Stack Overflow',
				// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				// 		},
				// 		{
				// 			label: 'Discord',
				// 			href: 'https://discordapp.com/invite/docusaurus',
				// 		},
				// 		{
				// 			label: 'Twitter',
				// 			href: 'https://twitter.com/docusaurus',
				// 		},
				// 	],
				// },
				{
					title: 'More',
					items: [
						// {
						// 	label: 'Blog',
						// 	to: '/blog',
						// },
						{
							label: 'GitHub',
							href: 'https://github.com/GAWCL/react-social-share',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Cloud System, C.A. Created by GAW.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
