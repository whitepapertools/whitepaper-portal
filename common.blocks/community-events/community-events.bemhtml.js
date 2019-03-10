block('community-events')(
  content()(function(n, ctx) {
      return {
        elem: 'wrapper',
        mix: { block: 'decorator', mods: { 'space-v':'xxxl', 'space-h':'xxl' }},
        content: [
          {
            elem: 'heading',
            // attrs: { style: 'display: flex; align-items:center;' },
            content: [
              {
                block: 'avatar',
                // attrs: { style: 'z-index: 9; height:60px' },
                content: [
                  {
                    elem: 'photo',
                    elemMods: { size: 'm' },
                    tag: 'a',
                    attrs: {
                      // href: 'http://whitepaper.tools',
                      href: ctx.photoLink,
                      style: 'display: inline-block;',
                    },
                    content: [
                      {
                        block: 'image',
                        url: ctx.photoPath,
                        // url: '/assets/team/ksusha.jpg',
                        width: 60
                      }
                    ]
                  },
                ]
              },
              {
                elem: 'conf-logo',
                // attrs: { style: 'margin-left: -5px; width: 40px; height: 40px;' },
                content: [
                  {
                    block: 'brand-logo',
                    // attrs: { style: 'margin-left: -5px;' },
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
                    // attrs: { style: 'line-height: var(--line-height-typo-xs)' },
                    mix: { block: 'text', mods: { size: 's', view: 'primary' }},
                    content: ctx.confName
                  },
                  {
                    elem: 'conf-date',
                    // attrs: { style: 'line-height: var(--line-height-typo-xs)' },
                    mix: { block: 'text', mods: { size: 's', view: 'secondary' }},
                    content: ctx.confDate
                  },
                  {
                    elem: 'conf-location',
                    // attrs: { style: 'line-height: var(--line-height-typo-xs)' },
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
