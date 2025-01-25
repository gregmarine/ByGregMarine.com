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
      { text: 'Photos', link: '/photos' }
    ],

    sidebar: [
      {
        items: [
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
                        text: 'Happy New Year!',
                        link: '/blog/2025/01/01_happy-new-year'
                      },
                      {
                        text: 'Circle of Life',
                        link: '/blog/2025/01/02_circle-of-life'
                      },
                      {
                        text: 'I Saw an Eagle!',
                        link: '/blog/2025/01/03_i-saw-an-eagle'
                      },
                      {
                        text: 'Weird Day',
                        link: '/blog/2025/01/04_weird-day'
                      },
                      {
                        text: 'Dawn',
                        link: '/blog/2025/01/05_dawn'
                      },
                      {
                        text: 'Blessings',
                        link: '/blog/2025/01/06_blessings'
                      },
                      {
                        text: 'God Revealed in the Journey',
                        link: '/blog/2025/01/07_god-revealed-in-the-journey'
                      },
                      {
                        text: 'God\'s Will be Done',
                        link: '/blog/2025/01/08_gods-will-be-done'
                      },
                      {
                        text: 'Lighthouse',
                        link: '/blog/2025/01/09_lighthouse'
                      },
                      {
                        text: 'Faith, Don\'t Fail Me Now!',
                        link: '/blog/2025/01/10_faith-dont-fail-me-now'
                      },
                      {
                        text: 'Strengthen Me to Strengthen Others',
                        link: '/blog/2025/01/11_strengthen-me-to-strengthen-others'
                      },
                      {
                        text: 'Heart Shaped Potato Chip',
                        link: '/blog/2025/01/12_heart-shaped-potato-chip'
                      },
                      {
                        text: 'Please Forgive Me',
                        link: '/blog/2025/01/13_please-forgive-me'
                      },
                      {
                        text: 'Gregilocks and the 3 in 1',
                        link: '/blog/2025/01/14_gregilocks-and-the-3-in-1'
                      },
                      {
                        text: 'Half Way There',
                        link: '/blog/2025/01/15_half-way-there'
                      },
                      {
                        text: 'Sent',
                        link: '/blog/2025/01/16_sent'
                      },
                      {
                        text: 'Title Not Found',
                        link: '/blog/2025/01/17_title-not-found'
                      },
                      {
                        text: 'Because He Did',
                        link: '/blog/2025/01/18_because-he-did'
                      },
                      {
                        text: 'Today, I\'m not ready',
                        link: '/blog/2025/01/19_today-im-not-ready'
                      },
                      {
                        text: 'On the Move',
                        link: '/blog/2025/01/20_on-the-move'
                      },
                      {
                        text: 'Young Year, Weather Woes, New Bedtime?',
                        link: '/blog/2025/01/21_young-year-weather-woes-new-bedtime'
                      },
                      {
                        text: 'Disoriented, Hot Water, Stuck Inside',
                        link: '/blog/2025/01/22_disoriented-hot-water-stuck-inside'
                      },
                      {
                        text: 'These Shoes are Tired',
                        link: '/blog/2025/01/23_these-shoes-are-tired'
                      },
                      {
                        text: 'One for All, All with the One',
                        link: '/blog/2025/01/24_one-for-all-all-with-the-one'
                      },
                      {
                        text: 'TBD',
                        link: '/blog/2025/01/25_'
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
