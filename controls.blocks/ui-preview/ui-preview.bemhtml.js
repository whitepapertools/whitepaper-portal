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
						mods: { size: 'xxxxl', weight: 'bold', view: 'primary' },
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
						mods: { size: 'xxxxl', weight: 'bold', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
						content: 'Inputs and textarea'
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
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Single-line input' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 's'},
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'textarea', attrs: { type: 'text', placeholder: 'Multi-line input' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 's', type: 'textarea'},
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
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'm'},
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'textarea', attrs: { type: 'text', placeholder: 'Multi-line input' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'm', type: 'textarea'},
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
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'l'},
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'textarea', attrs: { type: 'text', placeholder: 'Multi-line input' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'l', type: 'textarea'},
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
								content: [
									{
										block: 'input',
										tag: 'input', attrs: { type: 'text', placeholder: 'Username' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'l', width: 'full'},
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'input',
										tag: 'textarea', attrs: { type: 'text', placeholder: 'Multi-line input' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										mods: { view: 'default', size: 'l', type: 'textarea', width: 'full'},
									},
								]
							},
						]
					},
				]
			},
			// Инпуты


			// Радио
			{
				block: 'section',
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: [
					{
						block: 'text',
						mods: { size: 'xxxxl', weight: 'bold', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
						content: 'Radio'
					},
					{
						content: [
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'text',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Size M'
									},
									{
										block: 'radio',
										mods: { size: 'm' },
										tag: 'label',
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'radio' },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'Radio'
											},
										]
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'text',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Size L'
									},
									{
										block: 'radio',
										mods: { size: 'l' },
										tag: 'label',
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'radio' },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'Radio'
											},
										]
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'text',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Disabled'
									},
									{
										block: 'radio',
										mods: { size: 'l', state: 'disabled' },
										tag: 'label',
										mix: { block: 'decorator', mods: { 'indent-r': 'xxl' }},
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'radio', checked: true, disabled: true },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'Radio'
											},
										]
									},
									{
										block: 'radio',
										mods: { size: 'l', state: 'disabled' },
										tag: 'label',
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'radio', disabled: true },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'Radio'
											},
										]
									},
								]
							},
						]
					},
				]
			},
			// Радио


			// Радио
			{
				block: 'section',
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: [
					{
						block: 'text',
						mods: { size: 'xxxxl', weight: 'bold', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
						content: 'Checkbox'
					},
					{
						content: [
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'text',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Size M'
									},
									{
										block: 'checkbox',
										mods: { size: 'm' },
										tag: 'label',
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'checkbox' },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'checkbox'
											},
										]
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'text',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Size L'
									},
									{
										block: 'checkbox',
										mods: { size: 'l' },
										tag: 'label',
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'checkbox' },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'checkbox'
											},
										]
									},
								]
							},
							{
								block: 'decorator',
								mods: { 'indent-b': 'xl' },
								content: [
									{
										block: 'text',
										mods: { size: 'xl', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
										content: 'Disabled'
									},
									{
										block: 'checkbox',
										mods: { size: 'l', state: 'disabled' },
										tag: 'label',
										mix: { block: 'decorator', mods: { 'indent-r': 'xxl' }},
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'checkbox', checked: true, disabled: true },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'checkbox'
											},
										]
									},
									{
										block: 'checkbox',
										mods: { size: 'l', state: 'disabled' },
										tag: 'label',
										content: [
											{
												elem: 'input',
												tag: 'input', attrs: { type: 'checkbox', disabled: true },
											},
											{
												elem: 'box',
											},
											{
												elem: 'text',
												content: 'checkbox'
											},
										]
									},
								]
							},
						]
					},
				]
			}
			// Радио
		]
	}
});
