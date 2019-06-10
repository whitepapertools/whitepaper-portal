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
          mix: { block: 'decorator', mods: { 'indent-b': '5xl' }},
          content: [
            // левая колонка
            {
              elem: 'fraction',
              // elemMods: { col: '5' },
              mix: { block: 'decorator', mods: { 'space-r': 'xl' }},
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: { size: '4xl', weight: 'bold', view: 'primary' }},
                  tag: 'a',
                  attrs: {
                    href: ctx.versionLink,
                    id: ctx.versionId,
                    style: 'text-decoration: none;'
                  },
                  content: this.ctx.number
                },
                {
                  block: 'version-description',
                  mix: [
                    { block: 'text', mods: { size: 'l', view: 'secondary' }},
                    { block: 'decorator', mods: { 'space-t': 'm' }},
                  ],
                  content: this.ctx.description
                },
                {
                  block: 'version-date',
                  mix: [
                    { block: 'text', mods: { size: 'm', view: 'ghost' }},
                    { block: 'decorator', mods: { 'space-t': 's' }},
                  ],
                  content: this.ctx.date
                },
              ]
            },
            // правая колонка
            {
              elem: 'fraction',
              mix: { block: 'decorator', mods: { 'space-l': 'xs' }},
              content: [
                {
                  block: 'changes-description',
                  mix: { block: 'decorator', mods: { /*'indent-l': '2xl',*/ 'indent-t': 'l' }},
                  content: [
                    // мажоры: Важные изменения
                    {
                      elem: 'major-changes',
                      mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: '2xl', view: 'primary' },
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
                          mods: { size: '2xl', view: 'primary' },
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
                          mods: { size: '2xl', view: 'primary' },
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
                  ]
                }
              ]
            },
          ]
      }
  }),
);
