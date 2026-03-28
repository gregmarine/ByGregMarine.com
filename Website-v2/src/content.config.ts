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
    dateTaken: z.coerce.date().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
    collection: z.string().optional(),
    images: z.array(z.object({ src: z.string(), caption: z.string().optional() })),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: "**/*.md", base: new URL("./content/art", import.meta.url).pathname }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    collection: z.string().optional(),
    images: z.array(z.object({ src: z.string(), caption: z.string().optional() })),
    medium: z.string().optional(),
    yearCreated: z.number().optional(),
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

export const collections = { blog, photos, art, words, home };
