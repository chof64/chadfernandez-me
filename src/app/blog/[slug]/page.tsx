import React from "react";
import Link from "next/link";
import { readingTime } from "@tryghost/helpers";
import { differenceInHours, format, formatDistance } from "date-fns"
import Balancer from "react-wrap-balancer"

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
      // console log error type
      console.log(err.response.status)
      if (err.response.status === 404) {
        return { notFound: true }
      }
      return { hasError: true }
    })

  const time = new Date(post.published_at)
  if (differenceInHours(new Date(), time) < 24) {
    post.date = formatDistance(time, new Date()) + " ago"
  } else {
    post.date = format(time, "MMMM do, yyyy")
  }

  return (
    <main>
      <section className="mx-auto my-32 mb-16 mt-8 w-svw-95 max-w-xl">
        <Link className="text-sm text-muted-foreground" href="/blog">
          &lt;-- Back to Blog
        </Link>
        <p className="mt-16 text-sm text-muted-foreground">{post.date}</p>
        <h1 className="mt-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <Balancer>{post.title}</Balancer>
        </h1>
      </section>
      <section className="mx-auto my-32 mt-16 w-svw-95 max-w-xl">
        <Render html={post.html} />
      </section>
    </main>
  )
}