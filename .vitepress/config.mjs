import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/Jokes-on-the-Internet/',
    title: '互联网典中典收录',
    description: '',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '典中典', link: '/jokes' }
        ],
        sidebar: [
            {
                text: '典中典',
                items: [
                    { text: '赛博文盲', link: '/jokes/cyber-illiteracy.md' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vivien8261/Jokes-on-the-Internet' }
        ]
    }
})
