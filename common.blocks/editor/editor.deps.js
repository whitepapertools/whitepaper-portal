([
    {
        shouldDeps: [
            { block: 'btn-minus' },

            { block: 'btn-plus' },

            { block: 'control', elem: 'color', mods: { size: 'm', view: 'primary' } },
            { block: 'control', mods: { type: ['align', 'palette', 'text-style', 'view', 'weight'], active: true } },

            { block: 'decorator', mods: { 'indent-b': ['l', 'm', 's', 'xl', 'xs'], 'indent-h': 'xs', 'indent-l': ['s', 'xs'], 'indent-r': 'xs', 'indent-t': ['m', 'xl', 'xs', 'xxxxl'], 'space-a': 'xl', 'space-h': ['l', 'xxxl'], 'space-v': ['xl', 'xxxxl'], 'space-t': 'l' } },

            { block: 'editor', elem: 'button', mods: { type: ['favourites', 'play'] } },
            { block: 'editor', elem: 'editable-text' },
            { block: 'editor', elem: 'grid-settings' },
            { block: 'editor', elem: 'interface' },
            { block: 'editor', elem: 'left-section' },
            { block: 'editor', elem: 'local-settings' },
            { block: 'editor', elem: 'space-settings' },
            { block: 'editor', elem: 'text-settings' },

            { block: 'icon', mods: { name: ['align-center', 'align-left', 'align-right'], size: 's', view: 'primary' } },

            { block: 'img' },

            { block: 'plus-minus' },

            { block: 'pt-card', elem: 'content' },

            { block: 'pt-list' },
            { block: 'pt-list', elem: 'item', mods: { 'indent-t': ['m', 'xxxl'] } },

            { block: 'pt-table' },
            { block: 'pt-table', elem: 'col', mods: { width: ['10', '15', '55'], align: 'right' } },
            { block: 'pt-table', elem: 'row' },

            { block: 'text', mods: { size: ['s', 'm', 'l', 'xl', 'xs', 'xxl', 'xxxl', 'xxxxl'], view: ['primary', 'secondary', 'ghost', 'brand'], align: ['left', 'center', 'right'], weight: ['bold', 'semibold', 'regular'], display: 'inline-block' } },

            { block: 'text-size' },
            { block: 'text-size', elem: 'minus' },
            { block: 'text-size', elem: 'name' },
            { block: 'text-size', elem: 'number' },
            { block: 'text-size', elem: 'plus' },

            { block: 'theme', mods: { color: ['portal-5', 'portal-4', 'portal-3', 'portal-2', 'whitepaper-default', 'whitepaper-portal-inverse'], font: ['helvetica', 'nitti', 'plex', 'times'], gap: 'editor-default', size: 'editor-default', space: 'editor-default' } },

            { block: 'tpl-grid', elem: 'fraction', mods: { col: ['10', '12', '2', '3', '4', '6'] } },
            { block: 'tpl-grid', mods: { 's-ratio': ['1-1', '1-1-1-1'], 'm-ratio': ['1-1-1', '1-1-1-1-1-1'], 'col-gap': ['full', 'third'], columns: ['10', '12'] } },
            { block: 'tpl-layout', elem: 'section' },
            { block: 'tpl-layout', mods: { structure: '20-80' } },
        ]
    }
])
