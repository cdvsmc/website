// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://cdvsmc.github.io",
	base: "/website",
	integrations: [
		starlight({
			//title: 'My Docs',
			title: {
				es: 'Mis doctos',
				en: 'My Docs',
			},
			//Añadir un lugo personalizado
			logo: {
				src: './src/assets/houston.webp',
				//light: './src/assets/houston.webp',
				//dark: './src/assets/houston.webp',
				replacesTitle: false,
			},
			// Configuración pára un sitio monolingüe.
			// Consulte https://starlight.astro.build/es/guides/i18n/
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang:'es',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'},
				{ icon: 'discord', label: 'Discord', href: 'https://astro.build/chat'},
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@astrodotbuild'}
			],
			sidebar: [
				{
					label: 'Guías',
					translations: { es:'Guías' },
					items: [
						// Cada elemento aquí es una entrada en el menú de navegación.
						{
							label: 'Guía de ejemplo', 
							translations: { es: 'Guía de ejemplo' },
							slug: 'guias/ejemplo'
						},
					],
				},
				{
					label: 'Referencia',
					translations: { es: 'Referencia' },
					autogenerate: { directory: 'referencia' },
				},
			],
		}),
	],
});
