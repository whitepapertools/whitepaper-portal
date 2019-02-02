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
          mix: { block: 'decorator', mods: {'indent-b': 'xxxxxl'}},
          content: [
            // левая колонка
            {
              elem: 'fraction',
              elemMods: {col: '5'},
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: {size: 'xxxxl', weight: 'bold' }},
                  content: this.ctx.number
                },
                {
                  block: 'version-description',
                  mix: [
                    { block: 'text', mods: {size: 'l'}},
                    { block:'decorator', mods:{'space-t': 'm'}},
                  ],
                  content: this.ctx.description
                },
                {
                  block: 'version-date',
                  mix: [
                    { block: 'text', mods: {size: 'm', view: 'secondary'}},
                    { block: 'decorator', mods:{'space-t': 'xxs'}},
                  ],
                  content: this.ctx.date
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
                      mods: { size: 'xl', view: 'primary' },
                      content: this.ctx.major
                    },
                    {
                      block: 'pt-list',
                      mods: { border: 'all', view: 'default' },
                      content: [
                        {
                            elem: 'list',
                            elemMods: { 'space-a': 'xl' },
                            content: this.ctx.major1
                        },
                        {
                            elem: 'list',
                            elemMods: { 'space-a': 'xl' },
                            content: this.ctx.major2
                        },
                        {
                            elem: 'list',
                            elemMods: { 'space-a': 'xl' },
                            content: this.ctx.major3
                        }
                      ]
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
