import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I created something...",
  description: "Art by Greg Marine",
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
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Paintings',
            items: [
              {
                text: '2021 Renaissance',
                collapsed: true,
                items: [
                  {
                    text: 'Only the Beginning',
                    link: '/2021Renaissance/only-the-beginning'
                  },
                  {
                    text: 'Dreams',
                    link: '/2021Renaissance/dreams'
                  },
                  {
                    text: 'Ensō RGB',
                    link: '/2021Renaissance/enso-rgb'
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
