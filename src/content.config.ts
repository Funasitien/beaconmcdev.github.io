import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  docs,
};