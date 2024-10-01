import Link from "next/link";
import React from "react";

import { formatDate } from "~/lib/post/formatDate";

export default async function PostsList() {
  // const posts = await api.post.getAll();

  return (
    <main className="container my-16 max-w-2xl px-6 sm:px-8">
      <h1 className="typography-h1">Posts</h1>
      <p className="typography-small mt-1 text-neutral-500">
        Things I&apos;ve written about. Thoughts, ideas, and stuff worth
        sharing.
      </p>
      {/* <div className="mt-8 flex flex-col gap-1.5">
        {posts.map((post) => {
          return (
            <Link href={`/post/${post.slug}`} key={post.id}>
              <div className="rounded-md p-2.5 px-4 hover:bg-gray-100/80">
                <h2 className="font-semibold tracking-tight">{post.title}</h2>
                <div>
                  <p className="inline-block text-xs text-neutral-500">
                    {formatDate(new Date(post.published_at!))}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div> */}
    </main>
  );
}
