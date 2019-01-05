module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
		{ elem: 'css', url: 'new-index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'new-index.min.js' }],
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'plex' }
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
				/* Menu */
				// {
				// 	block: 'new-menu',
				// },
				/* Menu */

				/* Intro */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'full' },
						content: [
							{
								block: 'intro',
								content: [
									{
										elem: 'title',
										content: {
											block: 'text',
											mods: { size: 'xxxxxl', view: 'primary', font: 'mono' },
											content: 'Все интерфейсные сложности выражаются через комбинации простых сущностей'
										}
									}
								]
							}
						]
					}
				},
				/* /Intro  */

				/* Layers */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'layers',
								content: [
									{
										block: 'layer-card',
										mods: { view: 'blue' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '1.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Тема'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Цвета, отступы, размеры, брейкпоиты'
											}
										]
									},
									{
										block: 'layer-card',
										attrs: { 'data-scroll-speed': '60' },
										mods: { view: 'red' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '2.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Каркас'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Обвязка, сетка'
											}
										]
									},
									{
										block: 'layer-card',
										attrs: { 'data-scroll-speed': '3' },
										mods: { view: 'black-blue' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '3.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Паттерны'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Списки, карточки, таблицы и т.д.'
											}
										]
									},
									{
										block: 'layer-card',
										attrs: { 'data-scroll-speed': '1' },
										mods: { view: 'black-monochrome' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '4.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Контент'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Графика, типографика, контролы'
											}
										]
									}
								]
							}
						]
					}
				},
				/* /Layers */

				/* Demo */
				{
					elem: 'content',
					attrs: { style: 'height: 900px' },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [

						]
					}
				},
				/* /Demo */

				/* About */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [

						]
					}
				},
				/* /About */

				/* Comparing */

				/* /Comparing */

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
				}
				/* /Footer */

			]
		}
	]
};
