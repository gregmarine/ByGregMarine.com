import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was praying...",
  description: "Bible Resources by Greg Marine",
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
      { text: 'Home', link: '/' },
      { text: 'Art', link: 'https://art.bygregmarine.com', target: '_self' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Read Me',
            link: '/read-me'
          },
          {
            text: 'Reflection',
            items: [
              {
                text: '2024',
                collapsed: true,
                items: [
                  {
                    text: 'January',
                    collapsed: true,
                    items: [
                      {
                        text: 'New Year, New Blog',
                        link: '/2024/01/05_new-year-new-blog'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/bygregmarine' },
      { icon: 'instagram', link: 'https://www.instagram.com/bygregmarine/' },
      { icon: 'facebook', link: 'https://www.facebook.com/bygregmarine' },
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/tree/main/Bible' }
    ]
  }
})
