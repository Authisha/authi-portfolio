import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    pinned: z.boolean().optional(),   // 👈 add this
});



export type BlogSchema = z.infer<typeof blogSchema>;


const blogCollection = defineCollection({ schema: blogSchema });


export const collections = {
    'blog': blogCollection,
    
};
