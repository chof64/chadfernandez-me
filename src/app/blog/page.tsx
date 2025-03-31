import React from "react";
import Link from "next/link";

import { fetchBlogPosts } from "~/lib/hashnode/fetchBlogPosts";
import { dateFormatter } from "~/lib/hashnode/utils";

export default async function Blog() {
  const posts = await fetchBlogPosts();

  return (
    <div className="container my-16 max-w-2xl">
      <section>
        <h1 className="typo-h2">Latest Posts</h1>
      </section>
      <section className="mt-16 space-y-16">
        {posts.length === 0 ? (
          <p className="text-gray-500">No blog posts found. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <p className="text-muted-foreground space-x-4 text-sm">
                  <span>{dateFormatter(post.publishedAt)}</span>
                  <span>{post.readTimeInMinutes} min read</span>
                </p>
                <div className="group py-2">
                  <h2 className="typo-h5 group-hover:text-primary/70 line-clamp-1 font-semibold">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2">{post.brief}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
