module.exports = {
	block: 'page',
	title: 'Changelog',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'changelog.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [
		{ elem: 'js', url: 'changelog.min.js' },
	],
	// mods: { theme: 'islands' },
	// attrs: { style: 'background: var(--color-bg-default)' },
	mix: [
		{
			block: 'theme',
			// mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
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
								// максимум 5 пунктов
								block: 'change-version',
								versionLink: '#22_22_22', // href для якоря, # обязательна
								versionId: '22_22_22', // id для якоря
								number: 'Версия 22.22.22',
								description: 'This release brings a refreshed components panel, a new store publishing experience and more.',
								date: '1 января 2019',

								major: 'Важные изменения', // eng: Notable changes, с тчк.зр. версий – мажор
								major1: 'MAJOR version when you make incompatible API changes',
								major2: 'Перед тем, как начать этот курс, тебе надо иметь базовые знания HTML и CSS. Можешь пройти онлайн-курсы, например, в htmlacademy',
								major3: 'Для отображения логотипов используется блок brand-logo. Через модификации указывается вид и размер логотипа',
								major4: 'Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith',
								major5: '',

								minor: 'Изменения', // eng: Changes, с тчк.зр. версий – минор
								minor1: 'MINOR version when you add functionality in a backwards-compatible manner',
								minor2: 'Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version',
								minor3: 'Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards compatible functionality is introduced to the public API. It MUST be incremented if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented',
								minor4: 'It is not known definitively when Shakespeare began writing, but contemporary allusions and records of performances show that several of his plays were on the London stage by 1592',
								minor5: "Scholars differ on the exact meaning of Greene's words, but most agree that Greene was accusing Shakespeare of reaching above his rank in trying to match such university-educated writers as Christopher Marlowe, Thomas Nashe, and Greene himself (the so-called 'University Wits').",

								patch: 'Исправлены ошибки', // eng: Bug fixes, с тчк.зр. версий – патч
								patch1: 'PATCH version when you make backwards-compatible bug fixes',
								patch2: 'Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior',
								patch3: 'Мы быстро решили куда ехать хакатонить: в лес или не в лес',
								patch4: '',
								patch5: '',
							},
							{
								// максимум 5 пунктов
								block: 'change-version',
								versionLink: '#1_0_0', // href для якоря, # обязательна
								versionId: '1_0_0', // id для якоря
								number: 'Версия 1.0.0',
								description: 'This release brings a refreshed components panel, a new store publishing experience and more.',
								date: '1 января 2019',

								major: 'Важные изменения', // eng: Notable changes, с тчк.зр. версий – мажор
								major1: 'MAJOR version when you make incompatible API changes',
								major2: 'Перед тем, как начать этот курс, тебе надо иметь базовые знания HTML и CSS. Можешь пройти онлайн-курсы, например, в htmlacademy',
								major3: 'Для отображения логотипов используется блок brand-logo. Через модификации указывается вид и размер логотипа',
								major4: 'Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith',
								// major5: '',

								minor: 'Изменения', // eng: Changes, с тчк.зр. версий – минор
								minor1: 'MINOR version when you add functionality in a backwards-compatible manner',
								minor2: 'Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version',
								minor3: 'Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards compatible functionality is introduced to the public API. It MUST be incremented if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented',
								minor4: 'It is not known definitively when Shakespeare began writing, but contemporary allusions and records of performances show that several of his plays were on the London stage by 1592',
								minor5: "Scholars differ on the exact meaning of Greene's words, but most agree that Greene was accusing Shakespeare of reaching above his rank in trying to match such university-educated writers as Christopher Marlowe, Thomas Nashe, and Greene himself (the so-called 'University Wits').",

								patch: 'Исправлены ошибки', // eng: Bug fixes, с тчк.зр. версий – патч
								patch1: 'PATCH version when you make backwards-compatible bug fixes',
								patch2: 'Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior',
								patch3: 'Мы быстро решили куда ехать хакатонить: в лес или нет',
								// patch4: '',
								// patch5: '',
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
