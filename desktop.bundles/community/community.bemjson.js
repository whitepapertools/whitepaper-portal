module.exports = {
	block: 'page',
	title: 'community',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
		{ elem: 'css', url: 'community.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'community.min.js' }],
	// mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
		},
		// {
		// 	block: 'component',
		// 	mods: { whitepaper: 'default' }
		// }
	],
	attrs: { style: 'background: var(--color-bg-default)' },
	content: [
		{
			block: 'demo',
			content: [

						/* Menu */
						{
							block: 'new-menu',
							mix: { block: 'demo', elem: 'nav' }
						},
						/* Menu */
						{
							elem: 'content',
							elemMods: { size: 'm' },
							content: [
								{
									elem: 'section',
									content: [
										{
											elem: 'social',
											mix: { block: 'decorator', mods: { 'space-b': 'xxxxxl' }},
											content: [
												{
													block: 'text',
													// mods: { view: 'secondary', size: 'xxxxxl'},
													mods: { size: 'xxxl', view: 'secondary' },
													content: 'Wanna make a real Design System?'
												},
												{
													block: 'text',
													mods: { view: 'primary', size: 'xxxl'},
													mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
													content: 'Join Us'
												},
												{
													elem: 'social-wrapper',
													attrs: { style: 'display:flex; align-items: center;' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
													content: [
														{
															block: 'brand-logo',
															mods: { 'name': 'telegram-inverse', 'size':'s' }
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://t.me/whitepapertools' },
															mods: { view: 'primary', size: 'xxxl', view: 'link', display: 'inline' },
															mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
															content: 'Telegram'
														},
													]
												},
												{
													elem: 'social-wrapper',
													attrs: { style: 'display:flex; align-items: center;' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
													content: [
														{
															block: 'brand-logo',
															mods: { 'name': 'twitter-inverse', 'size':'s' }
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://twitter.com/whitepapertools' },
															mods: { view: 'primary', size: 'xxxl', view: 'link', display: 'inline' },
															mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
															content: 'Twitter'
														},
													]
												},
												{
													elem: 'social-wrapper',
													attrs: { style: 'display:flex; align-items: center;' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
													content: [
														{
															block: 'brand-logo',
															mods: { 'name': 'github-inverse', 'size':'s' }
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://github.com/whitepapertools' },
															mods: { view: 'primary', size: 'xxxl', view: 'link', display: 'inline' },
															mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
															content: 'Github'
														},
													]
												},
												{
													elem: 'social-wrapper',
													attrs: { style: 'display:flex; align-items: center;' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
													content: [
														{
															block: 'brand-logo',
															mods: { 'name': 'codepen-inverse', 'size':'s' }
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://codepen.io/whitepapertools/' },
															mods: { view: 'primary', size: 'xxxl', view: 'link', display: 'inline' },
															mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
															content: 'Codepen'
														},
													]
												},
												{
													elem: 'social-wrapper',
													attrs: { style: 'display:flex; align-items: center;' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
													content: [
														{
															block: 'brand-logo',
															mods: { 'name': 'dribbble-inverse', 'size':'s' }
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://dribbble.com/whitepapertools' },
															mods: { view: 'primary', size: 'xxxl', view: 'link', display: 'inline' },
															mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
															content: 'Dribbble'
														},
													]
												},
											]
										},
										{
											elem: 'right-pic',
											mix: { block: 'decorator', mods: { 'space-v': 'xxxxxl' }},
											content: [
												{
													block: 'tpl-grid',
													mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'center' },
													content: [
														{
															elem: 'fraction',
															elemMods: { col: '6' },
															content: [
																{
																	block: 'left',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'primary', weight: 'light' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																			content: 'Kseniya Lushnikova'
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxxl', view: 'primary' },
																			content: 'Некомпонентная декларативаная открытая дизайн-система, РИТ 2019'
																		},
																	]
																}
															]
														},
														{
															elem: 'fraction', elemMods: { col: '1' },
														},
														{
															elem: 'fraction',
															elemMods: { col: '5' },
															content: [
																// {
																// 	block: 'text',
																// 	mods: { size: 'l', view: 'primary' },
																// 	content: 'БЭМ для дизайнеров: прототипирование на продакшн-технологиях'
																// },
																{
																	block: 'conf-logo',
																	content: [
																		{
																			block: 'brand-logo',
																			mods: { name: 'dribbble', size: 'l' },
																		}
																	]
																},
															]
														}
													]
												},
											]
										}
									]
								},
							]
						},

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
						{
							elem: 'content',
							elemMods: { size: 'l' },
							content: [
								{
									elem: 'section',
									content: [
										{
											block: 'text',
											mods: { size: 'xxxxl', view: 'primary', align: 'center' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
											content: 'Комьюнити'
										},
										{
											block: 'text',
											mods: { size: 'xl', view: 'secondary', align: 'center' },
											content: [
												{
													elem: 'row',
													content: 'Здесь мы собираем последние новости с наших выступлений и свежие публикации.'
												},
												{
													elem: 'row',
													content: 'Всегда есть открытые задачи, к которым можно присоединиться.'
												},
												{
													elem: 'contacts',
													mix: { block: 'decorator', mods: { 'indent-t': 'xl'} },
													content: [
														{
															block: 'text',
															mods: { view: 'secondary', size: 'xl', display: 'inline' },
															content: 'Мы на '
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://github.com/whitepapertools', style: 'color: #0070F0;' },
															mods: { size: 'xl', view: 'link', display: 'inline' },
															content: 'github'
														},
														{
															block: 'text',
															mods: { view: 'secondary', size: 'xl', display: 'inline' },
															content: ' и в '
														},
														{
															block: 'text',
															tag: 'a',
															attrs: { href: 'https://t.me/whitepapertools', style: 'color: #0070F0;' },
															mods: { size: 'xl', view: 'link', display: 'inline' },
															content: 'telegram'
														},
													]
												}
											]
										}
									]
								}
							]
						},

						/* Report */
						{
							elem: 'content',
							attrs: { style: 'padding: 70px 0' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'center' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '8'},
											content: [
												{
													block: 'text',
													mods: { size: 'xxxl', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
													content: 'Доклады'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
													attrs: { style: 'max-width: 500px' },
													content: 'Мы проводим лекции на мероприятияхдля разработчиков и дизайнеров. Тут собраны самые важные из них.'
												},
												// {
												// 	elem: 'item',
												// 	attrs: { style: 'background-color: #000; max-height: 400px;' },
												// 	mix: { block: 'theme', mods: { color: 'whitepaper-inverse'}},
												// 	content: [
												// 		{
												// 			block: 'text',
												// 			mods: { view: 'primary', size: 'xxl' },
												// 			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
												// 			content: 'Dribbble Meetup'
												// 		},
												// 		{
												// 			block: 'text',
												// 			mods: { view: 'secondary', size: 'l' },
												// 			mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
												// 			content: 'Серия конференций по продуктовому дизайну. Декларативный дизайн.'
												// 		},
												// 		{
												// 			block: 'text',
												// 			mods: { view: 'primary', size: 's' },
												// 			content: 'Юлия Музафарова'
												// 		}
												// 	]
												// }
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
														target: '_blank',
														style: 'height: 280px'
													},
													content: [
														{
															elem: 'header',
															elemMods: { 'space-a': 'xxl' },
															content: [
																{
																	elem: 'speaker',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			elem: 'event',
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'dribbble', size: 's' },
																				}
																			]
																		}
																	]
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
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			content: 'Dribbble Meetup'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'l' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
																			attrs: { style: 'max-width: 400px' },
																			content: 'Серия конференций по продуктовому дизайну. Декларативный дизайн.'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Юлия Музафарова'
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
										// 			block: 'pt-card',
										// 			mix: [
										// 				{ block: 'article' },
										// 				{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
										// 				{ block: 'component', mods: { whitepaper: 'inverse' }}
										// 			],
										// 			tag: 'a',
										// 			attrs: {
										// 				href: 'https://medium.com/yandexmoney/бэм-для-дизайнеров-или-прототипирование-на-продакшн-технологиях-fd6218b1850f',
										// 				target: '_blank'
										// 			},
										// 			content: [
										// 				{
										// 					elem: 'image',
										// 					elemMods: { size: 'cover' },
										// 					url: '../../assets/i/train.png'
										// 				},
										// 				{
										// 					elem: 'header',
										// 					elemMods: { 'space-a': 'xxl' },
										// 					content: [
										// 						{
										// 							elem: 'speaker',
										// 							mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
										// 							content: [
										// 								{
										// 									elem: 'event',
										// 									content: [
										// 										{
										// 											block: 'brand-logo',
										// 											mods: { name: 'dribbble', size: 's' },
										// 										}
										// 									]
										// 								}
										// 							]
										// 						}
										// 					]
										// 				},
										// 				{
										// 					elem: 'footer',
										// 					elemMods: { 'space-a': 'xxl' },
										// 					content: [
										// 						{
										// 							elem: 'info',
										// 							content: [
										// 								{
										// 									block: 'text',
										// 									mods: { view: 'primary', size: 'xxl' },
										// 									mix: { block: 'decorator', mods: { 'indent-b': 's' }},
										// 									content: 'Dribbble Meetup'
										// 								},
										// 								{
										// 									block: 'text',
										// 									mods: { view: 'secondary', size: 'l' },
										// 									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
										// 									content: 'Серия конференций по продуктовому дизайну. Декларативный дизайн.'
										// 								},
										// 								{
										// 									block: 'text',
										// 									mods: { view: 'primary', size: 's' },
										// 									content: 'Юлия Музафарова'
										// 								}
										// 							]
										// 						}
										// 					]
										// 				}
										// 			]
										// 		}
										// 	]
										// },
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
																	elem: 'speaker',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			elem: 'event',
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'wsd', size: 's' },
																				}
																			]
																		}
																	]
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
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			content: 'Веб-стандарты'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'l' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
																			content: 'Конференция по фронтенду. Прототипирование на веб-технологиях.'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Михаил Колосков'
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
						/* Report */

						/* Tasks */
						{
							elem: 'content',
							attrs: { style: 'padding: 70px 0' },
							content: [
								{
									block: 'icon', mods: { 'name': 'list', size: 'm', view: 'brand' },
									attrs: { style: 'display: block; background: #016DFF; border: solid 20px #016DFF; border-radius: 50%; box-shadow: var(--shadow-default)' },
									mix: [ { block: 'theme', mods: { color: 'whitepaper-inverse'} },
												{ block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': 'xl' }}],
								},
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary', align: 'center' },
									mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
									content: 'Открытые задачи',
								},
								{
									block: 'text',
									mods: { size: 'l', view: 'secondary', align: 'center' },
									mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
									content: [
										{
											elem: 'row',
											content: 'У нас всегда есть что поделать. Задачи открыты для общего доступа.'
										},
										{
											elem: 'row',
											content: 'Присоединяйтесь и делайте Whitepaper лучше.'
										},
										{
											block: 'button',
											mix: { block: 'decorator', mods: { 'indent-t': 'xxl' } },
											mods: { theme: 'islands', size: 'l'},
											url: 'https://github.com/orgs/whitepapertools/projects/3',
											text: 'Вбрать задачу'
										},
									]
								}
							]
						},
						/* Tasks */

						/* Publications */
						{
							elem: 'content',
							attrs: { style: 'padding: 50px 0' },
							content: [
								{
									elem: 'container',
									elemMods: { size: 'm', align: 'center' },
									content: [
										{
											block: 'tpl-grid',
											mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'center' },
											content: [
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
																{ block: 'decorator', mods: { 'indent-b': 'xxxxl'}}
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
																			elem: 'speaker',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'event',
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { name: 'medium-inverse', size: 's' },
																						}
																					]
																				}
																			]
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
																					block: 'text',
																					mods: { view: 'primary', size: 'xxl' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'BEM Design'
																				},
																				{
																					block: 'text',
																					mods: { view: 'secondary', size: 'l' },
																					content: 'Мы сделали БЭМ-платформу инструментом для построения интерфейсов, дополнив её арсеналом для масштабирования.'
																				}
																			]
																		}
																	]
																}
															]
														},
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
																			elem: 'speaker',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'event',
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { name: 'medium-inverse', size: 's' },
																						}
																					]
																				}
																			]
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
																					block: 'text',
																					mods: { view: 'primary', size: 'xxl' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'BEM Design'
																				},
																				{
																					block: 'text',
																					mods: { view: 'secondary', size: 'l' },
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
																			elem: 'speaker',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'event',
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { name: 'medium-inverse', size: 's' },
																						}
																					]
																				}
																			]
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
																					block: 'text',
																					mods: { view: 'primary', size: 'xxl' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					content: 'BEM Design'
																				},
																				{
																					block: 'text',
																					mods: { view: 'secondary', size: 'l' },
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
													content: [
														{
															block: 'text',
															mods: { size: 'xxxl', view: 'primary' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
															content: 'Публикации'
														},
														{
															block: 'text',
															mods: { size: 'l', view: 'secondary' },
															content: 'Мы проводим лекции на мероприятияхдля разработчиков и дизайнеров. Тут собраны самые важные из них.'
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* Publications */

						/* Subscribe */
						{
							elem: 'content',
							content: [
								{
									block: 'icon', mods: { 'name': 'mail-1', size: 'm', view: 'brand' },
									attrs: { style: 'display: block; background: #016DFF; border: solid 20px #016DFF; border-radius: 50%; box-shadow: var(--shadow-default)' },
									mix: [ { block: 'theme', mods: { color: 'whitepaper-inverse'} },
												{ block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': 'xl' }}],
								},
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
													mods: { size: 'xxxl', view: 'primary', align: 'center' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
													content: 'Будь в курсе событий'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary', align: 'center' },
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
													mods: { theme: 'islands', size: 'l'},
													mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
													attrs: { style: 'display: none' },
													placeholder: 'Электронная почта'
												},
												{
													block: 'button',
													mods: { theme: 'islands', size: 'l', view: 'action' },
													attrs: { style: 'display: none' },
													text: 'Подписаться',
													url: 'http://google.com'
												}
											]
										}
									]
								}
							]
						},
						/* Subscribe */

						/* Footer */
						{
							block: 'footer',
						}
						/* /Footer */

			]
		}
	]
};
