import React from "react";
import Link from "next/link";
import { differenceInHours, format, formatDistance } from "date-fns"

import { auth } from "@/lib/ghost/auth"
import { cn } from "@/lib/utils"

export default async function PostsList({ className = "", limit = null }) {
  const ghost = auth()
  const posts = await ghost.posts.browse({
    limit: limit ? limit : "all",
    order: "published_at DESC",
    filter: "tags:[hash-blog]",
    include: "tags,authors",
  })

  posts.forEach((post) => {
    const time = new Date(post.published_at)
    if (differenceInHours(new Date(), time) < 24) {
      post.date = formatDistance(time, new Date()) + " ago"
    } else {
      // post.date = formatDistance(time, new Date());
      post.date = format(time, "MMMM do, yyyy")
    }

    if (post.feature_image?.startsWith("http://")) {
      post.feature_image = post.feature_image.replace("http://", "https://")
    }
  })

  return (
    <section
      className={cn(
        "mx-auto my-32 flex w-svw-95 max-w-lg flex-col gap-y-4",
        className
      )}
    >
      {posts.map((post) => (
        <Link
          className="group rounded-2xl border bg-gray-50 p-4"
          href={`/blog/${post.slug}`}
          key={post.id}
        >
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {post.title}
            <span className="ml-2 inline-block transition-transform duration-150 delay-75 ease-in-out group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="mt-2 line-clamp-3">{post.excerpt}</p>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">{post.date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}