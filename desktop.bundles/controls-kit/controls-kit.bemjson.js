module.exports = {
	block: 'page',
	title: 'Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' }},
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
		{ elem: 'css', url: 'controls-kit.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'controls-kit.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
		},
		{ block: 'kit' }
	],
	content: [
		{
			block: 'tpl-layout',
			mods: { structure: '33-33-33' },
			content: [
				{
					elem: 'content',
					mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand', control: 'whitepaper-brand' }},
					attrs: { style: 'background: var(--color-bg-default' },
					content: [
						{
							elem: 'container',
							elemMods: { 'size': 'full', 'align': 'center' },
							mix: { block: 'decorator', mods: { 'space-v': 'xxxl' }},
							content: [
								{
									block: 'ui-preview',
								},
							]
						}
					]
				},
				{
					elem: 'content',
					mix: { block: 'theme', mods: { color: 'whitepaper-portal-default', control: 'whitepaper-default' }},
					attrs: { style: 'background: var(--color-bg-default' },
					content: [
						{
							elem: 'container',
							elemMods: { 'size': 'full', 'align': 'center' },
							mix: { block: 'decorator', mods: { 'space-v': 'xxxl' }},
							content: [
								{
									block: 'ui-preview',
								},
							]
						}
					]
				},
				{
					elem: 'content',
					mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse', control: 'whitepaper-inverse' }},
					attrs: { style: 'background: var(--color-bg-default' },
					content: [
						{
							elem: 'container',
							elemMods: { 'size': 'full', 'align': 'center' },
							mix: { block: 'decorator', mods: { 'space-v': 'xxxl' }},
							content: [
								{
									block: 'ui-preview',
								},
							]
						}
					]
				}
			]
		}
	]
};
