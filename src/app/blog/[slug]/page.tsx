import React from "react"
import Link from "next/link"
import { readingTime } from "@tryghost/helpers"
import { differenceInHours, format, formatDistance } from "date-fns"

import { auth } from "@/lib/ghost/auth"
import Render from "@/components/render/Render"

export const revalidate = 60

export default async function page({ params }) {
  const ghost = auth()
  const post = await ghost.posts
    .read({
      slug: params.slug,
      include: "tags",
    })
    .catch((err) => {
      return err.response
    })

  if (post.status) {
    return {
      notFound: true,
    }
  }

  const time = new Date(post.published_at)
  if (differenceInHours(new Date(), time) < 24) {
    post.date = formatDistance(time, new Date()) + " ago"
  } else {
    post.date = format(time, "MMMM do, yyyy")
  }
  post.reading_time = readingTime(post, {
    minute: "1 minute read",
    minutes: "% minute read",
  })

  return (
    <main>
      <section className="mx-auto my-32 mb-16 mt-8 w-svw-95 max-w-xl">
        <Link className="text-sm text-muted-foreground" href="/blog">
          &lt;-- Back to Blog
        </Link>
        <p className="mt-16 text-sm text-muted-foreground">{post.date}</p>
        <h1 className="mt-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
      </section>
      <section className="mx-auto my-32 mt-16 w-svw-95 max-w-xl">
        <Render html={post.html} />
      </section>
    </main>
  )
}
