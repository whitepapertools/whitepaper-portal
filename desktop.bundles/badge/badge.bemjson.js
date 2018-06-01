module.exports = {
	block: 'page',
	title: 'Бейджи',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'badge.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'badge.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
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

				/* Content */
				{
					elem: 'content',
					elemMods: { size: 'm' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
							content: 'Бейджи'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
							{
								elem: 'row',
								content: 'Для отображения статуса каких-либо сущностей используется'
							},
							{
								elem: 'row',
								content: [
								'блок ',
								{
									block: 'text',
									mods: { size: 'l', weight: 'bold', display: 'inline' },
									content: 'badge. '
								},
								'Статус определяется через модификацию']
							}]
						},
						{
							elem: 'row',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
							content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'badge',
													mods: { view: 'alert' },
													content: 'alert'
												}
											]
										},
										{
											elem: 'block',
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "view: 'alert'"
												}
											]
										}
									]
								},
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'badge',
													mods: { view: 'warning' },
													content: 'warning'
												}
											]
										},
										{
											elem: 'block',
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "view: 'warning'"
												}
											]
										}
									]
								},
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'badge',
													mods: { view: 'success' },
													content: 'success'
												}
											]
										},
										{
											elem: 'block',
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "view: 'success'"
												}
											]
										}
									]
								},
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'badge',
													mods: { view: 'default' },
													content: 'default'
												}
											]
										},
										{
											elem: 'block',
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "view: 'default'"
												}
											]
										}
									]
								}
							]
						}

					]
				},
				/* /Content */

				/* Footer */
				{
					block: 'footer',
					mix: { block: 'demo', elem: 'footer' }
				}
				/* /Footer */

			]
		}
	]
};