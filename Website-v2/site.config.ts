// Controls which modules are active on the site.
// Set a module to false to hide it from nav and disable its routes.

export const siteConfig = {
  title: "by Greg Marine",
  description: "A personal creative platform.",
  url: "https://bygregmarine.com",
  modules: {
    home: true,
    blog: true,
    words: true,
    art: true,
    photos: true,
    settings: true,
  },
  socialLinks: [
    {
      platform: "instagram",
      url: "https://www.instagram.com/bygregmarine/",
      label: "Greg Marine on Instagram",
    },
    {
      platform: "threads",
      url: "https://www.threads.net/@bygregmarine",
      label: "Greg Marine on Threads",
    },
    {
      platform: "bluesky",
      url: "https://bsky.app/profile/bygregmarine.bsky.social",
      label: "Greg Marine on BlueSky",
    },
    {
      platform: "x",
      url: "https://x.com/bygregmarine",
      label: "Greg Marine on X",
    },
    {
      platform: "github",
      url: "https://github.com/gregmarine/ByGregMarine.com/",
      label: "Greg Marine on GitHub",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
