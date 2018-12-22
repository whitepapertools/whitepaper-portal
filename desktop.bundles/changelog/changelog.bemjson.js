module.exports = {
	block: 'page',
	title: 'Changelog',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'changelog.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [
		{ elem: 'js', url: '//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js' },
		/* { elem: 'js', url: '//unpkg.com/docsify/lib/plugins/search.min.js' }, */   /* скрипт подключает поиск в боковое меню */
		{ elem: 'js', url: 'changelog.min.js' },
	],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
		{
			block: 'demo',
			content: [

				/* Menu */
				{
					block: 'new-menu',
					mix: { block: 'demo', elem: 'nav' }
				},
				/* /Menu */


				{
					elem: 'docsify-content',
					attrs: { style: 'position: relative; top: 60px' },
					content: [
						{
							block: 'docsify',
							attrs: { id: 'app' },
							mix: { block: 'docsify-modifier' },
							// модифаер убирает контрол sidebar-toggle из боковой панели доксифая
						},
						{
							elem: 'section',
							content: [
								{
									tag: 'script',
									content: 'window.$docsify = { '
												+ 'loadSidebar: true, '
												+ 'basePath: \'/docs-versions/\', '
												+ 'mergeNavbar: true, '
												+ '}'
								}
							]
						},
					]
				},

				/* Content */
				// {
				// 	elem: 'content',
				// 	// elemMods: { size: 'm' },
				// 	content: [
				//
				// 	]
				// },
				/* /Content */

				/* Footer */

				// {
				// 	block: 'footer',
				// 	mix: { block: 'demo', elem: 'footer' }
				// }

				/* /Footer */
			]
		}
	]
};
