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

			{ block: 'text', mods: { view: 'primary', size: [ 'xxxxl', 'xxxl', 'xxl', 'xl', 'l', 'm', 's', 'xs'], weight: 'bold' }, },
			{ block: 'decorator',
				mods: {
					'indent-a': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'indent-b': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'indent-h': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'indent-l': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'indent-r': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'indent-t': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'indent-v': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-a': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-b': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-h': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-l': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-r': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-t': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
					'space-v': [ 'auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl' ],
			}},
		]
	}
]);
