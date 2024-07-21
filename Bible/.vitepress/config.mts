import { defineConfig } from 'vitepress';
import { footnote } from '@mdit/plugin-footnote';
import { sup } from '@mdit/plugin-sup';

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
            text: 'Bibles',
            collapsed: true,
            items: [
              {
                text: 'Lightscape',
                collapsed: true,
                items: [
                  {
                    text: 'Old Testament',
                    collapsed: true,
                    items: [
                      {
                        text: 'Genesis',
                        collapsed: true,
                        items: [
                          {
                            text: '1',
                            link: '/bibles/lightscape/genesis/01'
                          },
                          {
                            text: '2',
                            link: '/bibles/lightscape/genesis/02'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    text: 'New Testament',
                    collapsed: true,
                    items: [
                      {
                        text: 'John',
                        collapsed: true,
                        items: [
                          {
                            text: '1',
                            link: '/bibles/lightscape/john/01'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                text: 'Unnamed',
                collapsed: true,
                items: [
                  {
                    text: 'John',
                    collapsed: true,
                    items: [
                      {
                        text: 'John 1',
                        link: '/bible/john/01'
                      },
                      {
                        text: 'John 2',
                        link: '/bible/john/02'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Reading Plans',
            collapsed: true,
            items: [
              {
                text: 'Bible in a Year',
                collapsed: true,
                items: [
                  {
                    text: 'January',
                    collapsed: true,
                    items: [
                      {
                        text: '1',
                        link: '/plans/bible-in-a-year/01/01'
                      },
                      {
                        text: '2',
                        link: '/plans/bible-in-a-year/01/02'
                      }
                    ]
                  },
                  {
                    text: 'June',
                    collapsed: true,
                    items: [
                      {
                        text: '21',
                        link: '/plans/bible-in-a-year/06/21'
                      },
                      {
                        text: '22',
                        link: '/plans/bible-in-a-year/06/22'
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
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(footnote);
      md.use(sup);
    }
  }
})
