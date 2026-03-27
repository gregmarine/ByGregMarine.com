// Controls which modules are active on the site.
// Set a module to false to hide it from nav and disable its routes.

export const siteConfig = {
  title: "by Greg Marine",
  description: "A personal creative platform.",
  url: "https://bygregmarine.com",
  modules: {
    blog: true,
    photos: true,
    art: true,
    words: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
