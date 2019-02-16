([
	{
		shouldDeps: [
			{
				block: 'text',
				mods: { size: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'], view: ['primary', 'secondary', 'ghost', 'inverse'], transform: 'uppercase', spacing: ['s', 'm'], align: ['s', 'right'], weight: [ 'semibold', 'bold' ]}
			},
			{
				block: 'image'
			},
			{
				block: 'tpl-layout',
				elem: 'container',
				mods: { size: 'm', align: 'center' }
			},
			{
				block: 'tpl-grid',
				mods: { ratio: '1-1-1-1', 'col-gap': 'full' },
			},
			{
				block: 'tpl-grid',
				elem: 'container',
				mods: { align: 'center', size: 'm' }
			},
			{
				block: 'decorator',
				mods : { 'indent-b': [ 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxl', 'xxxxxxl' ] }
			}
		]
	}
])
