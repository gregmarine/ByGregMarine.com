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
                text: 'Read Me',
                link: '/read-me'
              },
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
                        text: 'Holy Week, Anxiety Continued, and Hello New Rut!',
                        link: '/2024/03/28_holy-week-anxiety-continued-and-hello-new-rut'
                      },
                      {
                        text: 'My Path, Food for Thought, and Love',
                        link: '/2024/03/31_my-path-food-for-thought-and-love'
                      }
                    ]
                  },
                  {
                    text: 'April',
                    collapsed: true,
                    items: [
                      {
                        text: 'Wildflowers',
                        link: '/2024/04/02_wildflowers'
                      },
                      {
                        text: 'Great Expectations',
                        link: '/2024/04/03_great-expectations'
                      },
                      {
                        text: 'Zen and too Cold for Water',
                        link: '/2024/04/04_zen-and-too-cold-for-water'
                      },
                      {
                        text: 'Food for Thought, Woodpecker, and Sadness',
                        link: '/2024/04/06_food-for-thought-woodpecker-and-sadness'
                      },
                      {
                        text: 'Devotional Reflection Continued',
                        link: '/2024/04/08_devotional-reflection-continued'
                      },
                      {
                        text: 'Light',
                        link: '/2024/04/09_light'
                      },
                      {
                        text: 'Storm, Magical Moments, and Food for Thought',
                        link: '/2024/04/11_storm-magical-moments-and-food-for-thought'
                      },
                      {
                        text: 'Purpose - Passion',
                        link: '/2024/04/12_purpose-passion'
                      },
                      {
                        text: 'So, I Ran Today...LOL',
                        link: '/2024/04/18_so-i-ran-today'
                      },
                      {
                        text: 'Sonshine Through the Valley',
                        link: '/2024/04/23_sonshine-through-the-valley'
                      },
                      {
                        text: 'Preview Popping Corn',
                        link: '/2024/04/24_preview-popping-corn'
                      },
                      {
                        text: 'TBD',
                        link: '/2024/04/25_tbd'
                      },
                      {
                        text: 'Rejoice, Be Happy, Be Silly',
                        link: '/2024/04/26_rejoice-be-happy-be-silly'
                      },
                      {
                        text: 'Arboretum Day',
                        link: '/2024/04/27_arboretum-day'
                      },
                      {
                        text: 'I\'m Still Happy',
                        link: '/2024/04/28_im-still-happy'
                      },
                      {
                        text: 'Finding Joy in Passion and Blessings',
                        link: '/2024/04/29_finding-joy-in-passion-and-blessings'
                      }
                    ]
                  },
                  {
                    text: 'May',
                    collapsed: true,
                    items: [
                      {
                        text: 'Praying Away the Blessing?',
                        link: '/2024/05/02_praying-away-the-blessing'
                      },
                      {
                        text: 'Hello Weekend',
                        link: '/2024/05/03_hello-weekend'
                      },
                      {
                        text: 'I Saw a Dolphin Today!',
                        link: '/2024/05/04_i-saw-a-dolphin-today.md'
                      },
                      {
                        text: 'A Day in the Life of Greg',
                        link: '/2024/05/06_a-day-in-the-life-of-greg'
                      },
                      {
                        text: 'Stopping to Smell the Magnolia',
                        link: '/2024/05/07_stopping-to-smell-the-magnolia'
                      },
                      {
                        text: 'Canine Eclipse',
                        link: '/2024/05/08_canine-eclipse'
                      },
                      {
                        text: 'Hot Beverage Switch Up and Tacos!',
                        link: '/2024/05/09_hot-beverage-switch-up-and-tacos'
                      },
                      {
                        text: 'Exit Strategy, Dining Experiences, and Travel',
                        link: '/2024/05/10_exit-strategy-dining-experiences-and-travel'
                      },
                      {
                        text: 'Wonderful Weekend, Botanical Adventure, and Zen Luck Needed',
                        link: '/2024/05/13_wonderful-weekend-botanical-adventure-and-zen-luck-needed'
                      },
                      {
                        text: 'So Many Things and More to Come',
                        link: '/2024/05/19_so-many-things-and-more-to-come'
                      },
                      {
                        text: 'Return to Social Media',
                        link: '/2024/05/21_return-to-social-media'
                      },
                      {
                        text: 'Appreciation, Love, and Slowing Down',
                        link: '/2024/05/22_appreciation-love-and-slowing-down'
                      },
                      {
                        text: 'Job News, Power of Prayer, Meeting Friends',
                        link: '/2024/05/28_job-news-power-of-prayer-meeting-friends'
                      },
                      {
                        text: 'Birthday, New Project, Diamond Bar, and Lamentation',
                        link: '/2024/05/29_birthday-new-project-diamond-bar-and-lamentation'
                      }
                    ]
                  },
                  {
                    text: 'June',
                    collapsed: true,
                    items: [
                      {
                        text: 'Back in Indiana',
                        link: '/2024/06/01_back-in-indiana'
                      },
                      {
                        text: 'Am I Positive?',
                        link: '/2024/06/06_am-i-positive'
                      },
                      {
                        text: 'Unsettled',
                        link: '/2024/06/10_unsettled'
                      },
                      {
                        text: 'New Schedule, Who Dis?',
                        link: '/2024/06/13_new-schedule-who-dis'
                      },
                      {
                        text: 'Unsealing, Routine, and a Happy Heart',
                        link: '/2024/06/14_unsealing-routine-and-a-happy-heart'
                      },
                      {
                        text: 'Happy Father\'s Day!',
                        link: '/2024/06/16_happy-fathers-day'
                      },
                      {
                        text: 'So, I Bought Another Book',
                        link: '/2024/06/17_so-i-bought-another-book'
                      },
                      {
                        text: 'So, I Wrote a Poem',
                        link: '/2024/06/18_so-i-wrote-a-poem'
                      },
                      {
                        text: 'Scattered Spaghetti',
                        link: '/2024/06/19_scattered-spaghetti'
                      },
                      {
                        text: 'Happy Snowman',
                        link: '/2024/06/21_happy-snowman'
                      },
                      {
                        text: 'I\'m Glad I Wrote This',
                        link: '/2024/06/24_im-glad-i-wrote-this'
                      },
                      {
                        text: 'I Get a Teekit!',
                        link: '/2024/06/26_i-get-a-teekit'
                      },
                      {
                        text: 'Moments God Gives',
                        link: '/2024/06/27_moments-god-gives'
                      }
                    ]
                  },
                  {
                    text: 'July',
                    collapsed: true,
                    items: [
                      {
                        text: 'Hear Ye, Hear Ye!',
                        link: '/2024/07/02_hear-ye-hear-ye'
                      },
                      {
                        text: 'California!',
                        link: '/2024/07/03_california'
                      },
                      {
                        text: 'I Climbed a Mountain Today!',
                        link: '/2024/07/04_i-climbed-a-mountain-today'
                      },
                      {
                        text: 'I Saw the Pacific Ocean!',
                        link: '/2024/07/05_i-saw-the-pacific-ocean'
                      },
                      {
                        text: 'I Got to Hug Chérie!',
                        link: '/2024/07/06_i-got-to-hug-cherie'
                      },
                      {
                        text: 'I Experienced God!',
                        link: '/2024/07/07_i-experienced-god'
                      },
                      {
                        text: 'Resetting',
                        link: '/2024/07/08_resetting'
                      },
                      {
                        text: 'Home and Friends',
                        link: '/2024/07/09_home-and-friends'
                      },
                      {
                        text: 'Random Thoughts',
                        link: '/2024/07/10_random-thoughts'
                      },
                      {
                        text: 'Worth the Effort',
                        link: '/2024/07/12_worth-the-effort'
                      },
                      {
                        text: 'Jesus is Everything!',
                        link: '/2024/07/15_jesus-is-everything'
                      },
                      {
                        text: 'YOLO, New Old Things, Creativity, and Childlike Wonder',
                        link: '/2024/07/18_yolo-new-old-things-creativity-and-childlike-wonder'
                      },
                      {
                        text: 'Short Title',
                        link: '/2024/07/19_short-title'
                      },
                      {
                        text: 'Fingerprints',
                        link: '/2024/07/22_fingerprints'
                      },
                      {
                        text: 'Lindsay',
                        link: '/2024/07/24_lindsay'
                      },
                      {
                        text: 'Rest and Reflection',
                        link: '/2024/07/28_rest-and-reflection'
                      },
                      {
                        text: 'New Soap, Connected Journeys, and Wrong Choices',
                        link: '/2024/07/29_new-soap-connected-journeys-and-wrong-choices'
                      }
                    ]
                  },
                  {
                    text: 'August',
                    collapsed: true,
                    items: [
                      {
                        text: 'Thought Playground',
                        link: '/2024/08/06_thought-playground'
                      },
                      {
                        text: 'Happy FriYAY',
                        link: '/2024/08/09_happy-friyay'
                      },
                      {
                        text: 'More to Come',
                        link: '/2024/08/13_more-to-come'
                      },
                      {
                        text: 'More Continued',
                        link: '/2024/08/19_more-continued'
                      },
                      {
                        text: 'Disney, Duke Gardens',
                        link: '/2024/08/20_disney-duke-gardens'
                      },
                      {
                        text: 'Museum Park and Glorious Food',
                        link: '/2024/08/21_museum-park-and-glorious-food'
                      },
                      {
                        text: 'Okay With Who and Where I am',
                        link: '/2024/08/26_okay-with-who-and-where-i-am'
                      },
                      {
                        text: 'Thursday at the Outer Banks',
                        link: '/2024/08/27_thursday-at-the-outer-banks'
                      },
                      {
                        text: 'Yoke Opportunities',
                        link: '/2024/08/28_yoke-opportunities'
                      },
                      {
                        text: 'Happy Hands',
                        link: '/2024/08/29_happy-hands'
                      },
                      {
                        text: 'Flying Biscuits, Raven Rock, Bowstring',
                        link: '/2024/08/30_flying-biscuits-raven-rock-bowstring'
                      }
                    ]
                  },
                  {
                    text: 'September',
                    collapsed: true,
                    items: [
                      {
                        text: 'Brain Dump',
                        link: '/2024/09/02_brain-dump'
                      },
                      {
                        text: 'Schedule, Lavender, Fish Tacos',
                        link: '/2024/09/03_schedule-lavender-fish-tacos'
                      },
                      {
                        text: 'Creative Focus and Zen Chow Mein',
                        link: '/2024/09/05_creative-focus-and-zen-chow-mein'
                      },
                      {
                        text: 'Thinking Through Writing',
                        link: '/2024/09/09_thinking-through-writing'
                      },
                      {
                        text: 'Great Big Beautiful Tomorrow',
                        link: '/2024/09/11_great-big-beautiful-tomorrow'
                      },
                      {
                        text: 'A Blessed Day',
                        link: '/2024/09/12_a-blessed-day'
                      },
                      {
                        text: 'Happy Positive Thinking Day',
                        link: '/2024/09/13_happy-positive-thinking-day'
                      },
                      {
                        text: 'I\'ve Been',
                        link: '/2024/09/14_i-ve-been'
                      },
                      {
                        text: 'Grateful',
                        link: '/2024/09/15_grateful'
                      },
                      {
                        text: 'Storing Goodness and Managing Changes',
                        link: '/2024/09/16_storing-goodness-and-managing-changes'
                      },
                      {
                        text: 'Journal Entry, Take Two',
                        link: '/2024/09/17_journal-entry-take-two'
                      },
                      {
                        text: 'Half Birthday, Growth, God Provides',
                        link: '/2024/09/18_half-birthday-growth-god-provides'
                      },
                      {
                        text: 'Food Fail/Win, Ohtani, Audio Messages, Tomorrow',
                        link: '/2024/09/19_food-fail-win-ohtani-audio-messages-tomorrow'
                      },
                      {
                        text: 'Happy Birthday, Timmy!',
                        link: '/2024/09/20_happy-birthday-timmy'
                      },
                      {
                        text: 'Church, Self Respect, Listening',
                        link: '/2024/09/22_church-self-respect-listening'
                      },
                      {
                        text: 'Showing Jesus, Storm, Parents Visiting',
                        link: '/2024/09/24_showing-jesus-storm-parents-visiting'
                      },
                      {
                        text: 'Calm Before the Storm',
                        link: '/2024/09/25_calm-before-the-storm'
                      },
                      {
                        text: 'Workcation',
                        link: '/2024/09/26_workcation'
                      },
                      {
                        text: 'Good Day, But Goodnight',
                        link: '/2024/09/27_good-day-but-goodnight'
                      }
                    ]
                  },
                  {
                    text: 'October',
                    collapsed: true,
                    items: [
                      {
                        text: 'Important Week',
                        link: '/2024/10/06_important-week'
                      },
                      {
                        text: 'Fingerprints of God',
                        link: '/2024/10/07_fingerprints-of-god'
                      },
                      {
                        text: 'New Friends, Fellowship, and Milton Berle',
                        link: '/2024/10/08_new-friends-fellowship-and-milton-berle'
                      },
                      {
                        text: 'Sophisticated Florida Man',
                        link: '/2024/10/09_sophisticated-florida-man'
                      },
                      {
                        text: 'I am the Watchman',
                        link: '/2024/10/14_i-am-the-watchman'
                      },
                      {
                        text: 'So, I was overthinking...',
                        link: '/2024/10/15_so-i-was-overthinking'
                      },
                      {
                        text: 'Soul Construction Ahead...Proceed with Prayer',
                        link: '/2024/10/21_soul-construction-ahead-proceed-with-prayer'
                      },
                      {
                        text: 'Poor Sleep, Great Day',
                        link: '/2024/10/22_poor-sleep-great-day'
                      },
                      {
                        text: 'Father God, thank You for today',
                        link: '/2024/10/23_father-god-thank-you-for-today'
                      },
                      {
                        text: 'Growing Pains and the Unexpected',
                        link: '/2024/10/24_growing-pains-and-the-unexpected'
                      },
                      {
                        text: 'Inner Peace',
                        link: '/2024/10/25_inner-peace'
                      },
                      {
                        text: 'Parents Anniversary, Dunedin, Dodgers Win',
                        link: '/2024/10/26_parents-anniversary-dunedin-dodgers-win'
                      },
                      {
                        text: 'Friendship Rollercoaster Ride',
                        link: '/2024/10/28_friendship-rollercoaster-ride'
                      },
                      {
                        text: 'No Title',
                        link: '/2024/10/29_no-title'
                      },
                      {
                        text: 'Goldilocks and the Dodgers',
                        link: '/2024/10/30_goldilocks-and-the-dodgers'
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
