([
	{
		shouldDeps: [

            { block: 'decorator', mods: { 'indent-b': ['m', 'l', '5xl'],
                                          'indent-l': '2xl',
                                          'indent-t': ['xs', 'l'],
                                          'space-b': 'l',
                                          'space-l': 'xs',
                                          'space-r': 'xl',
                                          'space-t': ['s', 'm'] }},

            { block: 'pt-list', mods: { 'space-v': 'xs' }},

            { block: 'text', mods: { size: '2xl', view: 'primary' }},
            { block: 'text', mods: { size: '4xl', weight: 'bold', view: 'primary' }},
            { block: 'text', mods: { size: 'l', view: 'secondary' }},
            { block: 'text', mods: { size: 'm', view: 'ghost' }},
            { block: 'text', mods: { size: 'xl', view: 'primary' }},
            { block: 'text', mods: { view:'secondary' }},

            { block: 'tpl-grid', elem: 'fraction', mods: { col: '5' }},
            { block: 'tpl-grid', elem: 'fraction', mods: { col: '7' }},
            { block: 'tpl-grid', mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full', 'vertical-align': 'top' }},
		]
	}
])
