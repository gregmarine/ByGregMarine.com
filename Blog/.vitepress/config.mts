import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was thinking...",
  description: "Musings by Greg Marine",
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
            text: 'Journal',
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
                      },
                      {
                        text: 'Healthier Than Last Year',
                        link: '/2024/01/07_healthier-than-last-year'
                      },
                      {
                        text: 'Best Burger Ever',
                        link: '/2024/01/08_best-burger-ever'
                      },
                      {
                        text: 'Storms, Tacos, and Gratefulness',
                        link: '/2024/01/09_storms-tacos-and-gratefulness'
                      },
                      {
                        text: 'Weird, Normal, and My Best',
                        link: '/2024/01/10_weird-normal-and-my-best'
                      },
                      {
                        text: 'A Day of a Different Color',
                        link: '/2024/01/11_a-day-of-a-different-color'
                      },
                      {
                        text: 'Breaking Fast',
                        link: '/2024/01/12_breaking-fast'
                      },
                      {
                        text: 'Copyrights, Prayer, and 10K',
                        link: '/2024/01/13_copyrights-prayer-and-a-10k'
                      },
                      {
                        text: 'Prayer, Sinkholes, and a Monorepo',
                        link: '/2024/01/14_prayer-sinkholes-and-a-monorepo'
                      },
                      {
                        text: 'Peace, Prayer, and Proverbs 3',
                        link: '/2024/01/15_peace-prayer-and-proverbs-3'
                      },
                      {
                        text: 'Coffee, Paradise Freezing, and Tofu Tempura Tacos',
                        link: '/2024/01/16_coffee-paradise-freezing-and-tofu-tempura-tacos'
                      },
                      {
                        text: 'Chasing God',
                        link: '/2024/01/17_chasing-god'
                      },
                      {
                        text: 'Writer\'s Block Squared',
                        link: '/2024/01/18_writers-block-squared'
                      },
                      {
                        text: 'Perhaps Acoustic Guitar',
                        link: '/2024/01/19_perhaps-acoustic-guitar'
                      },
                      {
                        text: 'Mostly Unplanned',
                        link: '/2024/01/20_mostly-unplanned'
                      },
                      {
                        text: 'I\'m Here for You',
                        link: '/2024/01/21_im-here-for-you'
                      },
                      {
                        text: '25 Years and 2 Days',
                        link: '/2024/01/22_25-years-and-2-days'
                      },
                      {
                        text: 'A Time to Every Season',
                        link: '/2024/01/23_a-time-to-every-season'
                      },
                      {
                        text: 'So Far So Good',
                        link: '/2024/01/24_so-far-so-good'
                      },
                      {
                        text: 'Interruptions in Paradise',
                        link: '/2024/01/25_interruptions-in-paradise'
                      },
                      {
                        text: 'Oh Look, the Finish Line',
                        link: '/2024/01/26_oh-look-the-finish-line'
                      },
                      {
                        text: 'Only the Beginning',
                        link: '/2024/01/27_only-the-beginning'
                      },
                      {
                        text: 'So, I Bought a Book',
                        link: '/2024/01/30_so-i-bought-a-book'
                      }
                    ]
                  },
                  {
                    text: 'February',
                    collapsed: true,
                    items: [
                      {
                        text: 'It\'s Going to be Okay',
                        link: '/2024/02/01_its-going-to-be-okay'
                      },
                      {
                        text: 'Ensō',
                        link: '/2024/02/03_enso'
                      },
                      {
                        text: 'Gutters, Wrong Time, Just Me, and Soul Food',
                        link: '/2024/02/05_gutters-wrong-time-just-me-and-soul-food'
                      },
                      {
                        text: 'Plans, Detours, and the Floor',
                        link: '/2024/02/09_plans-detours-and-the-floor'
                      },
                      {
                        text: 'Change of Heart',
                        link: '/2024/02/14_change-of-heart'
                      },
                      {
                        text: 'Rainbow Connection',
                        link: '/2024/02/15_rainbow-connection'
                      },
                      {
                        text: 'Zoom, Zoom, Zoom, Tofu, and Spring!',
                        link: '/2024/02/16_zoom-zoom-zoom-tofu-and-spring'
                      },
                      {
                        text: 'Food, Coffee, and Living Forever',
                        link: '/2024/02/17_food-coffee-and-living-forever'
                      },
                      {
                        text: 'Rebuilding Revisited, SUNDAY!!!, and Thumper',
                        link: '/2024/02/18_rebuilding-revisited-sunday-and-thumper'
                      },
                      {
                        text: 'A Day to Remember',
                        link: '/2024/02/19_a-day-to-remember'
                      },
                      {
                        text: 'Health, Vitamin G, and Relationships',
                        link: '/2024/02/20_health-vitamin-g-and-relationships'
                      },
                      {
                        text: 'Joseph\'s (and My) Dreams, Portion Control, and the Shakes',
                        link: '/2024/02/21_dreams-portion-control-and-the-shakes'
                      },
                      {
                        text: 'Sites, Acceptance, Tea, Play Ball!, and Judge Doom',
                        link: '/2024/02/22_sites-acceptance-tea-play-ball-and-judge-doom'
                      },
                      {
                        text: 'Bible in a Year, My Meaning, Chicken, Paradise Paintings, and a Great Day',
                        link: '/2024/02/23_bible-in-a-year-my-meaning-chicken-paradise-paintings-and-a-great-day'
                      },
                      {
                        text: 'Car, Tarpon, Olaf, and Meetups',
                        link: '/2024/02/26_car-tarpon-olaf-and-meetups'
                      },
                      {
                        text: 'Vacation?',
                        link: '/2024/02/27_vacation'
                      }
                    ]
                  },
                  {
                    text: 'March',
                    collapsed: true,
                    items: [
                      {
                        text: 'Favorite Month, Vacation Mode, and More to Come',
                        link: '/2024/03/02_favorite-month-vacation-mode-and-more-to-come'
                      },
                      {
                        text: 'Feelings, Food, and Work',
                        link: '/2024/03/03_Feelings-food-and-work'
                      },
                      {
                        text: 'Reflection, Jaw Pain, Improving, and Photography',
                        link: '/2024/03/04_reflection-jaw-pain-improving-and-photography'
                      },
                      {
                        text: 'I\'m So Cool! j/k',
                        link: '/2024/03/05_im-so-cool'
                      },
                      {
                        text: 'Good week, Gout, and Doing Great',
                        link: '/2024/03/08_good-week-gout-and-doing-great'
                      },
                      {
                        text: 'DST, More (about) Pain, Books, and More!',
                        link: '/2024/03/09_dst-more-pain-books-and-more'
                      },
                      {
                        text: 'Seagulls, Facebook Memories, Church, and Mind Prison',
                        link: '/2024/03/11_seagulls-facebook-memories-church-and-mind-prison'
                      },
                      {
                        text: 'Phone Calls, Sunrise Poem, Afternoon Tea, and Dodgers Mugs',
                        link: '/2024/03/12_phone-calls-sunrise-poem-afternoon-tea-and-dodgers-mugs'
                      },
                      {
                        text: 'Writing, Sunrises, Bread, and Friendship',
                        link: '/2024/03/15_writing-sunrises-bread-and-friendship'
                      },
                      {
                        text: 'Happy St. Patrick\'s Day',
                        link: '/2024/03/17_happy-st-patricks-day'
                      },
                      {
                        text: 'Bugs, Lease Renewal, and my Schedule (Among other things)',
                        link: '/2024/03/18_bugs-lease-renewal-and-my-schedule'
                      },
                      {
                        text: 'Birthday Eve',
                        link: '/2024/03/19_birthday-eve'
                      },
                      {
                        text: 'Work Update, Botanical Gardens, and the Weekend',
                        link: '/2024/03/22_work-update-botanical-gardens-and-the-weekend'
                      },
                      {
                        text: 'New Grocer, Food for Thought, Dog Toys, and Frozen',
                        link: '/2024/03/23_new-grocer-food-for-thought-dog-toys-and-frozen'
                      },
                      {
                        text: 'Garden Take 2, CCGS, and Holy Holidays',
                        link: '/2024/03/24_garden-take-2-ccgs-and-holy-holidays'
                      },
                      {
                        text: 'Buckwheat Bread, Food for Thought, and 3:30am',
                        link: '/2024/03/25_buckwheat-bread-food-for-thought-and-330-am'
                      },
                      {
                        text: 'Disney and Passion Week',
                        link: '/2024/03/27_disney-and-passion-week'
                      },
                      {
                        text: 'TBD',
                        link: '/2024/03/28_'
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
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/tree/main/Blog' }
    ]
  }
})
