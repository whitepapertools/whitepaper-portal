<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
block('change-version')(
  content()(function(n, ctx) {
      // записывает данные со старницы в массив
      var majorArray   = ctx.majorList; // мажоры
      var minorArray   = ctx.minorList; // миноры
      var patchArray   = ctx.patchList; // багфиксы

      // создает ui компонент с контентом
      var majorComponents = majorArray.map(item => {
        return {
            elem: 'item',
            elemMods: { 'space-b': 'm' },
            content: [
              {
                block: 'change-item',
                mix: { block: 'text', mods: { view: 'secondary' }},
                content: item
              }
            ]
      }});

      var minorComponents = minorArray.map(item => {
        return {
            elem: 'item',
            elemMods: { 'space-b': 'm' },
            content: [
              {
                block: 'change-item',
                mix: { block: 'text', mods: { view: 'secondary' }},
                content: item
              }
            ]
      }});

      var patchComponents = patchArray.map(item => {
        return {
            elem: 'item',
            elemMods: { 'space-b': 'm' },
            content: [
              {
                block: 'change-item',
                mix: { block: 'text', mods: { view: 'secondary' }},
                content: item
              }
            ]
      }});

      return {
          block: 'tpl-grid',
          mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full' },
          mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
=======
=======
>>>>>>> 75c6df0... Revert "Changelog improved"
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

<<<<<<< HEAD
=======
>>>>>>> 36b0069... Changelog improved
=======
>>>>>>> 07c4803... Revert "Removes changelog"
=======
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
>>>>>>> 75c6df0... Revert "Changelog improved"
block('change-version')(
  content()(function(n, ctx) {
      return {
        // {
          block: 'tpl-grid',
          mods: { columns: '12', 'col-gap': 'two-thirds' },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          mix: { block: 'decorator', mods: {'indent-b': 'xxxxxl'}},
>>>>>>> ac7b338... Changelog files added
=======
          mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
>>>>>>> 36b0069... Changelog improved
=======
          mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
>>>>>>> 07c4803... Revert "Removes changelog"
=======
          mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
          mix: { block: 'decorator', mods: {'indent-b': 'xxxxxl'}},
>>>>>>> 75c6df0... Revert "Changelog improved"
          content: [
            // левая колонка
            {
              elem: 'fraction',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              // elemMods: { col: '5' },
              mix: { block: 'decorator', mods: { 'space-r': 'xl' }},
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: { size: 'xxxxl', weight: 'bold', view: 'primary' }},
                  tag: 'a',
                  attrs: {
                    href: ctx.versionLink,
                    id: ctx.versionId,
                    style: 'text-decoration: none;'
                  },
=======
              elemMods: {col: '5'},
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: {size: 'xxxxl', weight: 'bold' }},
>>>>>>> ac7b338... Changelog files added
=======
=======
>>>>>>> 07c4803... Revert "Removes changelog"
=======
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
              elemMods: { col: '5' },
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: { size: 'xxxl', weight: 'bold', view: 'primary' }},
                  // attrs: { 'href':'#${this.ctx.number}' },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 36b0069... Changelog improved
=======
>>>>>>> 07c4803... Revert "Removes changelog"
=======
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
              elemMods: {col: '5'},
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: {size: 'xxxxl', weight: 'bold' }},
>>>>>>> 75c6df0... Revert "Changelog improved"
                  content: this.ctx.number
                },
                {
                  block: 'version-description',
                  mix: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    { block: 'text', mods: { size: 'l', view: 'secondary' }},
                    { block: 'decorator', mods: { 'space-t': 'm' }},
=======
                    { block: 'text', mods: {size: 'l'}},
                    { block:'decorator', mods:{'space-t': 'm'}},
>>>>>>> ac7b338... Changelog files added
=======
                    { block: 'text', mods: { size: 'l', view: 'secondary' }},
                    { block: 'decorator', mods: { 'space-t': 'm' }},
>>>>>>> 36b0069... Changelog improved
=======
                    { block: 'text', mods: { size: 'l', view: 'secondary' }},
                    { block: 'decorator', mods: { 'space-t': 'm' }},
>>>>>>> 07c4803... Revert "Removes changelog"
=======
                    { block: 'text', mods: { size: 'l', view: 'secondary' }},
                    { block: 'decorator', mods: { 'space-t': 'm' }},
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
                    { block: 'text', mods: {size: 'l'}},
                    { block:'decorator', mods:{'space-t': 'm'}},
>>>>>>> 75c6df0... Revert "Changelog improved"
                  ],
                  content: this.ctx.description
                },
                {
                  block: 'version-date',
                  mix: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    { block: 'text', mods: { size: 'm', view: 'ghost' }},
                    { block: 'decorator', mods: { 'space-t': 's' }},
=======
                    { block: 'text', mods: {size: 'm', view: 'secondary'}},
                    { block: 'decorator', mods:{'space-t': 'xxs'}},
>>>>>>> ac7b338... Changelog files added
=======
                    { block: 'text', mods: { size: 'm', view: 'ghost' }},
                    { block: 'decorator', mods: { 'space-t': 's' }},
>>>>>>> 36b0069... Changelog improved
=======
                    { block: 'text', mods: { size: 'm', view: 'ghost' }},
                    { block: 'decorator', mods: { 'space-t': 's' }},
>>>>>>> 07c4803... Revert "Removes changelog"
=======
                    { block: 'text', mods: { size: 'm', view: 'ghost' }},
                    { block: 'decorator', mods: { 'space-t': 's' }},
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
                    { block: 'text', mods: {size: 'm', view: 'secondary'}},
                    { block: 'decorator', mods:{'space-t': 'xxs'}},
>>>>>>> 75c6df0... Revert "Changelog improved"
                  ],
                  content: this.ctx.date
                },
              ]
            },
            // правая колонка
            {
              elem: 'fraction',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              mix: { block: 'decorator', mods: { 'space-l': 'xs' }},
              content: [
                {
                  block: 'changes-description',
                  mix: { block: 'decorator', mods: { /*'indent-l': 'xxl',*/ 'indent-t': 'l' }},
                  content: [
                    // мажоры: Важные изменения
                    {
                      elem: 'major-changes',
                      mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary' },
                          mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                          content: this.ctx.major
                        },
                        {
                          block: 'pt-list',
                          content: [
                            majorComponents
                          ]
                        }
                      ]
                    },
                    // миноры: Изменения
                    {
                      elem: 'minor',
                      mix: { block:'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary' },
                          mix: [
                            { block: 'decorator', mods: { 'indent-b': 'm' }},
                          ],
                          content: this.ctx.minor
                        },
                        {
                          block: 'pt-list',
                          content: [
                            minorComponents
                          ]
                        }
                      ]
                    },
                    // патчи: Багфиксы
                    {
                      elem: 'patch',
                      mix: { block:'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary' },
                          mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                          content: this.ctx.patch
                        },
                        {
                          block: 'pt-list',
                          content: [
                            patchComponents
                          ]
                        }
                      ]
                    },
=======
=======
>>>>>>> 07c4803... Revert "Removes changelog"
=======
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
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
                            elem: 'item',
                            elemMods: { 'space-a': 'xl' },
                            content: this.ctx.major1
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-a': 'xl' },
                            content: this.ctx.major2
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-a': 'xl' },
                            content: this.ctx.major3
                        }
                      ]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    }
>>>>>>> ac7b338... Changelog files added
=======
                    },
>>>>>>> 36b0069... Changelog improved
=======
                    },
>>>>>>> 07c4803... Revert "Removes changelog"
=======
                    },
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
                    }
>>>>>>> 75c6df0... Revert "Changelog improved"
                  ]
                }
              ]
            },
          ]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // }
>>>>>>> ac7b338... Changelog files added
=======
>>>>>>> 36b0069... Changelog improved
=======
>>>>>>> 07c4803... Revert "Removes changelog"
=======
>>>>>>> 5e3bd4c... Revert "Revert "Revert "Removes changelog"""
=======
        // }
>>>>>>> 75c6df0... Revert "Changelog improved"
      }
  }),
);
