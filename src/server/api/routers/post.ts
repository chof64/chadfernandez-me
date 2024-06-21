import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = [];
    let cursor = await ctx.ghost.posts
      .browse()
      .include({ authors: true, tags: true })
      .paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
    while (cursor.next) {
      cursor = await cursor.next.paginate();
      if (cursor.current.success) posts.push(...cursor.current.data);
    }

    return posts;
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input, ctx }) => {
      const response = await ctx.ghost.posts.read({ slug: input.slug }).fetch();
      if (response.success) {
        return response.data;
      } else {
        throw new Error("Post not found");
      }
    }),
});
