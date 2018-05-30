block('demo').elem('counter')(
	content()(function(n, ctx) {
		return [
		{
			elem: '',
			tag: 'script',
			attrs: { type: 'text/javascript' },
			content: ['(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter47255010 = new ' +
			'Ya.Metrika({ id:47255010, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } ' +
			'catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () '+
			'{ n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; '+
			'if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");']
		},
		{
			elem: '',
			tag: 'noscript',
			content: [
			{
				elem:'',
				content: [
				{
					block: 'image',
					url: 'https://mc.yandex.ru/watch/47255010',
					attrs: { style: "position:absolute; left:-9999px;", alt: "" }
				}]
			}]
		}]
	})
);