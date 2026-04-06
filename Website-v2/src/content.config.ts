// Astro v6 content collection definitions for all four modules.
// Each collection uses the glob loader to read src/content/<name>/*.md

import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: new URL("./content/blog", import.meta.url).pathname }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: new URL("./content/photos", import.meta.url).pathname }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })),
    dateTaken: z.coerce.date().optional(),
    location: z.string().optional(),
    collection: z.string().optional(),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: "**/*.md", base: new URL("./content/art", import.meta.url).pathname }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })),
    medium: z.string().optional(),
    yearCreated: z.number().optional(),
    collection: z.string().optional(),
  }),
});

const words = defineCollection({
  loader: glob({ pattern: "**/*.md", base: new URL("./content/words", import.meta.url).pathname }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    collection: z.string().optional(),
    form: z.string().optional(),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: "**/*.md", base: new URL("./content/home", import.meta.url).pathname }),
  schema: z.object({
    tagline: z.string().optional(),
    bio: z.string().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "index.md", base: new URL("./content/settings", import.meta.url).pathname }),
  schema: z.object({
    profile_image: z.string().optional(),
  }),
});

const sectionMetaSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  tagline: z.string().optional(),
});

const blogMeta = defineCollection({
  loader: glob({ pattern: "index.md", base: new URL("./content/blog-meta", import.meta.url).pathname }),
  schema: sectionMetaSchema,
});

const wordsMeta = defineCollection({
  loader: glob({ pattern: "index.md", base: new URL("./content/words-meta", import.meta.url).pathname }),
  schema: sectionMetaSchema,
});

const artMeta = defineCollection({
  loader: glob({ pattern: "index.md", base: new URL("./content/art-meta", import.meta.url).pathname }),
  schema: sectionMetaSchema,
});

const photosMeta = defineCollection({
  loader: glob({ pattern: "index.md", base: new URL("./content/photos-meta", import.meta.url).pathname }),
  schema: sectionMetaSchema,
});

export const collections = { blog, photos, art, words, home, settings, blogMeta, wordsMeta, artMeta, photosMeta };
