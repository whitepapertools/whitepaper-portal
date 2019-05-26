block('ui-preview')({
	content: () => {
		return [
			// Кнопки
			{
				block: 'section',
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: [
					{
						block: 'text',
						mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
						content: 'Buttons'
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size S'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'button',
										tag: 'button',
										mods: { size: 's', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Primary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 's', view: 'secondary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Secondary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 's', view: 'ghost' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Ghost'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 's', view: 'clear' },
										content: 'Clear'
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size M'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Primary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'm', view: 'secondary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Secondary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'm', view: 'ghost' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Ghost'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'm', view: 'clear' },
										content: 'Clear'
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size L'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'l', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Primary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'l', view: 'secondary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Secondary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'l', view: 'ghost' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Ghost'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'l', view: 'clear' },
										content: 'Clear'
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size XL'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Primary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'xl', view: 'secondary' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Secondary'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'xl', view: 'ghost' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Ghost'
									},
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'xl', view: 'clear' },
										content: 'Clear'
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Full width'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'button',
										tag: 'button',
										mods: { size: 'xl', view: 'primary', width: 'full' },
										mix: { block: 'decorator', mods: { 'indent-r': 'm', 'indent-b': 'm' }},
										content: 'Primary'
									}
								]
							},
						]
					},
				]
			},
			// Кнопки



			// Инпуты
			{
				block: 'section',
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: [
					{
						block: 'text',
						mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
						content: 'Inputs'
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size S'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 's'},
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size M'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'm'},
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Size L'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'l'},
									},
								]
							},
						]
					},
					{
						content: [
							{
								block: 'text',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
								content: 'Full width'
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'l', width: 'full'},
									},
								]
							},
						]
					},
				]
			},
			// Инпуты
		]
	}
});
