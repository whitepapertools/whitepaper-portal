([
    {
        shouldDeps: [
            { block: 'decorator', mods: {
                                            'indent-a': ['auto', 'l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'indent-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'indent-h': ['auto', 'l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'indent-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'indent-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'indent-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'indent-v': ['auto', 'l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
                                            'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl', 'xxxxxl', 'xxxxxxl']
                                        }
            },



            { block: 'icon', mods: {
                                        round: ['alert', 'brand', 'default', 'disable', 'ghost', 'primary', 'secondary', 'success', 'warning'],
                                        size: ['m', 's'],
                                        view: ['alert', 'brand', 'disable', 'ghost', 'primary', 'secondary', 'success', 'warning']
                                    }
            },



            { block: 'pt-card', mods: {
                                        border: 'all',
                                        shadow: 'cloud',
                                        view: 'default'
                                    }
            },
            { block: 'pt-card', elem: 'content', mods: {
                                                        distribute: ['center', 'right'],
                                                        'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-b': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-l': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-r': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-t': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'vertical-align': 'center'
                                                        }
            },
            { block: 'pt-card', elem: 'footer', mods: {
                                                        distribute: ['between', 'center', 'right'],
                                                        'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'vertical-align': ['bottom', 'center', 'top']
                                                        }
            },
            { block: 'pt-card', elem: 'header', mods: {
                                                        distribute: ['between', 'center', 'right'],
                                                        'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl'],
                                                        'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl']
                                                        }
            },
            { block: 'pt-card', elem: 'image', mods: { size: 'cover' }},
            { block: 'pt-card', elem: 'play' },



            { block: 'pt-form', mods: { border: 'all', shadow: 'cloud', view: 'default' }},
            { block: 'pt-form', elem: 'control' },
            { block: 'pt-form', elem: 'event' },
            { block: 'pt-form', elem: 'item', mods: {
                                                        border: ['all', 'bottom', 'top'],
                                                        distribute: ['between', 'default', 'right'],
                                                        'indent-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'vertical-align': ['baseline', 'center', 'default']
                                                    }
            },
            { block: 'pt-form',  elem: 'label', mods: { width: ['default', 'inverse'] } },


            { block: 'pt-icon-plus', mods: { distribute: 'between', 'vertical-align': ['baseline', 'bottom', 'center', 'top'] } },
            { block: 'pt-icon-plus', elem: 'block' },
            { block: 'pt-icon-plus', elem: 'icon', mods: {
                                                            'indent-l': ['l', 'm', 's', 'xs', 'xxs'],
                                                            'indent-r': ['l', 'm', 's', 'xs', 'xxs'],
                                                            offset: 'no'
                                                        }
            },



            { block: 'pt-informer', mods: { border: 'all', view: ['alert', 'default', 'normal', 'success', 'system', 'warning'] } },
            { block: 'pt-informer', elem: 'action', mods: {
                                                            distribute: ['center', 'right'],
                                                            'space-a': ['l', 'm', 's', 'xl', 'xxl'],
                                                            'space-b': ['l', 'm', 's', 'xl', 'xxl'],
                                                            'space-h': ['l', 'm', 's', 'xl', 'xxl'],
                                                            'space-v': ['l', 'm', 's', 'xl', 'xxl']
                                                            }
            },
            { block: 'pt-informer', elem: 'col', mods: { distribute: 'center' } },
            { block: 'pt-informer', elem: 'content', mods: {
                                                            distribute: ['between', 'center', 'default'],
                                                            'space-a': ['l', 'm', 's', 'xl', 'xxl'],
                                                            'space-h': ['l', 'm', 's', 'xl', 'xxl'],
                                                            'space-v': ['l', 'm', 's', 'xl', 'xxl']
                                                            }
            },



            { block: 'pt-list', mods: { border: 'all', view: ['default', 'ghost'] } },
            { block: 'pt-list', elem: 'item', mods: {
                                                        border: ['bottom', 'top'],
                                                        distribute: ['between', 'default'],
                                                        'indent-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'indent-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
                                                        'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'space-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'space-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'space-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'space-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
                                                        'vertical-align': ['baseline', 'center', 'top']
                                                    }
            },



            { block: 'pt-surface', mods: { view: ['soft', 'tone'] } },
            { block: 'pt-surface', elem: 'close', mods: { view: ['desktop', 'mobile'] } },
            { block: 'pt-surface', elem: 'content', mods: {
                                                            size: ['full', 'm', 's', 'xs'],
                                                            'space-a': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            'space-b': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            'space-h': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            'space-l': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            'space-r': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            'space-t': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            'space-v': ['l', 'm', 's', 'xl', 'xxl', 'xxxl', 'xxxxl'],
                                                            view: 'default'
                                                            }
            },
            { block: 'pt-surface', elem: 'window' },



            { block: 'pt-table', mods: {
                                            border: 'all',
                                            'space-a': ['l', 'm', 's', 'xs'],
                                            'space-h': ['l', 'm', 's', 'xs'],
                                            'space-v': ['l', 'm', 's', 'xs'],
                                            stripe: ['even', 'odd'],
                                            view: 'default'
                                        }
            },
            { block: 'pt-table', elem: 'col', mods: {
                                                        align: ['center', 'right'],
                                                        grow: 'evenly',
                                                        width: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                                                    }
            },
            { block: 'pt-table', elem: 'row', mods: {
                                                        border: ['bottom', 'top'],
                                                        status: ['alert', 'default', 'success', 'warning'],
                                                        view: 'head'
                                                    }
            },



            { block: 'social-icon', mods: { hover: 'default', size: 'm', view: ['brand', 'primary'] } },



            { block: 'tag', elem: 'text' },
            { block: 'tag', mods: { size: ['m', 's'], view: ['default', 'disable', 'link'] } },



            { block: 'text', mods: {
                                        align: ['center', 'left', 'right'],
                                        decoration: 'underline',
                                        display: ['block', 'inline-block', 'inline'],
                                        size: ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl', 'xxxxl'],
                                        spacing: ['m', 's', 'xs'],
                                        style: 'italic',
                                        transform: 'uppercase',
                                        type: ['blockquote', 'h1', 'h2', 'h3', 'p'],
                                        view: ['alert', 'brand', 'disable', 'ghost', 'income', 'letter', 'link-minor', 'link', 'primary', 'promo', 'secondary', 'success'],
                                        weight: ['black', 'bold', 'light', 'regular', 'semibold', 'thin'],
                                        width: 'default'
                                    }
            },



            { block: 'theme', mods: {
                                        breakpoint: 'default',
                                        color: ['whitepaper-alert', 'whitepaper-brand', 'whitepaper-default', 'whitepaper-inverse', 'whitepaper-normal', 'whitepaper-success', 'whitepaper-system', 'whitepaper-warning'],
                                        font: ['ibm', 'museo'],
                                        gap: ['large', 'medium', 'small'],
                                        menu: 'default',
                                        size: 'default',
                                        space: 'default'
                                    }
            },



            { block: 'tpl-grid', elem: 'fraction', mods: {
                                                            col: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                                                            row: ['1', '2', '3', '4']
                                                        }
            },
            { block: 'tpl-grid', mods: {
                                            'col-gap': ['full', 'half', 'none', 'third', 'two-thirds'],
                                            columns: ['10', '12'],
                                            ratio: ['1-1-1-1-1-1', '1-1-1-1-1', '1-1-1-1', '1-1-1', '1-1'],
                                            'row-gap': ['full', 'half', 'none', 'third', 'two-thirds'],
                                            'vertical-align': ['center', 'top'],
                                        }
            },



            { block: 'tpl-layout', elem: 'container', mods: { align: 'center', size: [ 'full', 'm', 's', 'xs'] } },
            { block: 'tpl-layout', elem: 'content' },
            { block: 'tpl-layout', elem: 'heading' },
            { block: 'tpl-layout', elem: 'panel' },
            { block: 'tpl-layout', elem: 'section' },
            { block: 'tpl-layout', mods: { structure: ['10-90', '20-60-20', '30-70', '50-50', '70-30', '90-10', 'fold-100', 'fold-25-50-25', 'fold-30-70', 'fold-50-50', 'fold-70-30', 'unfold-100', 'unfold-25-50-25', 'unfold-30-70', 'unfold-50-50', 'unfold-70-30'] } },



            { block: 'vector', mods: { size: 'm' } },
        ]
    }
])
