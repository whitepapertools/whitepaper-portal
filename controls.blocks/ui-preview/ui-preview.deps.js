([
	{
		shouldDeps: [
			{ block: 'button',
				mods: {
					form: ['round', 'brick'],
					size: [ 's', 'm', 'l', 'xl' ],
					view: [ 'primary', 'secondary', 'clear', 'ghost' ],
					width: 'full',
					'with-icon': true,
			}},
			{ block: 'input',
				mods: {
					size: [ 's', 'm', 'l' ],
					width: 'full',
					view: [ 'default' ],
					type: 'textarea',
			}},

			{ block: 'radio', mods: { size: ['m', 'l'], state: 'disabled' }},
			{ block: 'radio', elem: 'input' },
			{ block: 'radio', elem: 'box' },
			{ block: 'radio', elem: 'text' },

			{ block: 'checkbox', mods: { size: ['m', 'l'], state: 'disabled' }},
			{ block: 'checkbox', elem: 'input' },
			{ block: 'checkbox', elem: 'box' },
			{ block: 'checkbox', elem: 'text' },

			{ block: 'tabs', mods: { form: 'round' } },
			{ block: 'tabs', elem: 'input' },
			{ block: 'tabs', elem: 'button' },
			{ block: 'tabs', elem: 'item' },

			{ block: 'text', mods: { view: 'primary', size: [ '4xl', '3xl', '2xl', 'xl', 'l', 'm', 's', 'xs'], weight: 'bold' }, },
			{ block: 'decorator',
				mods: {
					'indent-a': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'indent-b': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'indent-h': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'indent-l': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'indent-r': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'indent-t': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'indent-v': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-a': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-b': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-h': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-l': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-r': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-t': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
					'space-v': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl' ],
			}},
		]
	}
]);
