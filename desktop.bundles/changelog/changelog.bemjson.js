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
		{ elem: 'js', url: '//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js' },
		/* { elem: 'js', url: '//unpkg.com/docsify/lib/plugins/search.min.js' }, */   /* скрипт подключает поиск в боковое меню */
		{ elem: 'js', url: 'changelog.min.js' },
	],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
		{
			block: 'demo',
			content: [

				/* Menu */
				{
					block: 'new-menu',
					// mix: { block: 'demo', elem: 'nav' }
				},
				/* /Menu */

				/*
				{
					elem: 'docsify-content',
					attrs: { style: 'position: relative; top: 60px' },
					content: [
						{
							block: 'docsify',
							attrs: { id: 'app' },
							mix: { block: 'docsify-modifier' },
							// модифаер убирает контрол sidebar-toggle из боковой панели доксифая
						},
						{
							elem: 'section',
							content: [
								{
									tag: 'script',
									content: 'window.$docsify = { '
												+ 'loadSidebar: true, '
												+ 'basePath: \'/docs-changelog/\', '
												+ 'mergeNavbar: true, '
												+ '}'
								}
							]
						},
					]
				},
				*/

				// {
				// 	// block: 'change-version',
				// 	block: 'page-content',
				// 	attrs: { style: 'position: relative; top: 60px' },
				// 	content: [
				// 		{
				// 			block: 'change-version',
				// 			content: '12345'
				// 		},
				// 		{
				// 			block: 'page-content',
				// 			content: '67890'
				// 		}
				// 	]
				// },
				{
					block: 'demo',
					elem: 'content',
					elemMods: { size: 'm' },
					content: [
						{
							block: 'heading',
							mix: [
								{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
								{ block: 'text', mods: { size: 'xxxxl', weight: 'bold', view: 'primary', font: 'sans' }},
							],
							content: 'История изменений'
						},

						{
							block: 'change-version',
							number: 'Версия 22.22.22',
							description: 'This release brings a refreshed components panel, a new store publishing experience and more.',
							date: '1 января 2019',
							major: 'Важные изменения',
							major1: 'Для текста используется блок text. С помощью модификаций можно менять размер, цвет, начертание и другие свойства шрифта',
							major2: 'Перед тем, как начать этот курс, тебе надо иметь базовые знания HTML и CSS. Можешь пройти онлайн-курсы, например, в htmlacademy.',
							major3: 'Для отображения логотипов используется блок brand-logo. Через модификации указывается вид и размер логотипа',
						},



						// {block('version-description').content()('test')},

						// {
						// 	block: 'tpl-grid',
						// 	mods: { columns: '12', 'col-gap': 'two-thirds' },
						// 	// mods: { structure: '50-50' },
						// 	// mix: { block: 'theme-layout' },
						// 	content: [
						//
						// 		// левая колонка
						// 		{
						// 			elem: 'fraction',
						// 			elemMods: {col: '5'},
						// 			content: [
						// 				{
						// 					block: 'text',
						// 					mods: {size: 'xxxxl', weight: 'bold'},
						// 					content: 'Версия 99.99.99'
						// 				},
						// 				{
						// 					block: 'text',
						// 					mods: {size: 'l'},
						// 					mix: {block:'decorator', mods:{'space-t': 'm'}},
						// 					content: 'This release brings a refreshed components panel, a new store publishing experience and more.'
						// 				},
						// 				{
						// 					block: 'text',
						// 					mods: {size: 'm', view: 'secondary'},
						// 					mix: {block:'decorator', mods:{'space-t': 'xxs'}},
						// 					content: '1 января 2019'
						// 				},
						// 			]
						// 		},
						//
						// 		// правая колонка
						// 		{
						// 			elem: 'fraction',
						// 			elemMods: {col: '7'},
						// 			content: [
						// 				{
						// 					block: 'info-block-margin',
						// 					mix: { block: 'decorator', mods: {'indent-l': 'l'}},
						// 					content: [
						// 						// мажоры
						// 						{
						// 							block: 'text',
						// 							mods: {size: 'xl', view: 'primary'},
						// 							content: 'Важные изменения'
						// 						}
						// 					]
						// 				}
						// 			]
						// 		},
						// 	]
						// }
					]
				},

				/* Content */
				// {
				// 	elem: 'content',
				// 	// elemMods: { size: 'm' },
				// 	content: [
				//
				// 	]
				// },
				/* /Content */

				/* Footer */

				// {
				// 	block: 'footer',
				// 	mix: { block: 'demo', elem: 'footer' }
				// }

				/* /Footer */
			]
		}
	]
};
