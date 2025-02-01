import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "by Greg Marine",
  description: "A website about things by Greg Marine",
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
      { text: 'Blog', link: '/blog' },
      { text: 'Photos', link: '/photos' },
      { text: 'Bible', link: '/bible' }
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Bible',
            link: '/bible',
            collapsed: true,
            items: [
              {
                text: 'Prayer',
                link: '/bible/prayer',
                collapsed: true,
                items: [
                  {
                    text: 'Journal',
                    link: '/bible/prayer/journal'
                  }
                ]
              },
              {
                text: 'Prayer Journal',
                link: '/bible/prayer/journal',
                collapsed: true,
                items: [
                  {
                    text: '2025',
                    collapsed: true,
                    items: [
                      {
                        text: '21 Days of Prayer and Fasting',
                        link: '/bible/prayer/journal/2025/01/21-days',
                        collapsed: true,
                        items: [
                          {
                            text: 'Day 1',
                            link: '/bible/prayer/journal/2025/01/05_21-days'
                          },
                          {
                            text: 'Day 2',
                            link: '/bible/prayer/journal/2025/01/06_21-days'
                          },
                          {
                            text: 'Day 3',
                            link: '/bible/prayer/journal/2025/01/07_21-days'
                          },
                          {
                            text: 'Day 4',
                            link: '/bible/prayer/journal/2025/01/08_21-days'
                          },
                          {
                            text: 'Day 5',
                            link: '/bible/prayer/journal/2025/01/09_21-days'
                          },
                          {
                            text: 'Day 6',
                            link: '/bible/prayer/journal/2025/01/10_21-days'
                          },
                          {
                            text: 'Day 7',
                            link: '/bible/prayer/journal/2025/01/11_21-days'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Blog',
            collapsed: true,
            items: [
              {
                text: 'Read Me',
                link: '/blog/read-me'
              },
              {
                text: '2025',
                collapsed: true,
                items: [
                  {
                    text: 'January',
                    collapsed: true,
                    items: [
                      {
                        text: '01',
                        link: '/blog/2025/01/01_happy-new-year'
                      },
                      {
                        text: '02',
                        link: '/blog/2025/01/02_circle-of-life'
                      },
                      {
                        text: '03',
                        link: '/blog/2025/01/03_i-saw-an-eagle'
                      },
                      {
                        text: '04',
                        link: '/blog/2025/01/04_weird-day'
                      },
                      {
                        text: '05',
                        link: '/blog/2025/01/05_dawn'
                      },
                      {
                        text: '06',
                        link: '/blog/2025/01/06_blessings'
                      },
                      {
                        text: '07',
                        link: '/blog/2025/01/07_god-revealed-in-the-journey'
                      },
                      {
                        text: '08',
                        link: '/blog/2025/01/08_gods-will-be-done'
                      },
                      {
                        text: '09',
                        link: '/blog/2025/01/09_lighthouse'
                      },
                      {
                        text: '10',
                        link: '/blog/2025/01/10_faith-dont-fail-me-now'
                      },
                      {
                        text: '11',
                        link: '/blog/2025/01/11_strengthen-me-to-strengthen-others'
                      },
                      {
                        text: '12',
                        link: '/blog/2025/01/12_heart-shaped-potato-chip'
                      },
                      {
                        text: '13',
                        link: '/blog/2025/01/13_please-forgive-me'
                      },
                      {
                        text: '14',
                        link: '/blog/2025/01/14_gregilocks-and-the-3-in-1'
                      },
                      {
                        text: '15',
                        link: '/blog/2025/01/15_half-way-there'
                      },
                      {
                        text: '16',
                        link: '/blog/2025/01/16_sent'
                      },
                      {
                        text: '17',
                        link: '/blog/2025/01/17_title-not-found'
                      },
                      {
                        text: '18',
                        link: '/blog/2025/01/18_because-he-did'
                      },
                      {
                        text: '19',
                        link: '/blog/2025/01/19_today-im-not-ready'
                      },
                      {
                        text: '20',
                        link: '/blog/2025/01/20_on-the-move'
                      },
                      {
                        text: '21',
                        link: '/blog/2025/01/21_young-year-weather-woes-new-bedtime'
                      },
                      {
                        text: '22',
                        link: '/blog/2025/01/22_disoriented-hot-water-stuck-inside'
                      },
                      {
                        text: '23',
                        link: '/blog/2025/01/23_these-shoes-are-tired'
                      },
                      {
                        text: '24',
                        link: '/blog/2025/01/24_one-for-all-all-with-the-one'
                      },
                      {
                        text: '25',
                        link: '/blog/2025/01/25_the-finish-line'
                      },
                      {
                        text: '26',
                        link: '/blog/2025/01/26_blessed-are-the-sundays'
                      },
                      {
                        text: '27',
                        link: '/blog/2025/01/27_gulf-shrimp-dapper-g-peace-out'
                      },
                      {
                        text: '28',
                        link: '/blog/2025/01/28_dapper-makes-me-happier-and-a-celebrity'
                      },
                      {
                        text: '29',
                        link: '/blog/2025/01/29_creative-writing-returns'
                      },
                      {
                        text: '30',
                        link: '/blog/2025/01/30_marineland'
                      },
                      {
                        text: '31',
                        link: '/blog/2025/01/31_goodbye-january'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Photos',
            collapsed: true,
            items: [
              {
                text: 'Photo a Day',
                collapsed: true,
                items: [
                  {
                    text: '2025',
                    collapsed: true,
                    items: [
                      {
                        text: 'January',
                        collapsed: true,
                        items: [
                          {
                            text: '21',
                            link: '/photos/photo-a-day/2025/01/21'
                          },
                          {
                            text: '22',
                            link: '/photos/photo-a-day/2025/01/22'
                          },
                          {
                            text: '23',
                            link: '/photos/photo-a-day/2025/01/23'
                          },
                          {
                            text: '24',
                            link: '/photos/photo-a-day/2025/01/24'
                          },
                          {
                            text: '25',
                            link: '/photos/photo-a-day/2025/01/25'
                          },
                          {
                            text: '26',
                            link: '/photos/photo-a-day/2025/01/26'
                          },
                          {
                            text: '27',
                            link: '/photos/photo-a-day/2025/01/27'
                          },
                          {
                            text: '28',
                            link: '/photos/photo-a-day/2025/01/28'
                          },
                          {
                            text: '29',
                            link: '/photos/photo-a-day/2025/01/29'
                          },
                          {
                            text: '30',
                            link: '/photos/photo-a-day/2025/01/30'
                          },
                          {
                            text: '31',
                            link: '/photos/photo-a-day/2025/01/31'
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
      { icon: 'x', link: 'https://x.com/bygregmarine' },
      { icon: 'instagram', link: 'https://www.instagram.com/bygregmarine/' },
      { icon: 'threads', link: 'https://www.threads.net/@bygregmarine' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/bygregmarine.bsky.social' },
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/' }
    ]
  }
})
