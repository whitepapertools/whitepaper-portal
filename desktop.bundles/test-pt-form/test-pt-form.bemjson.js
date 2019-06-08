module.exports = {
	block: 'page',
	title: 'Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' }},
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
		{ elem: 'css', url: 'test-pt-form.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'test-pt-form.min.js' }],
	mods: { theme: 'islands' },
	attrs: { style: 'background: #444; padding: 40px 0' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-portal-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti', control: 'whitepaper-default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			content: [
				{
					elem: 'container',
					elemMods: { size: 'xs', align: 'center' },
					attrs: { style: 'min-height: 100px; background: #fff; box-shadow: 0 12px 32px rgba(0,0,0,.3); border-radius: 8px' },
					content: [
						{
							block: 'pt-form',
							mods: { 'space-a': 'm' },
							mix: { block: 'decorator', mods: { 'space-v': 'xl' }},
							content: [
								{
									elem: 'item',
									content: [
										{
											elem: 'label',
											mix: { block: 'decorator', mods: { 'indent-b': 's' }},
											content: {
												block: 'text',
												mods: { size: 'm', view: 'primary' },
												content: 'Связанный фактор риска'
											},
										},
										{
											elem: 'control',
											content: {
												block: 'input',
												tag: 'input', attrs: { value: 'Отсутствие или недостаток информации о реальном состоянии ССС' },
												mods: {  size: 'l', view: 'default', width: 'full' },
											},
										},
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'label',
											mix: { block: 'decorator', mods: { 'indent-b': 's' }},
											content: {
												block: 'text',
												mods: { size: 'm', view: 'primary' },
												content: 'Название'
											},
										},
										{
											elem: 'control',
											content: {
												block: 'input',
												tag: 'input', attrs: { placeholder: 'Назовите барьер' },
												mods: {  size: 'l', view: 'default', width: 'full' },
											},
										},
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'label',
											mix: { block: 'decorator', mods: { 'indent-b': 's' }},
											content: {
												block: 'text',
												mods: { size: 'm', view: 'primary' },
												content: 'Описание'
											},
										},
										{
											elem: 'control',
											content: {
												block: 'input',
												tag: 'textarea', attrs: { placeholder: 'Назовите барьер' },
												mods: {  type: 'textarea', size: 'l', view: 'default', width: 'full' },
											},
										},
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'label',
											mix: { block: 'decorator', mods: { 'indent-b': 's' }},
											content: {
												block: 'text',
												mods: { size: 'm', view: 'primary' },
												content: 'Распространённость барьера'
											},
										},
										{
											elem: 'control',
											content: {
												block: 'input',
												tag: 'input', attrs: { placeholder: 'Отсуствует' },
												mods: { size: 'l', view: 'default', width: 'full' },
											},
										},
									]
								},
							]
						},

						{
							block: 'pt-form',
							mods: { 'space-a': 'm' },
							mix: { block: 'decorator', mods: { 'space-b': 'xxl' }},
							content: [
								{
									elem: 'section',
									elemMods: { 'space-v': 'm' },
									content: [
										{
											block: 'text',
											mods: { size: 'xxl', view: 'primary' },
											content: 'Стоимость'
										},
										{
											elem: 'item',
											elemMods: { distribute: 'default', 'vertical-align': 'center' },
											content: [
												{
													elem: 'label',
													elemMods: { width: 'inverse' },
													content: {
														block: 'text',
														mods: { size: 'm', view: 'primary' },
														content: 'Единица барьера'
													},
												},
												{
													elem: 'control',
													content: {
														block: 'input',
														tag: 'input', attrs: { placeholder: '10 000 ₽' },
														mods: { size: 'm', view: 'default', width: 'full' },
													},
												},
											]
										},
										{
											elem: 'item',
											elemMods: { distribute: 'default', 'vertical-align': 'center' },
											content: [
												{
													elem: 'label',
													elemMods: { width: 'inverse' },
													content: {
														block: 'text',
														mods: { size: 'm', view: 'primary' },
														content: 'Внедрение'
													},
												},
												{
													elem: 'control',
													content: {
														block: 'input',
														tag: 'input', attrs: { placeholder: '10 000 ₽' },
														mods: { size: 'm', view: 'default', width: 'full' },
													},
												},
											]
										},
										{
											elem: 'item',
											elemMods: { distribute: 'default', 'vertical-align': 'center' },
											content: [
												{
													elem: 'label',
													elemMods: { width: 'inverse' },
													content: {
														block: 'text',
														mods: { size: 'm', view: 'primary' },
														content: 'Внедрение'
													},
												},
												{
													elem: 'control',
													content: {
														block: 'input',
														tag: 'input', attrs: { placeholder: '10 000 ₽' },
														mods: { size: 'm', view: 'default', width: 'full' },
													},
												},
											]
										},
									]
								},
							]
						},
					]
				},
			]
		}
	]
};
