block('menu')(
	content()(function() {
		return {
			elem: 'container',
			mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }, },
			content: [
				{
					elem: 'logo',
					tag: 'a',
					attrs: { href: '/index.html' }
				},
				{
					elem: 'nav',
					content: [
						{
							elem: 'item',
							mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
							content: 'Документация'
						},
						{
							elem: 'item',
							mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
							content: 'Сообщество'
						},
						{
							elem: 'item',
							mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
							content: 'Kit'
						},
						{
							elem: 'item',
							mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
							content: 'Changelog'
						}
					]
				}
			]
		}
	})
);
