import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was writing the other day...",
  description: "Folio by Greg Marine",
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
      { text: 'Blog', link: 'https://blog.bygregmarine.com', target: '_self' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Books',
            items: [
              {
                text: 'Vitamin G',
                collapsed: true,
                items: [
                  {
                    text: 'Introduction',
                    link: '/books/vitamin-g/introduction'
                  },
                  {
                    text: 'Perspective is Everything',
                    link: '/books/vitamin-g/perspective-is-everything'
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
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/tree/main/Blog' }
    ]
  }
})
