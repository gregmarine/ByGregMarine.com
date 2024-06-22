import { defineConfig } from 'vitepress';
import markdownItFootnote from 'markdown-it-footnote';
import markdownItSup from 'markdown-it-sup';

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
                    text: 'Genesis',
                    collapsed: true,
                    items: [
                      {
                        text: 'Introduction',
                        link: '/bibles/lightscape/genesis/00'
                      },
                      {
                        text: '1',
                        link: '/bibles/lightscape/genesis/01'
                      },
                      {
                        text: '2',
                        link: '/bibles/lightscape/genesis/02'
                      },
                      {
                        text: '3',
                        link: '/bibles/lightscape/genesis/03'
                      }
                    ]
                  },
                  {
                    text: 'Proverbs',
                    collapsed: true,
                    items: [
                      {
                        text: '30',
                        link: '/bibles/lightscape/proverbs/30'
                      },
                      {
                        text: '31',
                        link: '/bibles/lightscape/proverbs/31'
                      }
                    ]
                  },
                  {
                    text: 'Ezekiel',
                    collapsed: true,
                    items: [
                      {
                        text: '10',
                        link: '/bibles/lightscape/ezekiel/10'
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
                        collapsed: true,
                        items: [
                          {
                            text: 'Genesis 1',
                            link: '/bibles/lightscape/genesis/01'
                          },
                          {
                            text: 'Genesis 2',
                            link: '/bibles/lightscape/genesis/02'
                          },
                          {
                            text: 'Genesis 3',
                            link: '/bibles/lightscape/genesis/03'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    text: 'June',
                    collapsed: true,
                    items: [
                      {
                        text: '21',
                        collapsed: true,
                        items: [
                          {
                            text: 'Proverbs 30',
                            link: '/bibles/lightscape/proverbs/30'
                          },
                          {
                            text: 'Proverbs 31',
                            link: '/bibles/lightscape/proverbs/31'
                          }
                        ]
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
      md.use(markdownItFootnote);
      md.use(markdownItSup);
    }
  }
})
