module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
		{ elem: 'css', url: 'theme-generator.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'theme-generator.min.js' }],
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'medium', menu: 'default', font: 'nitti', control: 'whitepaper-brand' }
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
															tag: 'a',
															attrs: { href: '/doc.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Документация'
														},
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/starter-kit.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Starter Kit'
														},
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/community.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
															content: 'Сообщество'
														},
														{
															elem: 'item',
															tag: 'a',
															attrs: { href: '/changelog.html' },
															mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
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
								block: 'text',
								mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
								mods: { size: 'xxxl', view: 'secondary' },
								content: 'Генератор тем'
							},
							{
								block: 'theme-generator',
								mix: { block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'full', 'row-gap': 'full' }},
								content: [

									// Элемент с превью компонентов
									{
										elem: 'display',
										mix: [
											{ block: 'theme', mods: { color: 'theme-generator' } },
											{ block: 'tpl-grid', elem: 'fraction', elemMods: { col: '3' } }
										],
										content: [
											{
												block: 'text',
												mods: { size: 'xxxl', view: 'primary' },
												content: 'Header'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary' },
												mix: {block: 'decorator', mods: { 'indent-t': 'xxs'}},
												content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												mix: {block: 'decorator', mods: { 'indent-t': 'xxs'}},
												content: 'Small test discription'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'link' },
												mix: {block: 'decorator', mods: { 'indent-t': 'm'}},
												content: 'Test link'
											},
											{
												block: 'pt-table',
												mods: { view: 'default', stripe: 'odd', 'space-h':'m', 'space-v': 's' },
												mix: { block: 'decorator', mods: { 'indent-t': 'xxxl' } },
												content: [
													// хедер
													{
														elem: 'row',
														elemMods: { view: 'head', border: 'bottom' },
														content: [
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: { block: 'text', mods: { view: 'secondary', size: 's', transform: 'uppercase', spacing: 's' }},
																content: 'Завтрак'
															},
															{
																elem: 'col',
																elemMods: { align: 'left',  width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'secondary', size: 's', transform: 'uppercase', spacing: 's' }},
																],
																content: 'Обед'
															},
															{
																elem: 'col',
																elemMods: { align: 'left',  width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'secondary', size: 's', transform: 'uppercase', spacing: 's' }},
																],
																content: 'Полдник'
															},
															{
																elem: 'col',
																elemMods: { align: 'right', width:'40'},
																mix: [
																	{ block: 'text', mods: { view: 'secondary', size: 's', transform: 'uppercase', spacing: 's' }},
																],
																content: 'Стоимость'
															}
														]
													},
													// первая строка
													{
														elem: 'row',
														elemMods: { border: 'bottom', status: 'success'  },
														content: [
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: { block: 'text', mods: { view: 'primary', size: 'm' }},
																content: 'Яйца'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Суп'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Булка'
															},
															{
																elem: 'col',
																elemMods: { align: 'right', width:'40' },
																mix: [
																	{ block: 'text', mods: { view: 'success', size: 'm' }},
																],
																content: '+1000$'
															}
														]
													},
													// вторая строка
													{
														elem: 'row',
														elemMods: { border: 'bottom', status: 'alert'  },
														content: [
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: { block: 'text', mods: { view: 'primary', size: 'm' }},
																content: 'Каша'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Салат'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Фрукт'
															},
															{
																elem: 'col',
																elemMods: { align: 'right', width:'40' },
																mix: [
																	{ block: 'text', mods: { view: 'alert', size: 'm' }},
																],
																content: '-500$'
															}
														]
													},
													// третья строка
													{
														elem: 'row',
														elemMods: { border: 'bottom', status: 'warning'  },
														content: [
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: { block: 'text', mods: { view: 'primary', size: 'm' }},
																content: 'Каша'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Салат'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Фрукт'
															},
															{
																elem: 'col',
																elemMods: { align: 'right', width:'40' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: '+0$'
															}
														]
													},
													// четвёртая строка
													{
														elem: 'row',
														elemMods: { border: 'bottom', status: 'default'  },
														content: [
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: { block: 'text', mods: { view: 'primary', size: 'm' }},
																content: 'Каша'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Салат'
															},
															{
																elem: 'col',
																elemMods: { align: 'left', width:'20' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: 'Фрукт'
															},
															{
																elem: 'col',
																elemMods: { align: 'right', width:'40' },
																mix: [
																	{ block: 'text', mods: { view: 'primary', size: 'm' }},
																],
																content: '+0$'
															}
														]
													}
												]
											}

										]
									},
									// Элемент с превью компонентов

									// Элемент с контролами темы
									{
										elem: 'inspector',
										mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { col: '1' } },
										content: [
											{
												block: 'pt-form',
												content: [
													{
														elem: 'item',
														elemMods: { 'vertical-align': 'center' },
														mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
														content: [
															{
																block: 'theme-generator',
																elem: 'color-control', elemMods: { type: 'color-base-base' },
																tag: 'input', attrs: { type: 'color' },
																mods: { width: 'full', size: 'm' },
															},
															{
																block: 'text',
																mods: { size: 'm', view: 'secondary', display: 'inline' },
																mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																content: 'Цвет содержимого'
															},
														]
													},
													{
														elem: 'item',
														elemMods: { 'vertical-align': 'center' },
														mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
														content: [
															{
																block: 'theme-generator',
																elem: 'color-control', elemMods: { type: 'color-base-project' },
																tag: 'input', attrs: { type: 'color' },
																mods: { width: 'full', size: 'm' },
															},
															{
																block: 'text',
																mods: { size: 'm', view: 'secondary', display: 'inline' },
																mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																content: 'Цвет проекта'
															},
														]
													},
													{
														elem: 'item',
														elemMods: { 'vertical-align': 'center' },
														mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
														content: [
															{
																block: 'theme-generator',
																elem: 'color-control', elemMods: { type: 'color-base-phantom' },
																tag: 'input', attrs: { type: 'color' },
																mods: { width: 'full', size: 'm' },
															},
															{
																block: 'text',
																mods: { size: 'm', view: 'secondary', display: 'inline' },
																mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
																content: 'Тонирующий цвет'
															},
														]
													},
												]
											}
										]
									},
									// Элемент с контролами темы

									// Инпут для копирования кода
									{
										block: 'input',
										attrs: { style: 'height: 400px;' },
										mix: [
											{ block: 'theme-generator', elem: 'copy-area' },
											{ block: 'tpl-grid', elem: 'fraction', elemMods: { col: '3' } },
										],
										tag: 'textarea', attrs: { rows: '10', placeholder: 'Username' },
										mods: { width: 'full', size: 'l'},
									}
									// Инпут для копирования кода
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

																	]
																},
																{
																	elem: 'unit',
																	content: [

																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://github.com/whitepapertools' },
																					content: 'Github'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://codepen.io/whitepapertools/' },
																					content: 'CodePen'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://t.me/whitepapertools' },
																					content: 'Telegram'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: 'https://twitter.com/whitepapertools' },
																					content: 'Twitter'
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
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/doc.html' },
																					content: 'Документация'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/starter-kit.html' },
																					content: 'Starter Kit'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/community.html' },
																					content: 'Сообщество'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 'l', view: 'primary' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					tag: 'a',
																					attrs: { href: '/changelog.html' },
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
