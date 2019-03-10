module.exports = {
	block: 'page',
	title: 'whitepaper',
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

				/* Page content */

				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'community',
								content: [

									/* Social */

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
												block: 'tpl-grid', mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' },
												content: [
													{
														elem: 'fraction',
														elemMods: { col: '4' },
														content: [
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
														]
													},
													{
														elem: 'fraction',
														elemMods: { col: '4' },
														content: [
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
														]
													},
													{
														elem: 'fraction',
														elemMods: { col: '4' },
														content: [
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
					          		]
					        		},
										]
									},
									/* Social */

									/* Events */
				        	{
										block: 'tpl-grid', mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' },
										content: [
											{
												elem: 'fraction',
												elemMods: { col: '4' },
												content: [
													{
														block: 'invite',
														mix: [
															{ block: 'decorator', mods: { 'space-v':'xxxl', 'space-h':'xxl' }},
															{ block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
														],
														content: [
															{
																block: 'text',
																mods: { view: 'secondary', weight: 'light' },
																content: 'Если у вашей продуктовой команды ИЛИ КОНФЕРЕНЦИИ есть потребность в персональной консультации, вы всегда можете связатьс с нами и договориться о частной лекции. Просто напишите нам на почту'
															},
															{
																block: 'text',
																mods: { view: 'primary', weight: 'light' },
																mix: { block: 'decorator', mods: { 'space-t':'xxs' }},
																// attrs: { style: 'display: inline;'},
																content: 'whatsup@whitepaper.tools'
															}
														]
													}
												]
											},
											{
												elem: 'fraction',
												elemMods: { col: '4' },
												content: [
													// рит Ксюша
													{
														block: 'community-events',

														// ссылка и путь к аватару спикера
														photoLink: 'http://facebook.com',
														photoPath: '/assets/team/ksusha.jpg',
														// данные конференции
														confLogo: 'rit', // каждую новую конфу необходимо добавить в депсы
														confName: 'РИТ++',
														confDate: '28 февраля 2019',
														confCity: 'Москва',
														// название и ссылка на выступления
														speechName: 'Production Ready Design',
														speechSourceText: 'Сайт конференции РИТ++',
														speechSourceLink: 'https://ritfest.ru/'
													}
												]
											},
											{
												elem: 'fraction',
												elemMods: { col: '4' },
												content: [
													// дрибл Юля
													{
														block: 'community-events',
														// mix: { block: 'decorator', mods: { 'space-v':'xxxl', 'space-h':'xl' }},
														// ссылка и путь к аватару спикера
														photoLink: 'http://facebook.com',
														photoPath: '/assets/team/julya.jpg',
														// данные конференции
														confLogo: 'dribbble', // каждую новую конфу необходимо добавить в депсы
														confName: 'Dribbble Meetup',
														confDate: '14 августа 2018',
														confCity: 'Санкт-Петербург',
														// название и ссылка на выступления
														speechName: 'Декларативный дизайн',
														speechSourceText: 'Запись выступления',
														speechSourceLink: 'http://youtu.be/dhHlaiD0NZc?t=7h37m1s'
													}
												]
											}
										]
									},
									{
										block: 'tpl-grid', mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' },
										mix: { block: 'decorator', mods: { 'indent-t': 'xl' }},
										content: [
											{
												elem: 'fraction',
												elemMods: { col: '4' },
												content: [
													{
														block: 'community-events',
														// ссылка и путь к аватару спикера
														photoLink: 'http://facebook.com',
														photoPath: '/assets/team/julya.jpg',
														// данные конференции
														confLogo: 'pitercss-meetup', // каждую новую конфу необходимо добавить в депсы
														confName: 'Dribbble Meetup',
														confDate: '14 августа 2018',
														confCity: 'Санкт-Петербург',
														// название и ссылка на выступления
														speechName: 'Production Ready Design. Обкатка',
														speechSourceText: 'Запись выступления',
														speechSourceLink: 'http://youtu.be/dhHlaiD0NZc?t=7h37m1s'
													}
												]
											},
											{
												elem: 'fraction',
												elemMods: { col: '4' },
												content: [
													// рит Ксюша
													{
														block: 'community-events',
														// ссылка и путь к аватару спикера
														photoLink: 'http://facebook.com',
														photoPath: '/assets/team/ksusha.jpg',
														// данные конференции
														confLogo: 'rit', // каждую новую конфу необходимо добавить в депсы
														confName: 'BEM UP',
														confDate: '28 февраля 2019',
														confCity: 'Москва',
														// название и ссылка на выступления
														speechName: 'BEM UP',
														speechSourceText: 'Сайт конференции РИТ++',
														speechSourceLink: 'https://ritfest.ru/'
													}
												]
											},
											{
												elem: 'fraction',
												elemMods: { col: '4' },
												content: [
													// дрибл Юля

												]
											}
										]
									},
									/* Events */
								]
							}
				    ]
				  },
				},

				/* Page content */

				/* Yandex.Metrika counter */
				{
					block: 'count',
					content: {
						html: `<script type="text/javascript" >
						(function (d, w, c) {
								(w[c] = w[c] || []).push(function() {
										try {
												w.yaCounter50119540 = new Ya.Metrika2({
														id:50119540,
														clickmap:true,
														trackLinks:true,
														accurateTrackBounce:true,
														webvisor:true
												});
										} catch(e) { }
								});

								var n = d.getElementsByTagName("script")[0],
										s = d.createElement("script"),
										f = function () { n.parentNode.insertBefore(s, n); };
								s.type = "text/javascript";
								s.async = true;
								s.src = "https://mc.yandex.ru/metrika/tag.js";

								if (w.opera == "[object Opera]") {
										d.addEventListener("DOMContentLoaded", f, false);
								} else { f(); }
						})(document, window, "yandex_metrika_callbacks2");
				</script>
				<noscript><div><img src="https://mc.yandex.ru/watch/50119540" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`
					}
				},
				/* /Yandex.Metrika counter */

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
