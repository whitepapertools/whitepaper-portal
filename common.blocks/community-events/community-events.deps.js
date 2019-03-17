([
	{
		shouldDeps: [

			// брэнд лого может быть много
			{ block: 'brand-logo', mods: { name: 'rit', size:'m' }},
			{ block: 'brand-logo', mods: { name: 'dribbble', size:'m' }},
			{ block: 'brand-logo', mods: { name: 'pitercss-conf', size:'m' }},
			{ block: 'brand-logo', mods: { name: 'pitercss-meetup', size:'m' }},
			{ block: 'brand-logo', mods: { name: 'bemup', size:'m' }},
			{ block: 'brand-logo', mods: { name: 'webstandarts', size:'m' }},

			{ block: 'pt-card', mods: { view: 'brand' }},
			{ block: 'decorator', mods: { 'indent-b': 'xxl'}},
			{ block: 'pt-card', elem: 'image', mods: { size: 'cover' }},
			{ block: 'pt-card', elem: 'content', mods: { 'vertical-align': 'center', distribute: 'center', 'space-a': 'xl' }},
			{ block: 'decorator', mods: { 'indent-b': 'xl' }},
			{ block: 'avatar' },
			{ block: 'avatar', elem: 'photo', mods: { size:'m' }},
			{ block: 'text', mods: { size: 'xxl', view: 'primary', align: 'center', weight: 'light' }},
			{ block: 'decorator', mods: { 'indent-b': 's' }},
			{ block: 'text', mods: { size: 'm', view: 'secondary', align: 'center', font: 'sans', weight: 'light' }},
			{ block: 'pt-card', elem: 'footer', mods: { distribute: 'center', 'space-a': 'xl' }},
			{ block: 'text', mods: { size: 'm', view: 'link', weight: 'light', align: 'center' }},
		]
	}
])
