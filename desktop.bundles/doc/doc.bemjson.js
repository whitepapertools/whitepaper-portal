module.exports = {
	block: 'page',
	title: 'whitepaper documentation',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '../../cdn/whitepaper-2.2.0.min.css' },
		{ elem: 'css', url: 'doc.min.css' }
	],
	scripts: [
		{ elem: 'js', url: '//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js' },
		{ elem: 'js', url: '//unpkg.com/docsify/lib/plugins/search.min.js' },
		{ elem: 'js', url: 'doc.min.js' }
	],
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'medium', breakpoint: 'default', font: 'nitti' }
	},
	content: [
		/* Menu */
		{
			block: 'menu',
			mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse'} },
			content: [
				{
					elem: 'content',
					mix: { block: 'tpl-layout', elem: 'content' },
					content: [
						{
							elem: 'container',
							mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }},
							content: [
								{
									elem: 'inner',
									content: [
										{
											elem: 'paper',
											content: [
												{
													elem: 'logo',
													tag: 'a',
													attrs: { href: '/index.html' }
												},
												{
													elem: 'download',
													content: [
														{
															block: 'figured-button',
															tag: 'a',
															attrs: { href: 'https://github.com/whitepapertools' } ,
															mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
															content: 'GitHub'
														}
													]
												}
											]
										},
										{
											elem: 'nav',
											content: [
												{
													elem: 'item',
													tag: 'a',
													attrs: { href: '/doc.html' },
													mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
													content: 'Документация'
												},
												{
													elem: 'item',
													tag: 'a',
													attrs: { href: '/starter-kit.html' },
													mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
													content: 'Starter Kit'
												},
												{
													elem: 'item',
													tag: 'a',
													attrs: { href: '/community.html' },
													mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
													content: 'Сообщество'
												},
												{
													elem: 'item',
													tag: 'a',
													attrs: { href: '/changelog.html' },
													mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
													content: 'Changelog'
												}
											]
										}
									]
								}
							]
						}
					]
				}

			]
		},
		/* Menu */

		{
			block: 'demo',
			content: [
			{
				block: 'tpl-layout',
				content: [
				{
					block: 'new-menu',
				},
				{
					block: 'docsify',
					mix: { block: 'doc-styles' },
					attrs: { id: 'app' }
				},
				{
					elem: 'section',
					content: [
					{
						tag: 'script',
						content: 'window.$docsify = { '+
									'auto2top: true, '+
									'autoHeader: true, '+
									'loadSidebar: true, '+
									'autoHeader: true, '+
									'mergeNavbar: true, '+
									'basePath: \'/docs/\', '+

									'search: { '+
										'paths: \'auto\', '+
										'placeholder: \'Тут можно поискать\', '+
										'noData: \'Не нашлось!\', '+
									'}'+
								'}'
					}]
				}]
			}]
		}
	]
};
