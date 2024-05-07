import { defineCollection, z } from "astro:content";

const links = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
  }),
});

const cases = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const workshops = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().optional(),
    published: z.boolean().default(true),
    index: z.number().default(0),
  }),
});

export const collections = { links , cases, workshops };
