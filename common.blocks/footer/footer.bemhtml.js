block('footer')(
	content()(function() {
		return 	{
			block: 'tpl-layout',
			content: [
				{
					elem: 'content',
					content: [
						{
							elem: 'content',
							content: [
								{
									block: 'tpl-grid',
									mods: { ratio: '1-1-1-1', 'col-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													content: '© 2018 whitepaper'
												}
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: ' About'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: 'Contributors'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													content: 'PressKit'
												}
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													content: ' Documentation'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: 'Github'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: 'Telegram'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: 'Medium'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													content: 'CodePen'
												}	 
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: 'Community'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decaorator', mods: {'indent-b': 'l' }},
													content: 'Events'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													content: 'Kit'
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	})
);

