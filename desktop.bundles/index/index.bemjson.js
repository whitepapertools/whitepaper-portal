module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'demo',
			content: [
				{
					block: 'tpl-layout',
					attrs: { style: 'position: relative; top: 60px' },
					content: [

						/* Menu */
						{
							block: 'new-menu',
						},
						/* Menu */

						/* Hero */
						{
							block: 'hero',
							mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
							content: [
								{
									elem: 'intro',
									content: [
										{
											block: 'image',
											url: '../../assets/i/wp-logo_hero.svg'
										},
										{
											elem: 'description',
											content: {
												block: 'text',
												mods: { size: 'xxl', view: 'primary', align: 'center' },
												content: 'Некомпонентная декларативаная открытая дизайн-система'
											}
										},
									]
								},
								{
									elem: 'contacts',
									content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'l', display: 'inline' },
											content: 'Мы на '
										},
										{
											block: 'text',
											tag: 'a',
											attrs: { href: 'https://github.com/whitepapertools', style: 'color: #0070F0;' },
											mods: { size: 'l', view: 'link', display: 'inline' },
											content: 'github'
										},
										{
											block: 'text',
											mods: { view: 'primary', size: 'l', display: 'inline' },
											content: ' и в '
										},
										{
											block: 'text',
											tag: 'a',
											attrs: { href: 'https://t.me/bem_design', style: 'color: #0070F0;' },
											mods: { size: 'l', view: 'link', display: 'inline' },
											content: 'telegram'
										},
									]
								}
							]
						},

						/* /Hero  */

						/* Tools */
						{
							elem: 'section',
							attrs: {
								style: 'padding: 48px 0px'
							},
							content: [
								{
									elem: 'container',
									elemMods: { size: 'm', align: 'center' },
									content: [
										{
											block: 'tpl-grid',
											mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full' },
											content: [
												{
													elem: 'fraction',
													elemMods: { col: '12'},
													content: [
														{
															block: 'text',
															mods: { size: 'xxxxl', view: 'primary' },
															content: 'Система'
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'tool',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'Тема'
																},
																{
																	block: 'text',
																	mods: { size: 'l', view: 'primary' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
																	content: 'Тема — это фундаментальный слой на основе которого выстраивается вся дизайн-система'
																},
																{
																	block: 'pt-list',
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/color.html'
																					},
																					content: 'Цветовая палитра'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/space.html'
																					},
																					content: 'Отступы'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/size.html'
																					},
																					content: 'Размеры'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/breakpoint.html'
																					},
																					content: 'Точки перестроения'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/gap.html'
																					},
																					content: 'Расстояния'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/menu.html'
																					},
																					content: 'Меню'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/font.html'
																					},
																					content: 'Шрифт'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'tool',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'Контент'
																},
																{
																	block: 'text',
																	mods: { size: 'l', view: 'primary' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																	content: 'Контентом являются мельчайшие блоки, позволяющие выразить смысл интерфейсной сущности'
																},
																{
																	block: 'pt-list',
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/text.html'
																					},
																					content: 'Типографика'
																				}
																			]
																		},
																		// {
																		// 	elem: 'item',
																		// 	elemMods: { 'space-b': 'm' },
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'link' },
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				'href': '../../../../desktop.bundles/content/content.html#vector'
																		// 			},
																		// 			content: 'Векторы'
																		// 		}
																		// 	]
																		// },
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/icon.html'
																					},
																					content: 'Иконки'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/brand-logo.html'
																					},
																					content: 'Логотипы'
																				}
																			]
																		},
																		// {
																		// 	elem: 'item',
																		// 	elemMods: { 'space-b': 'm' },
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'link' },
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				'href': '../../../../desktop.bundles/content/content.html'
																		// 			},
																		// 			content: 'Контролы'
																		// 		}
																		// 	]
																		// },
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/avatar.html'
																					},
																					content: 'Аватарки'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/badge.html'
																					},
																					content: 'Бейджи'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/tag.html'
																					},
																					content: 'Тэги'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'tool',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'Паттерны'
																},
																{
																	block: 'text',
																	mods: { size: 'l', view: 'primary' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																	content: 'Паттерны позволяют представить контент в осмысленной форме для целостного восприятия интерфейса'
																},
																{
																	block: 'pt-list',
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/patterns.html#pt-table'
																					},
																					content: 'Table'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/patterns.html#pt-list'
																					},
																					content: 'List'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'l' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/patterns.html#pt-form'
																					},
																					content: 'Form'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'l' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/patterns.html#pt-informer'
																					},
																					content: 'Informer'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'l' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/patterns.html#pt-icon-plus'
																					},
																					content: 'Icon Plus'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'l' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/patterns.html#pt-surface'
																					},
																					content: 'Surface'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'tool',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																	content: 'Шаблоны'
																},
																{
																	block: 'text',
																	mods: { size: 'l', view: 'primary' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'Шаблоны представляют собой каркас, который помогает паттернам занять свое место в интерфейсе'
																},
																{
																	block: 'pt-list',
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/layout.html'
																					},
																					content: 'Какрас'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'l' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/grid.html'
																					},
																					content: 'Сетка'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'tool',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																	content: 'Обучение'
																},
																{
																	block: 'text',
																	mods: { size: 'l', view: 'primary' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'В этом разделе собрана документация, инструкции и примеры использования нашей дизайн-системы'
																},
																{
																	block: 'pt-list',
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'm' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					tag: 'a',
																					attrs: {
																						'href': '/doc.html#/install'
																					},
																					content: 'Установка в своём проекте'
																				}
																			]
																		},
																		// {
																		// 	elem: 'item',
																		// 	elemMods: { 'space-b': 'm', border: 'bottom'  },
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'link' },
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				'href': '/article-vectors.html'
																		// 			},
																		// 			content: 'Как рисовать «векторы»'
																		// 		}
																		// 	]
																		// }
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'tool',
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxl', view: 'primary', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
																	content: 'Материалы'
																},
																{
																	block: 'text',
																	mods: { size: 'l', view: 'primary' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'Инструменты, киты и шаблоны, помогающие быстро собирать интерфейсы'
																},
																{
																	block: 'pt-list',
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-b': 'l' },
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'link' },
																					content: 'Kit BILL',
																					tag: 'a',
																					attrs: {
																						'href': 'https://ui8.net/products/kit-bill',
																						'target': '_blank'
																					}
																				}
																			]
																		},
																		// {
																		// 	elem: 'item',
																		// 	elemMods: { 'space-b': 'l', border: 'bottom' },
																		// 	content: [
																		// 		{
																		// 			block: 'text',
																		// 			mods: { size: 'l', view: 'link' },
																		// 			content: 'BEM Starter Kit',
																		// 			tag: 'a',
																		// 			attrs: {
																		// 				'href': '/bem-starter-kit.html'
																		// 			}
																		// 		}
																		// 	]
																		// }
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
							]
						},
						/* /Tools */

						/* Community */
						{
							elem: 'section',
							attrs: {
								style: 'padding: 72px 0px'
							},
							content: [
								{
									elem: 'container',
									elemMods: { size: 'm', align: 'center' },
									content: [
										{
											block: 'tpl-grid',
											mods: { columns: '12', 'col-gap': 'two-thirds', 'row-gap': 'full' },
											content: [
												{
													elem: 'fraction',
													elemMods: { col: '12'},
													content: [
														{
															block: 'text',
															mods: { size: 'xxxxl', view: 'primary' },
															content: 'Сообщество'
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'pt-card',
															mix: [
																{ block: 'article' },
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }}
															],
															tag: 'a',
															attrs: {
																href: 'https://medium.com/yandexmoney/бэм-для-дизайнеров-или-прототипирование-на-продакшн-технологиях-fd6218b1850f',
																target: '_blank'
															},
															content: [
																{
																	elem: 'header',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm', weight: 'light' },
																			content: 'Журнал'
																		}
																	]
																},
																{
																	elem: 'footer',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			elem: 'info',
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'medium-inverse', size: 'm' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }}
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'BEM Design'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'l', weight: 'light' },
																					content: 'Мы сделали БЭМ-платформу инструментом для построения интерфейсов, дополнив её арсеналом для масштабирования.'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
													content: [
														{
															block: 'pt-card',
															mix: [
																{ block: 'article' },
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
															],
															tag: 'a',
															attrs: {
																href: 'https://ui8.net/products/kit-bill',
																target: '_blank'
															},
															content: [
																{
																	elem: 'header',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm', weight: 'light' },
																			content: 'Материалы'
																		}
																	]
																},
																{
																	elem: 'footer',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			elem: 'info',
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'ui8-inverse', size: 'm' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }}
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'Kit Bill'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'l', weight: 'light' },
																					content: 'Карточный кит для сборки высокодетализированных прототипов. Позволяет расширять и масштабировать интерфейс.'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '4'},
													content: [
														{
															block: 'pt-card',
															mix: [
																{ block: 'article' },
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
															],
															tag: 'a',
															attrs: {
																href: 'https://codepen.io/whitepapertools/pens/public/',
																target: '_blank'
															},
															content: [
																{
																	elem: 'header',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm', weight: 'light' },
																			content: 'Сообщество'
																		}
																	]
																},
																{
																	elem: 'footer',
																	elemMods: { 'space-a': 'xxl' },
																	content: [
																		{
																			elem: 'info',
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'codepen-inverse', size: 'm' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }}
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'CodePen'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'l', weight: 'light' },
																					content: 'Мы экспериментируем с подачей и для наглядности структуры публикуем небольшие демо-примеры интерфейсных блоков.'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												// {
												// 	elem: 'fraction',
												// 	elemMods: { col: '4'},
												// 	content: [
												// 		{
												// 			block: 'text',
												// 			mods: { size: 'l', view: 'primary' },
												// 			content: 'БЭМ-платформа как основной инструмент дизайнеров для построения интерфейсов. Масштабируемая дизайн-система и визуальная косметика. Фундаментальные библиотеки, необходимые для прототипирования.'
												// 		}
												// 	]
												// },
												// {
												// 	elem: 'fraction',
												// 	elemMods: { col: '8'},
												// 	content: [
												// 		{
												// 			block: 'pt-list',
												// 			mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
												// 			content: [
												// 				{
												// 					elem: 'item',
												// 					elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom' },
												// 					content: [
												// 						{
												// 							block: 'text',
												// 							mods: { size: 'xxl', view: 'primary' },
												// 							tag: 'a',
												// 							attrs: {
												// 								'href': 'https://habrahabr.ru/post/274721/',
												// 								'target': '_blank',
												// 								'style': 'text-decoration: none;'
												// 							},
												// 							content: 'БЭМ-одержимость. Последствие параметрического дизайна'
												// 						}
												// 					]
												// 				},
												// 				{
												// 					elem: 'item',
												// 					elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
												// 					content: [
												// 						{
												// 							block: 'text',
												// 							mods: { size: 'xxl', view: 'primary' },
												// 							tag: 'a',
												// 							attrs: {
												// 								'href': 'https://habrahabr.ru/post/274719/',
												// 								'target': '_blank',
												// 								'style': 'text-decoration: none;'
												// 							},
												// 							content: 'Следующие пол шага после Дизайна в браузере'
												// 						}
												// 					]
												// 				},
												// 				{
												// 					elem: 'item',
												// 					elemMods: { 'space-b': 'l', 'space-t': 'l', 'border': 'bottom'  },
												// 					content: [
												// 						{
												// 							block: 'text',
												// 							mods: { size: 'xxl', view: 'primary' },
												// 							tag: 'a',
												// 							attrs: {
												// 								'href': 'https://habrahabr.ru/post/238485/',
												// 								'target': '_blank',
												// 								'style': 'text-decoration: none;'
												// 							},
												// 							content: 'Дизайн в браузере'
												// 						}
												// 					]
												// 				}
												// 			]
												// 		}
												// 	]
												// }
											]
										}
									]
								}
							]
						},
						/* /Community */

						/* Product */
						{
							elem: 'section',
							attrs: {
								style: 'padding-top: 72px; padding-bottom: 96px;'
							},
							content: [
								{
									elem: 'container',
									elemMods: { size: 'm', align: 'center' },
									content: [
										{
											block: 'tpl-grid',
											mods: { columns: '12', 'col-gap': 'two-thirds', 'row-gap': 'full'  },
											content: [
												{
													elem: 'fraction',
													elemMods: { col: '12'},
													content: [
														{
															block: 'text',
															mods: { size: 'xxxxl', view: 'primary', align: 'center' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Мероприятия'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary', align: 'center' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: [
																{
																	block: 'text',
																	content: 'Мы проводим лекции на мероприятиях для разработчиков и дизайнеров.'
																},
																{
																	block: 'text',
																	content: 'Тут собраны самые важные из них'
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '6' },
													content: [
														{
															block: 'event',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', view: 'default' }
															],
															tag: 'a',
															attrs: {
																href: 'http://youtu.be/dhHlaiD0NZc?t=7h37m1s',
																target: '_blank'
															},
															content: [
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' }},
																	url: '../../assets/i/train.png'
																},
																{
																	elem: 'header',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'info',
																			content: [
																				{
																					elem: 'speaker',
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																					content: [
																						{
																							elem: 'persone',
																							content: [
																								{
																									block: 'avatar',
																									content: [
																										{
																											elem: 'photo',
																											elemMods: { size: 'm' },
																											content: [
																												{
																													block: 'image',
																													width: 60,
																													url: '../../assets/i/julia.jpg'
																												}
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							elem: 'event',
																							content: [
																								{
																									block: 'brand-logo',
																									mods: { name: 'dribbble', size: 'm' },
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																					content: 'Dribbble Meetup'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'l', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																					content: 'Серия конференций по продуктовому дизайну. Декларативный дизайн. Юлия Музафарова'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			content: '@dribbbleru'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { col: '6' },
													content: [
														{
															block: 'event',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', view: 'default' }
															],
															tag: 'a',
															attrs: {
																href: 'https://www.youtube.com/watch?v=YUKHcQJEELw',
																target: '_blank'
															},
															content: [
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' }},
																	url: '../../assets/i/palm.png'
																},
																{
																	elem: 'header',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xxl' }},
																	content: [
																		{
																			elem: 'info',
																			content: [
																				{
																					elem: 'speaker',
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																					content: [
																						{
																							elem: 'persone',
																							content: [
																								{
																									block: 'avatar',
																									content: [
																										{
																											elem: 'photo',
																											elemMods: { size: 'm' },
																											content: [
																												{
																													block: 'image',
																													width: 60,
																													url: '../../assets/i/misha.jpg'
																												}
																											]
																										}
																									]
																								}
																							]
																						},
																						{
																							elem: 'event',
																							content: [
																								{
																									block: 'brand-logo',
																									mods: { name: 'wsd', size: 'm' },
																								}
																							]
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																					content: 'Веб-стандарты'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'l', weight: 'light' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
																					content: 'Конференция по фронтенду. Прототипирование на продакшн технологиях. Михаил Колосков'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm' },
																			content: '@webstandards_ru'
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
							]
						},
						/* /Product */

						/* Subscribe */
						{
							elem: 'section',
							attrs: {
								style: 'padding-top: 72px; padding-bottom: 216px; text-align: center;'
							},
							content: [
								{
									elem: 'container',
									elemMods: { size: 'm', align: 'center' },
									content: [
										{
											block: 'tpl-grid',
											mods: { columns: '12', 'col-gap': 'two-thirds', 'row-gap': 'full'  },
											content: [
												{
													elem: 'fraction',
													elemMods: { col: '12'},
													content: [
														{
															block: 'text',
															mods: { size: 'xxxxl', view: 'primary', align: 'center' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Будь в курсе событий'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'primary', align: 'center' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
															content: [
																{
																	block: 'text',
																	content: 'Подпишитесь на нашу рассылку, чтобы следить за обновлениями'
																},
																{
																	block: 'text',
																	content: 'и развитием нашей дизайн-системы'
																},
															]
														},
														{
															block: 'subscribe',
															content: {
																html: `<!-- Begin MailChimp Signup Form -->
																<!-- <style type="text/css">
																	#mc_embed_signup{ clear:left; font:13px; }
																</style> -->
																<div>
																<form action="https://tools.us18.list-manage.com/subscribe/post?u=3b7792c268dda402a67b1ad99&amp;id=1f8e40a20f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
																		<div id="mc_embed_signup_scroll">
																			<div class="mc-field-group">
																				<span class="input input_theme_islands input_size_xl i-bem decorator decorator_indent-r_xs" data-bem='{"input":{}}'><span class="input__box"><input type="email" value="" name="EMAIL"  class="input__control required email" id="mce-EMAIL" placeholder="Электронная почта"></span></span>
																			</div>
																			<div id="mce-responses" class="clear">
																				<div class="response" id="mce-error-response" style="display:none"></div>
																				<div class="response" id="mce-success-response" style="display:none"></div>
																			</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
																			<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3b7792c268dda402a67b1ad99_1f8e40a20f" tabindex="-1" value=""></div>
																			<!-- <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div> -->
																			<button class="button button_theme_islands button_size_xl button_type_submit button_view_action button__control i-bem" data-bem='{"button":{}}' role="button" type="submit" name="subscribe" id="mc-embedded-subscribe"><span class="button__text">Подписаться</span></button>
																		</div>
																</form>
																</div>
																<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
																<!--End mc_embed_signup-->`
															}
														},
														{
															block: 'input',
															mods: { theme: 'islands', size: 'xl'},
															mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
															attrs: { style: 'display: none' },
															placeholder: 'Электронная почта'
														},
														{
															block: 'button',
															mods: { theme: 'islands', size: 'xl', view: 'action' },
															attrs: { style: 'display: none' },
															text: 'Подписаться',
															url: 'http://google.com'
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* /Subscribe */

						/* Footer */
						{
							block: 'footer',
						}
						/* /Footer */

					]
				}
			]
		}
	]
};
