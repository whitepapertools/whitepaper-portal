module.exports = {
    block: 'page',
    title: 'Редактор',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'editor.min.css' },
        { elem: 'css', url: 'https://whitepaper.tools/cdn/whitepaper-1.0.0.min.css' },
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'editor.js' }],
    mix: [
        {
            block: 'theme',
            mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'nitti' }
        },
        {
            block: 'component',
            mods: { whitepaper: 'default' }
        }
    ],
    content: [
    {
        block: 'tpl-layout',
        mix: { block: 'decorator', mods: { 'space-v': 'xxxxxl' } },
        content: [
        {
            elem: 'content',
            content: {
                elem: 'container',
                elemMods: { align: 'center', size: 'm' },
                content: [
                {
                    block: 'editor',
                    content: [
                    {
                        elem: 'interface',
                        mix: { block: 'theme', mods: { gap: 'editor-default', color: 'whitepaper-portal-inverse', size: 'editor-default', space: 'editor-default', font: 'nitti' } },
                        content: [
                        {
                            block: 'tpl-layout',
                            mods: { structure: '20-80' },
                            content: [
                            {
                                elem: 'section',
                                mix: [{ block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'xl' } },
                                      { block: 'editor', elem: 'left-section' },
                                      { block: 'pt-list' }],
                                content: [
                                {
                                    block: 'pt-list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'xxxl' },
                                    content: [
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-title' },
                                            content: 'Browse Music'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                       {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Discover'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Genres'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Top Charts'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Collabs'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Free Music'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Stations'
                                        }]
                                    }]
                                },
                                {
                                    block: 'pt-list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'xxxl' },
                                    content: [
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-title' },
                                            content: 'Your Music'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Favourites'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'History'
                                        }]
                                    }]
                                },
                                {
                                    block: 'pt-list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'xxxl' },
                                    content: [
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-title' },
                                            content: 'Your Playlists'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Public Playlist'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'Purchased'
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: { 'indent-t': 'm' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'left-list-item' },
                                            content: 'My First Playlist'
                                        }]
                                    }]
                                }]
                            },
                            {
                                elem: 'section',
                                mix: [{ block: 'decorator', mods: { 'space-h': 'xxxl', 'space-v': 'xxxxl' } }],
                                content: [
                                {
                                    block: 'text',
                                    mods: { size: 'xxxxl', view: 'primary', align: 'left', weight: 'regular' },
                                    mix: { block: 'editor', elem: 'editable-text' },
                                    attrs: { 'data-name': 'main-title' },
                                    content: 'Music'
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'xl', view: 'secondary', align: 'left', weight: 'regular' },
                                    mix: { block: 'editor', elem: 'editable-text' },
                                    attrs: { 'data-name': 'main-subtitle' },
                                    content: 'Best singles of month'
                                },
                                {
                                    block: 'decorator',
                                    mods: { 'indent-t': 'xl' },
                                    content: [
                                    {
                                        block: 'editor',
                                        elem: 'button',
                                        elemMods: { type: 'play' },
                                        mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                        content: 'Play'
                                    },
                                    {
                                        block: 'editor',
                                        elem: 'button',
                                        elemMods: { type: 'favourites' },
                                        content: '★'
                                    }]
                                },
                                {
                                    block: 'decorator',
                                    mods: { 'indent-t': 'xxxxl', 'indent-b': 's' },
                                    content: [
                                    {
                                        block: 'text',
                                        mods: { size: 'xl', view: 'primary', align: 'left', weight: 'regular' },
                                        mix: { block: 'editor', elem: 'editable-text' },
                                        attrs: { 'data-name': 'h2' },
                                        content: 'What hot this weekend'
                                    }]
                                },
                                {
                                    block: 'tpl-grid',
                                    mods: { 's-ratio': '1-1-1-1', 'm-ratio': '1-1-1-1-1-1', 'col-gap': 'third' },
                                    content: [
                                    {
                                        block: 'pt-card',
                                        content: [
                                        {
                                            elem: 'content',
                                            content: [
                                            {
                                                block: 'img',
                                                attrs: { style: 'background-color: #00C2FF' },
                                                mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                content: [
                                                {
                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M49.5 31l20.5 35h-41z"/></svg>`
                                                }]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                mix: { block: 'editor', elem: 'editable-text' },
                                                attrs: { 'data-name': 'card-name' },
                                                content: 'What hot this weekend'
                                            }]
                                        }]
                                    },
                                    {
                                        block: 'pt-card',
                                        content: [
                                        {
                                            elem: 'content',
                                            content: [
                                            {
                                                block: 'img',
                                                attrs: { style: 'background-color: #2F80ED;' },
                                                mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                content: [
                                                {
                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M50 10l4.84 25.486 19.263-17.842-11.431 23.396 26.328-3.382-23.337 12.369 23.337 12.369-26.328-3.383 11.431 23.396-19.263-17.842-4.84 25.486-4.84-25.486-19.263 17.842 11.431-23.396-26.328 3.383 23.337-12.369-23.337-12.369 26.328 3.382-11.431-23.396 19.263 17.842z"/></svg>`
                                                }]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                mix: { block: 'editor', elem: 'editable-text' },
                                                attrs: { 'data-name': 'card-name' },
                                                content: 'What hot this weekend'
                                            }]
                                        }]
                                    },
                                    {
                                        block: 'pt-card',
                                        content: [
                                        {
                                            elem: 'content',
                                            content: [
                                            {
                                                block: 'img',
                                                attrs: { style: 'background-color: #00C2FF;' },
                                                mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                content: [
                                                {
                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M50.5 28l6.077 16.423 16.423 6.077-16.423 6.077-6.077 16.423-6.077-16.423-16.423-6.077 16.423-6.077z"/></svg>`
                                                }]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                mix: { block: 'editor', elem: 'editable-text' },
                                                attrs: { 'data-name': 'card-name' },
                                                content: 'What hot this weekend'
                                            }]
                                        }]
                                    },
                                    {
                                        block: 'pt-card',
                                        content: [
                                        {
                                            elem: 'content',
                                            content: [
                                            {
                                                block: 'img',
                                                attrs: { style: 'background-color: #2F80ED;' },
                                                mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                content: [
                                                {
                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M50.472 7l1.665 27.123 7.011-26.282-3.745 26.922 12.088-24.432-9.011 25.686 16.7-21.642-13.931 23.462 20.67-18.021-18.316 20.337 23.847-13.707-21.996 16.431 26.106-8.866-24.832 11.893 27.362-3.685-26.713 6.898 27.567 1.638-27.567 1.638 26.713 6.898-27.362-3.685 24.832 11.893-26.106-8.866 21.996 16.431-23.847-13.707 18.316 20.337-20.67-18.021 13.931 23.462-16.7-21.642 9.011 25.686-12.088-24.432 3.745 26.922-7.011-26.283-1.665 27.123-1.665-27.123-7.011 26.283 3.745-26.922-12.088 24.432 9.011-25.686-16.7 21.642 13.931-23.462-20.67 18.021 18.316-20.337-23.846 13.707 21.996-16.431-26.106 8.866 24.832-11.893-27.362 3.685 26.713-6.898-27.567-1.638 27.567-1.638-26.713-6.898 27.362 3.685-24.832-11.893 26.106 8.866-21.996-16.431 23.846 13.707-18.316-20.337 20.67 18.021-13.931-23.462 16.7 21.642-9.011-25.686 12.088 24.432-3.745-26.922 7.011 26.282z"/></svg>`
                                                }]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                mix: { block: 'editor', elem: 'editable-text' },
                                                attrs: { 'data-name': 'card-name' },
                                                content: 'Remixes'
                                            }]
                                        }]
                                    }]
                                },
                                {
                                    block: 'tpl-grid',
                                    mods: { 's-ratio': '1-1', 'm-ratio': '1-1-1', 'col-gap': 'full' },
                                    mix: [{ block: 'decorator', mods: { 'indent-t': 'm' } }],
                                    content: [
                                    {
                                        elem: 'fraction',
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'xl', view: 'primary', align: 'left', weight: 'regular' },
                                            mix: [{ block: 'decorator', mods: { 'indent-b': 'm' } },
                                                  { block: 'editor', elem: 'editable-text' }],
                                            attrs: { 'data-name': 'h2' },
                                            content: 'Latest relises'
                                        },
                                        {
                                            block: 'pt-table',
                                            content: [
                                            {
                                                elem: 'row',
                                                content: [
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15' },
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: #2F80ED;' },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M50.5 28l6.077 16.423 16.423 6.077-16.423 6.077-6.077 16.423-6.077-16.423-16.423-6.077 16.423-6.077z"/></svg>`
                                                        }]
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '55' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: [{ block: 'editor', elem: 'editable-text' },
                                                              { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: 'Worry Bout Us'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '6:20'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '10', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '★'
                                                    }]
                                                }]
                                            },
                                            {
                                                elem: 'row',
                                                content: [
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15' },
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: #00C2FF' },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M49.5 31l20.5 35h-41z"/></svg>`
                                                        }]
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '55' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: [{ block: 'editor', elem: 'editable-text' },
                                                              { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: 'Worry Bout Us'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '6:20'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '10', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '★'
                                                    }]
                                                }]
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'xl', view: 'primary', align: 'left', weight: 'regular' },
                                            mix: [{ block: 'decorator', mods: { 'indent-b': 'm' } },
                                                  { block: 'editor', elem: 'editable-text' }],
                                            attrs: { 'data-name': 'h2' },
                                            content: 'Top songs'
                                        },
                                        {
                                            block: 'pt-table',
                                            content: [
                                            {
                                                elem: 'row',
                                                content: [
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15' },
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: #00C2FF' },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M49.5 31l20.5 35h-41z"/></svg>`
                                                        }]
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '55' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: [{ block: 'editor', elem: 'editable-text' },
                                                              { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: 'Worry Bout Us'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '6:20'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '10', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '★'
                                                    }]
                                                }]
                                            },
                                            {
                                                elem: 'row',
                                                content: [
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15' },
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: #2F80ED;' },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#1B1B1B" d="M50 10l4.84 25.486 19.263-17.842-11.431 23.396 26.328-3.382-23.337 12.369 23.337 12.369-26.328-3.383 11.431 23.396-19.263-17.842-4.84 25.486-4.84-25.486-19.263 17.842 11.431-23.396-26.328 3.383 23.337-12.369-23.337-12.369 26.328 3.382-11.431-23.396 19.263 17.842z"/></svg>`
                                                        }]
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '55' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: [{ block: 'editor', elem: 'editable-text' },
                                                              { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: 'Worry Bout Us'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '15', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '6:20'
                                                    }]
                                                },
                                                {
                                                    elem: 'col',
                                                    elemMods: { width: '10', align: 'right' },
                                                    content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'table-text' },
                                                        content: '★'
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    },
                    {
                        elem: 'local-settings',
                        mix: [{ block: 'theme', mods: { color: 'whitepaper-default' } },
                              { block: 'decorator', mods: { 'space-t': 'l', 'space-h': 'l', 'space-b': 'l' } }],
                        content: [
                        {
                            elem: 'text-settings',
                            mix: { block: 'tpl-grid', mods: { columns: '12' } },
                            content: [
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '12' },
                                mix: [{ block: 'decorator', mods: { 'indent-b': 'xs' } },
                                      { block: 'text-size' }],
                                content: [
                                {
                                    block: 'plus-minus',
                                    content: [
                                    {
                                        block: 'btn-minus',
                                        mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                              { block: 'text-size', elem: 'minus' }],
                                        content: '-'
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 'xxxxl', view: 'primary', display: 'inline-block' },
                                        mix: { block: 'text-size', elem: 'number' },
                                        content: '24'
                                    },
                                    {
                                        block: 'btn-plus',
                                        mix: [{ block: 'decorator', mods: { 'indent-l': 'xs' } },
                                              { block: 'text-size', elem: 'plus' }],
                                        content: '+'
                                    }]
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'ghost', align: 'center' },
                                    mix: { block: 'text-size', elem: 'name' },
                                    content: 'xxxl'
                                }]
                            },

                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'weight', active: true },
                                    attrs: { weight: 'text_weight_regular' },
                                    content: 'Aa'
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'weight' },
                                    mix: [{ block: 'text', mods: { weight: 'semibold' } }],
                                    attrs: { weight: 'text_weight_semibold' },
                                    content: 'Aa'
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'weight' },
                                    mix: [{ block: 'text', mods: { weight: 'bold' } }],
                                    attrs: { weight: 'text_weight_bold' },
                                    content: 'Aа'
                                }]
                            },

                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'align', active: true },
                                    attrs: { align: 'text_align_left' },
                                    content: {
                                        block: 'icon',
                                        mods: { name: 'align-left', size: 's', view: 'primary' }
                                    }
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'align' },
                                    attrs: { align: 'text_align_center' },
                                    content: {
                                        block: 'icon',
                                        mods: { name: 'align-center', size: 's', view: 'primary' }
                                    }
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'align' },
                                    attrs: { align: 'text_align_right' },
                                    content: {
                                        block: 'icon',
                                        mods: { name: 'align-right', size: 's', view: 'primary' }
                                    }
                                }]
                            },

                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '3' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'view' },
                                    attrs: { view: 'text_view_primary' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                    content: {
                                        elem: 'color',
                                        elemMods: { size: 'm' },
                                        attrs: { style: 'background-color: var(--color-typo-primary);' }
                                    }
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '3' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'view' },
                                    attrs: { view: 'text_view_secondary' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                    content: {
                                        elem: 'color',
                                        elemMods: { size: 'm' },
                                        attrs: { style: 'background-color: var(--color-typo-secondary);' }
                                    }
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '3' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'view' },
                                    attrs: { view: 'text_view_ghost' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                    content: {
                                        elem: 'color',
                                        elemMods: { size: 'm' },
                                        attrs: { style: 'background-color: var(--color-typo-ghost);' }
                                    }
                                }]
                            },
                            {
                                block: 'tpl-grid',
                                elem: 'fraction',
                                elemMods: { col: '3' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'view', active: true },
                                    attrs: { view: 'text_view_brand' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                    content: {
                                        elem: 'color',
                                        elemMods: { size: 'm' },
                                        attrs: { style: 'background-color: var(--color-typo-brand);' }
                                    }
                                }]
                            }]
                        }]
                    },
                    {
                        elem: 'global-settings',
                        mix: { block: 'decorator', mods: { 'space-a': 'xl' } },
                        content: [
                        {
                            block: 'tpl-grid',
                            mods: { columns: '10' },
                            content: [
                            {
                                elem: 'fraction',
                                elemMods: { col: '6' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                                content: [
                                {
                                    block: 'plus-minus',
                                    mix: { block: 'editor', elem: 'grid-settings' },
                                    content: [
                                    {
                                        block: 'btn-minus',
                                        mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                        content: '-'
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 'xxxxl', view: 'primary', display: 'inline-block' },
                                        content: '2'
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 'xxxxl', view: 'secondary', display: 'inline-block' },
                                        mix: { block: 'decorator', mods: { 'indent-h': 'xs' } },
                                        content: '∥'
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 'xxxxl', view: 'primary', display: 'inline-block' },
                                        content: '8'
                                    },
                                    {
                                        block: 'btn-plus',
                                        mix: { block: 'decorator', mods: { 'indent-l': 'xs' } },
                                        content: '+'
                                    }]
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'ghost', align: 'center' },
                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                    content: 'grid ratio'
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '4' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                                content: [
                                {
                                    block: 'plus-minus',
                                    mix: { block: 'editor', elem: 'space-settings' },
                                    content: [
                                    {
                                        block: 'btn-minus',
                                        mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                        content: '-'
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 'xxxxl', view: 'primary', display: 'inline-block' },
                                        content: '4'
                                    },
                                    {
                                        block: 'btn-plus',
                                        mix: { block: 'decorator', mods: { 'indent-l': 'xs' } },
                                        content: '+'
                                    }]
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'ghost', align: 'center' },
                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                    content: 'space module'
                                }]
                            },

                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'palette', active: true },
                                    attrs: { palette: 'whitepaper-portal-inverse' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                    content: [
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    }]
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'palette' },
                                    attrs: { palette: 'whitepaper-portal-2' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-2' } },
                                    content: [
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    }]
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'palette' },
                                    attrs: { palette: 'whitepaper-portal-3' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-3' } },
                                    content: [
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    }]
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'palette' },
                                    attrs: { palette: 'whitepaper-portal-4' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-4' } },
                                    content: [
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    }]
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'palette' },
                                    attrs: { palette: 'whitepaper-portal-5' },
                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-5' } },
                                    content: [
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    },
                                    {
                                        elem: 'color',
                                        elemMods: { size: 's' }
                                    }]
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '10' },
                                mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                                content: [
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'ghost', align: 'center' },
                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                    content: 'color scheme'
                                }]
                            },

                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'text-style', active: true },
                                    attrs: { 'text-style': 'theme_font_nitti' },
                                    mix: [{ block: 'text' },
                                          { block: 'theme', mods: { font: 'nitti' } }],
                                    content: 'Aa'
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'text-style' },
                                    attrs: { 'text-style': 'theme_font_plex' },
                                    mix: [{ block: 'text' },
                                          { block: 'theme', mods: { font: 'plex' } }],
                                    content: 'Aa'
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'text-style' },
                                    attrs: { 'text-style': 'theme_font_plex' },
                                    mix: [{ block: 'text' },
                                          { block: 'theme', mods: { font: 'plex' } }],
                                    content: 'Aa'
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'text-style' },
                                    attrs: { 'text-style': 'theme_font_times' },
                                    mix: [{ block: 'text' },
                                          { block: 'theme', mods: { font: 'times' } }],
                                    content: 'Aa'
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '2' },
                                content: [
                                {
                                    block: 'control',
                                    mods: { type: 'text-style' },
                                    attrs: { 'text-style': 'theme_font_helvetica' },
                                    mix: [{ block: 'text' },
                                          { block: 'theme', mods: { font: 'helvetica' } }],
                                    content: 'Aa'
                                }]
                            },
                            {
                                elem: 'fraction',
                                elemMods: { col: '10' },
                                content: [
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'ghost', align: 'center' },
                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                    content: 'typography styles'
                                }]
                            }]
                        }]
                    }]
                }]
            }
        }]
    }]
};
