([
	{
		shouldDeps: [
			{ block: 'decorator', mods: { 'space-v':'xxxl', 'space-h':'xxl' }},
			{ block: 'avatar', elem: 'photo', mods: { size: 'm' }},
			{ block: 'image', },

			// брэнд лого может быть много
			{ block: 'brand-logo', mods: { name: 'rit', size:'s' }},
			{ block: 'brand-logo', mods: { name: 'dribbble', size:'s' }},
			{ block: 'brand-logo', mods: { name: 'pitercss-conf', size:'s' }},
			{ block: 'brand-logo', mods: { name: 'pitercss-meetup', size:'s' }},

			{ block: 'decorator', mods: { 'indent-l':'m' }},
			{ block: 'text', mods: { size: 's', view: 'primary'  }},
			{ block: 'text', mods: { size: 's', view: 'secondary'  }},
			// { block: 'text', mods: { size: 's', view: 'secondary'  }},

			{ block: 'text', mods: { size: 'xl', view: 'primary',  }},
			{ block: 'decorator', mods: { 'indent-t': 'l' }},
			{ block: 'text', mods: { size: 'm', view: 'link', weight: 'light' }},
			{ block: 'decorator', mods: { 'indent-t': 'm', 'space-l': 'xxl', 'space-b': 'xxl' }},

			{ block: 'pt-card' },
			{ block: 'pt-card', elem: 'content' },
			{ block: 'pt-card', elem: 'footer', mods: { 'space-v': 'xxxl',  }},
		]
	}
])
