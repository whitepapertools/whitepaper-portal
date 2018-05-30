([
	{
		shouldDeps: [
			{ block: 'demo', elem: 'plug-card' },
			{ block: 'demo', elem: 'plug-content' },
			{ block: 'demo', elem: 'plug-illustration' },
			{ block: 'demo', elem: 'plug-description' },
			{ block: 'demo', elem: 'plug-action' },
			{ block: 'demo', elem: 'plug-button' },
			{ block: 'demo', elem: 'plug-soclink', mods: { icon: ['telegram', 'twitter'] } },

			{ block: 'pt-card' },
			{ block: 'pt-card', elem: 'content', mods: { 'space-a': 'xl' } },
			{ block: 'pt-card', elem: 'image' },
			{ block: 'pt-card', elem: 'footer', mods: {'space-a': 'xl', 'align': 'between' } },

			{ block: 'decorator', mods: {'indent-b': 'xxl'} },

			{ block: 'text', mods: { font: 'mono', size: 'xxl', weight: 'bold' } },

			{ block: 'button', mods: { theme: 'promo', 'size': 'xl', type: 'link', view: 'action', font: 'mono', weight: 'bold', shadow: 'action' } },

			{ block: 'text', mods: { font: 'mono', style: 'italic', display: 'inline'} }
		]
	}
])