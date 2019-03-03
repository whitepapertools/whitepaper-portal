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
	// mods: { theme: 'islands' },
	attrs: { style: 'background: var(--color-bg-default)' },
	mix: {
		block: 'theme',
		// mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
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

							// максимум 5 пунктов

							block: 'change-version',
							// attrs: { 'href':'#22-22-22' },
							// attrs: { 'href':'http://0.0.0.0:8080/desktop.bundles/changelog/changelog.html#22_22_22' },
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

				{
					block: 'footer',
					mix: { block: 'demo', elem: 'footer' }
				}

				/* /Footer */
			]
		}
	]
};
