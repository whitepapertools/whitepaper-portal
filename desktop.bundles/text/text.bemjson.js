module.exports = {
	block: 'page',
	title: 'Типографика',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'text.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'text.min.js' }],
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
							content: 'Типографика'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
							{
								elem: 'row',
								content: [
								'Для текста используется блок ',
								{
									block: 'text',
									mods: { size: 'l', weight: 'bold', display: 'inline' },
									content: 'text'
								},
								'. С помощью модификаций можно '
								],
							},
							{
								elem: 'row',
								content: 'менять размер, цвет, начертание и другие свойства шрифта'
							}]
						},
						{
							elem: 'row',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 'xxxl'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxl'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 'xxl'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xl'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 'xl'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'l'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 'l'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'm'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 'm'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 's'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 's'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xs'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "size: 'xs'"
									}]
								}
							]
						},
						{
							elem: 'row',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', view: 'primary' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "view: 'primary'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', view: 'promo' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "view: 'promo'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', view: 'secondary' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "view: 'secondary'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', view: 'ghost' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "view: 'ghost'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', view: 'disable' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "view: 'disable'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', view: 'link' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "view: 'link'"
									}]
								}

							]
						},
						{
							elem: 'row',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', weight: 'bold' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "weight: 'bold'"
									}]
								}
							]
						},
						{
							elem: 'row',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', transform: 'uppercase' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "transform: 'uppercase'"
									}]
								}
							]
						},
						{
							elem: 'row',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', transform: 'uppercase', spacing: 's' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "spacing: 's'"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl', transform: 'uppercase', spacing: 'm' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "spacing: 'm'"
									}]
								}
							]
						},
						{
							elem: 'row',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
							content: [
								{
									elem: 'col',
									elemMods: { sw: 4 },
									content: [
									{
										block: 'typography',
										content: [
										{
											elem: 'view',
											content: [
											{
												block: 'text',
												mods: { size: 'xxxl', style: 'italic' },
												content: 'Typography'
											}]
										},
										{
											block: 'text',
											mods: { size: 'm', weight: 'bold' },
											content: "style: 'italic'"
										}]
									}]
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