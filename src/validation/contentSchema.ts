import { z } from 'zod';

export const componentSchema = z.object({
  type: z.string(),
  props: z.record(z.any()),
});

export const contentSchema = z.object({
  content: z.array(componentSchema),
  root: z.object({
    title: z.string(),
  }),
});

export type Content = z.infer<typeof contentSchema>;