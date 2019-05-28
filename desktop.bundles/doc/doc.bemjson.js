module.exports = {
	block: 'page',
	title: 'whitepaper documentation',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '../../cdn/whitepaper-1.0.1.min.css' },
		{ elem: 'css', url: 'doc.min.css' }
	],
	scripts: [
		{ elem: 'js', type: 'text/javascript', url: '//cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js' },
		{ elem: 'js', url: '//unpkg.com/react@16/umd/react.production.min.js' },
		{ elem: 'js', url: '//unpkg.com/react-dom@16/umd/react-dom.production.min.js' },
		{ elem: 'js', url: '//unpkg.com/html-react-parser@latest/dist/html-react-parser.min.js' },
		{ elem: 'js', type: 'text/javascript', url: 'doc.min.js' },
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
			attrs: { style: 'margin-bottom: 50px;' },
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
					mods: { structure: '20-80' },
					content: [
						{
							elem: 'section',
							mix: { block: 'decorator', mods: { 'indent-l': 'xl' }},
							attrs: { id: 'sidebar' },
							content: [
								// {
								// 	block: 'text',
								// 	attrs: { id: 'b1' },
								// 	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
								// 	content: 'button1'
								// },
								// {
								// 	block: 'text',
								// 	attrs: { id: 'b2' },
								// 	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
								// 	content: 'button2'
								// }
							]
						},
						{
							elem: 'section',
							mix: { block: 'decorator', mods: { 'indent-h': 'xxxxxxl' }},
							content: [
								{
									block: 'docsify',
									mix: { block: 'doc-styles' },
									attrs: { id: 'app' }
								},
							]
						}
						// {
						// 	elem: 'section',
						// 	content: [
						// 		{
									// tag: 'script',
									// content: 'window.$docsify = { '+
									// 			'auto2top: true, '+
									// 			'autoHeader: true, '+
									// 			'loadSidebar: true, '+
									// 			'autoHeader: true, '+
									// 			'mergeNavbar: true, '+
									// 			'basePath: \'/docs/\', '+

									// 			'search: { '+
									// 				'paths: \'auto\', '+
									// 				'placeholder: \'Тут можно поискать\', '+
									// 				'noData: \'Не нашлось!\', '+
									// 			'}'+
									// 		'}'
								// }
							// ]
						// }
					]
				}
			]
		}
	]
};
