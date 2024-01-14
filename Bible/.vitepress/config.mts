import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const getSideBar = (): any => {
  const generatedSidebar = generateSidebar([
    {
      documentRootPath: '/src',
      resolvePath: '/',
      rootGroupText: 'Bible Resources',
      collapsed: true,
      sortMenusByName: true,
      sortMenusOrderByDescending: true,
      capitalizeEachWords: true,
      hyphenToSpace: true,
      underscoreToSpace: true,
    },
  ]);
  return generatedSidebar ?? [];
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bible",
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
    ],

    sidebar: getSideBar(),

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/bygregmarine' },
      { icon: 'instagram', link: 'https://www.instagram.com/bygregmarine/' },
      { icon: 'facebook', link: 'https://www.facebook.com/bygregmarine' },
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine/Bible' }
    ]
  }
})
