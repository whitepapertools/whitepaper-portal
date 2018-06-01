module.exports = {
	block: 'page',
	title: 'Логотипы',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'brand-logo.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'brand-logo.min.js' }],
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
							content: 'Логотипы'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
							{
								elem: 'row',
								content: [
								'Для отображения логотипов используется блок ',
								{
									block: 'text',
									mods: { size: 'l', weight: 'bold', display: 'inline' },
									content: 'brand-logo'
								},
								'.'
								],
							},
							{
								elem: 'row',
								content: 'Через модификации указывается вид и размер логотипа'
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
													block: 'brand-logo',
													mods: { name: 'itunes', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://www.apple.com/ru/itunes'
													},
													content: 'iTunes'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'itunes'"
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
													block: 'brand-logo',
													mods: { name: 'steam', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://store.steampowered.com'
													},
													content: 'Steam'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'steam'"
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
													block: 'brand-logo',
													mods: { name: 'skype', size: 'l'}
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://www.skype.com/ru'
													},
													content: 'Skype'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'skype'"
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
													block: 'brand-logo',
													mods: { name: 'forgame', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://4game.com'
													},
													content: 'Фогейм'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'forgame'"
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
													block: 'brand-logo',
													mods: { name: 'warthunder', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://warthunder.ru'
													},
													content: 'Warthunder'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'warthunder'"
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
													block: 'brand-logo',
													mods: { name: 'warface', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://wf.mail.ru'
													},
													content: 'Warface'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'warface'"
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
													block: 'brand-logo',
													mods: { name: 'wargaming', size: 'l'}
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://ru.wargaming.net'
													},
													content: 'Wargaming.net'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'wargaming'"
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
													block: 'brand-logo',
													mods: { name: 'blizzard', size: 'l'}
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://blizzard.com'
													},
													content: 'Blizzard'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'blizzard'"
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
													block: 'brand-logo',
													mods: { name: 'yota', size: 'l'},
													mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://www.yota.ru'
													},
													content: 'Yota'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'yota'"
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
													block: 'brand-logo',
													mods: { name: 'tele2', size: 'l'}
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://ru.tele2.ru'
													},
													content: 'Tele2'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'tele2'"
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
													block: 'brand-logo',
													mods: { name: 'beeline', size: 'l'},
													mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://beeline.ru'
													},
													content: 'Beeline'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "view: 'beeline'"
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
													block: 'brand-logo',
													mods: { name: 'megafon', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://megafon.ru'
													},
													content: 'Megafon'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "view: 'beeline'"
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
													block: 'brand-logo',
													mods: { name: 'mts', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'http://www.mts.ru'
													},
													content: 'МТС'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'mts'"
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
													block: 'brand-logo',
													mods: { name: 'kcell', size: 'l'},
													mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://www.kcell.kz/ru'
													},
													content: 'Kcell'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'kcell'"
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
													block: 'brand-logo',
													mods: { name: 'activ', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://activ.kz'
													},
													content: 'Activ'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'activ'"
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
													block: 'brand-logo',
													mods: { name: 'ok', size: 'l'}
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://ok.ru'
													},
													content: 'Одноклассники'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'ok'"
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
													block: 'brand-logo',
													mods: { name: 'vk', size: 'l'}
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://vk.com'
													},
													content: 'Вконтакте'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'vk'"
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
													block: 'brand-logo',
													mods: { name: 'regru', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://www.reg.ru'
													},
													content: 'Reg.ru'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'regru'"
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
													block: 'brand-logo',
													mods: { name: 'ru-center', size: 'l'},
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													attrs: {
														href: 'https://www.nic.ru'
													},
													content: 'Ru-Center'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'ru-center'"
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
													block: 'brand-logo',
													mods: { name: 'no-logo', size: 'l'},
													mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'link'},
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													content: 'Нет логотипа'
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "name: 'no-logo'"
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