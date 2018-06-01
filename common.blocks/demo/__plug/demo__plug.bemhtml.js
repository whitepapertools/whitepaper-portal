block('demo').elem('plug')(
	content()(function(n, ctx) {
		return {
			block: 'hero',
			mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
			content: [
				{
					elem: 'intro',
					content: [
						{
							block: 'image',
							url: '../../assets/i/wp-logo_hero.svg'
						},
						{
							elem: 'description',
							content: {
								block: 'text',
								mods: { size: 'xxl', view: 'primary', align: 'center' },
								content: 'Некомпонентная декларативаная открытая дизайн-система'
							}
						},
					]
				},
				{
					elem: 'contacts',
					content: [
						{
							block: 'text',
							mods: { view: 'primary', size: 'l', display: 'inline' },
							content: 'Мы на '
						},
						{
							block: 'text',
							tag: 'a',
							attrs: { href: 'https://github.com/whitepapertools', style: 'color: #0070F0;' },
							mods: { size: 'l', view: 'link', display: 'inline' },
							content: 'github'
						},
						{
							block: 'text',
							mods: { view: 'primary', size: 'l', display: 'inline' },
							content: ' и в '
						},
						{
							block: 'text',
							tag: 'a',
							attrs: { href: 'https://t.me/bem_design', style: 'color: #0070F0;' },
							mods: { size: 'l', view: 'link', display: 'inline' },
							content: 'telegram'
						},
					]
				}
			]
		}
	})
);
