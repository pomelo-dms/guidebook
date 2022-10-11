export default {
    title: 'Pomelo',
    description: 'Just playing around.',
    base: '/guidebook/',
    head: [],

    lastUpdated: true,

    markdown: {
        lineNumber: true,
        toc: {level: [2,3]}
    },

    themeConfig: {
        footer:
            {
                message: 'Released under the MIT License.',
                copyright: `Copyright © 2022-${new Date().getFullYear()} 林深时觉寒`
            }
    }
}