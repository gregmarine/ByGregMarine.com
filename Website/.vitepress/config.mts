import blog from "./sidebar/blog.mts";

export default {
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

    sidebar: {
      '/blog/': blog,
      '/photos/': [
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
                },
                {
                  text: 'February',
                  collapsed: true,
                  items: [
                    {
                      text: '01',
                      link: '/photos/photo-a-day/2025/02/01'
                    },
                    {
                      text: '02',
                      link: '/photos/photo-a-day/2025/02/02'
                    },
                    {
                      text: '03',
                      link: '/photos/photo-a-day/2025/02/03'
                    },
                    {
                      text: '04',
                      link: '/photos/photo-a-day/2025/02/04'
                    },
                    {
                      text: '05',
                      link: '/photos/photo-a-day/2025/02/05'
                    },
                    {
                      text: '06',
                      link: '/photos/photo-a-day/2025/02/06'
                    },
                    {
                      text: '07',
                      link: '/photos/photo-a-day/2025/02/07'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/bible/': [
        {
          text: 'Berean Standard Bible',
          link: '/bible/translations/bsb/',
          collapsed: true,
          items: [
            {
              text: 'Exodus',
              link: '/bible/translations/bsb/02_exo/',
              collapsed: true,
              items: [
                {
                  text: '028',
                  link: '/bible/translations/bsb/02_exo/028'
                },
                {
                  text: '029',
                  link: '/bible/translations/bsb/02_exo/029'
                }
              ]
            }
          ]
        },
        {
          text: 'Reading Plans',
          link: '/bible/translations/bsb/',
          collapsed: true,
          items: [
            {
              text: 'Bible in a Year',
              link: '/bible/translations/bsb/02_exo/',
              collapsed: true,
              items: [
                {
                  text: '028',
                  link: '/bible/translations/bsb/02_exo/028'
                },
                {
                  text: '029',
                  link: '/bible/translations/bsb/02_exo/029'
                }
              ]
            }
          ]
        },
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

    socialLinks: [
      { icon: 'x', link: 'https://x.com/bygregmarine' },
      { icon: 'instagram', link: 'https://www.instagram.com/bygregmarine/' },
      { icon: 'threads', link: 'https://www.threads.net/@bygregmarine' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/bygregmarine.bsky.social' },
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/' }
    ]
  }
}