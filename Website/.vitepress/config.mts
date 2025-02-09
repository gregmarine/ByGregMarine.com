import blog from "./sidebar/blog.mts";
import photos from "./sidebar/photos.mts";
import bible from "./sidebar/bible.mts";

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
      '/photos/': photos,
      '/bible/': bible
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