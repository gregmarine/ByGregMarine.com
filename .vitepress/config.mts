import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was thinking...",
  description: "A website by Greg Marine",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Last updated'
    },

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/bygregmarine' },
      { icon: 'instagram', link: 'https://www.instagram.com/bygregmarine/' },
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/' }
    ]
  }
})
