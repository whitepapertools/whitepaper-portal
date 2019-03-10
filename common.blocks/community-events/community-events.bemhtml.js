block('community-events')(
  content()(function(n, ctx) {
      return {
        elem: 'wrapper',
        mix: { block: 'decorator', mods: { 'space-v':'xxxl', 'space-h':'xxl' }},
        content: [
          {
            elem: 'heading',
            content: [
              {
                block: 'avatar',
                content: [
                  {
                    elem: 'photo',
                    elemMods: { size: 'm' },
                    tag: 'a',
                    attrs: {
                      href: ctx.photoLink,
                      style: 'display: inline-block;',
                    },
                    content: [
                      {
                        block: 'image',
                        url: ctx.photoPath,
                        width: 60
                      }
                    ]
                  },
                ]
              },
              {
                elem: 'conf-logo',
                content: [
                  {
                    block: 'brand-logo',
                    mods: { name: ctx.confLogo, size: 's' }
                  },
                ]
              },
              {
                elem: 'conf-data',
                mix: { block: 'decorator', mods: { 'indent-l':'m' }},
                content: [
                  {
                    elem: 'conf-name',
                    mix: { block: 'text', mods: { size: 's', view: 'primary' }},
                    content: ctx.confName
                  },
                  {
                    elem: 'conf-date',
                    mix: { block: 'text', mods: { size: 's', view: 'secondary' }},
                    content: ctx.confDate
                  },
                  {
                    elem: 'conf-location',
                    mix: { block: 'text', mods: { size: 's', view: 'secondary' }},
                    content: ctx.confCity
                  },
                ]
              },
            ]
          },
          {
            elem: 'speech-name',
            mix: [
              { block: 'text', mods: { size: 'xl', view: 'primary',  }},
              { block: 'decorator', mods: { 'indent-t': 'l' }}
            ],
            content: ctx.speechName
          },
          {
            elem: 'source',
            tag: 'a',
            attrs: { href: ctx.speechSourceLink },
            content: [
              {
                elem: 'source-text',
                mix: [
                  { block: 'text', mods: { size: 'm', view: 'link', weight: 'light' }},
                  { block: 'decorator', mods: { 'indent-t': 'm' }}
                ],
                content: ctx.speechSourceText
              }
            ]
          },
        ]
      }
  }),
);
