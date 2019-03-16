module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	prefix: 'og: http://ogp.me/ns#', // для отображения карточек ссылки vk и fb
	head: [
		// { elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		/* twitter meta */
		{ elem: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
		{ elem: 'meta', attrs: { name: 'twitter:site', content: '@whitepapertools' } },
		{ elem: 'meta', attrs: { name: 'twitter:creator', content: '@whitepapertools' } },
		{ elem: 'meta', attrs: { name: 'twitter:title', content: 'Новая версия whitepape' } },
		{ elem: 'meta', attrs: { name: 'twitter:description', content: 'whitepaper. Некомпонентная декларативаная открытая дизайн-система' } },
		{ elem: 'meta', attrs: { name: 'twitter:image:src', content: '../../assets/social-cards/changelog-twitter.jpg' } },
		/* twitter meta */
		/* facebook & vk meta */
		{ elem: 'meta', attrs: { property: 'og:title', content: 'Новая версия whitepaper' } }, // НАЗВАНИЕ СТРАНИЦЫ
		{ elem: 'meta', attrs: { property: 'og:type', content: 'article' } },
		{ elem: 'meta', attrs: { property: 'og:url', content: 'http://whitepaper.tools/changelog' } },
		{ elem: 'meta', attrs: { property: 'og:image', content: '../../assets/social-cards/changelog-fb-vk.jpg' } }, // ССЫЛКА НА КАРТИНКУ‑ОБЛОЖКУ СТРАНИЦЫ
		{ elem: 'meta', attrs: { property: 'og:description', content: 'whitepaper. Некомпонентная декларативаная открытая дизайн-система' } }, // ОПИСАНИЕ СТРАНИЦЫ, ПОЯВЛЯЕТСЯ ПОД НАЗВАНИЕМ В КАРТОЧКЕ
		{ elem: 'meta', attrs: { property: 'og:site_name', content: 'whitepaper' } },
		/* facebook & vk meta */
		{ elem: 'css', url: 'changelog.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [
		{ elem: 'js', url: 'changelog.min.js' },
	],
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			content: [

				/* Grid-decor */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'grid-decoration',
								mix: [
									{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'full' } }
								],
								content: [
									{
										elem: 'column'
									},
									{
										elem: 'column'
									},
									{
										elem: 'column'
									},
									{
										elem: 'column'
									}
								]
							}
						]
					}
				},
				/* Grid-decor */

				/* Menu */
				{
					block: 'menu',
					content: [
						{
							elem: 'content',
							mix: { block: 'tpl-layout', elem: 'content' },
							content: [
								{
									elem: 'container',
									mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }},
									content: [
										{
											elem: 'inner',
											content: [
												{
													elem: 'paper',
													content: [
														{
															elem: 'logo',
															tag: 'a',
															attrs: { href: '/index.html' }
														},
														{
															elem: 'download',
															content: [
																{
																	block: 'figured-button',
																	tag: 'a',
																	attrs: { href: 'https://github.com/whitepapertools' } ,
																	mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
																	content: 'GitHub'
																}
															]
														}
													]
												},
												{
													elem: 'nav',
													content: [
														{
															elem: 'item',
															mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
															content: 'Документация'
														},
														{
															elem: 'item',
															mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
															content: 'Starter Kit'
														},
														{
															elem: 'item',
															mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
															content: 'Сообщество'
														},
														{
															elem: 'item',
															mix: { block: 'text', mods: { size: 'xl', view: 'secondary' } },
															content: 'Changelog'
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
				/* Menu */


				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'change-version',
								versionLink: '#1_0_0', // href для якоря, # обязательна
								versionId: '1_0_0', // id для якоря
								number: 'Версия 1.0.0',
								description: 'This release brings a refreshed components panel, a new store publishing experience and more.',
								date: '1 января 2019',

								major: 'Важные изменения', // eng: Notable changes, с тчк.зр. версий – мажор
								majorList: [
									'MAJOR version when you make incompatible API changes',
									'Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith',
								],

								minor: 'Изменения', // eng: Changes, с тчк.зр. версий – минор
								minorList: [
									'MINOR version when you add functionality in a backwards-compatible manner',
									'Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith',
								],

								patch: 'Исправлены ошибки', // eng: Bug fixes, с тчк.зр. версий – патч
								patchList: [
									'PATCH version when you make backwards-compatible bug fixes',
									'Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith',
								]
							},
						]
					}
				},


				/* Footer */
				{
					block: 'footer',
					mix: { block: 'tpl-layout' },
					content: [
						{
							elem: 'content',
							mix: { block: 'tpl-layout', elem: 'content' },
							content: [
								{
									elem: 'container',
									mix: { block: 'tpl-layout', elem: 'container', elemMods: { align: 'center', size: 'm' }},
									content: [
										{
											elem: 'inner',
											mix: { block: 'tpl-grid', mods: { 's-columns': '12', 'm-columns': '12', 'l-columns': '12', 'col-gap': 'full', 'raw-gap': 'full' }},
											content: [
												{
													elem: 'logo',
													mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { 'xs-col': '3', 's-col': '3', 'm-col': '4', 'l-col': '4' }},
													content: [
														{
															block: 'image',
															url: '/assets/partners/whitepaper.svg',
															width: 230
														}
													]
												},
												{
													elem: 'menu',
													mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { 'xs-col': '3', 's-col': '3', 'm-col': '8', 'l-col': '8' }},
													content: [
														{
															elem: 'menu-list',
															mix: { block: 'tpl-grid', mods: { 'xs-ratio': '1', 's-ratio': '1-1', 'm-ratio': '1-1-1', 'col-gap': 'half' }},
															content: [
																{
																	elem: 'unit',
																	content: [
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'О дизайн-системе'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Контрибьюторы'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'ПрессКит'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'unit',
																	content: [
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Документация'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Github'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Telegram'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Medium'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'CodePen'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'unit',
																	content: [
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Сообщество'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'События'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			tag: 'a',
																			attrs: {
																				href: '#'
																			},
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: {
																						href: 'http://whitepaper.tools',
																						style: 'text-decoration: none; display: block'
																					},
																					content: 'Кит'
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
								}
							]
						}
					]
				}
				/* /Footer */

			]
		}
	]
};
