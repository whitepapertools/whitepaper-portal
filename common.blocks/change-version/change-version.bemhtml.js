// block('change-version')(
// 	content()(function(n, ctx) {
// 		return [
// 			{
// 				elem: 'plug'
// 			},
// 			ctx.content
// 		]
// 	})
// );

//block('change-version')(
  //tag()('a') // Устанавливаем тег menu для блока меню


    // content()(function(n, ctx) {
    //     return {
    //         elem : 'photo',
    //         url: ctx.url,
    //         title: 'john-photo'
    //     }
    // }),
//);

// block('change-version')(
//     {
//         // prependContent: '«',
//         // appendContent: '»'
//     },
//     {
//         appendContent: () => ({ block: 'link' })
//     }
// );

block('change-version')(
  content()(function(n, ctx) {
      return {
        // {
          block: 'tpl-grid',
          mods: { columns: '12', 'col-gap': 'two-thirds' },
          content: [
            // левая колонка
            {
              elem: 'fraction',
              elemMods: {col: '5'},
              content: [
                {
                  block: 'text',
                  mods: {size: 'xxxxl', weight: 'bold'},
                  content: 'Версия 99.99.99'
                },
                {
                  block: 'text',
                  mods: {size: 'l'},
                  mix: {block:'decorator', mods:{'space-t': 'm'}},
                  content: 'This release brings a refreshed components panel, a new store publishing experience and more.'
                },
                {
                  block: 'text',
                  mods: {size: 'm', view: 'secondary'},
                  mix: {block:'decorator', mods:{'space-t': 'xxs'}},
                  content: '1 января 2019'
                },
              ]
            },
            // правая колонка
            {
              elem: 'fraction',
              elemMods: {col: '7'},
              content: [
                {
                  block: 'info-block-margin',
                  mix: { block: 'decorator', mods: {'indent-l': 'l'}},
                  content: [
                    // мажоры
                    {
                      block: 'text',
                      mods: {size: 'xl', view: 'primary'},
                      content: 'Важные изменения'
                    }
                  ]
                }
              ]
            },
          ]
        // }
      }
  }),
);
