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
			mods: { color: 'whitepaper-portal-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', control: 'whitepaper-default', font: 'nitti' }
		},
		{ block: 'kit' }
	],
	content: [
		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' }},
			attrs: {
				'style': 'background: var(--color-bg-ghost)'
			},
			content: [
				{
					elem: 'content',
					content: [
						{
							elem: 'container',
							elemMods: { 'size': 'm', 'align': 'center' },
							content: [

							]
						}
					]
				}
			]
		}
	]
};
