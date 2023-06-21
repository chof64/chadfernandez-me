import React from "react"

import PostsList from "./PostsList"

export const revalidate = 60

export default function Blog() {
  return (
    <main>
      <section className="mx-auto my-32 mb-16 w-svw-95 max-w-lg">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
          Blog
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I write about programming, server, and other things tech. I also write
          to share the things I've learned along the way.
        </p>
      </section>
      <PostsList className="mt-16" />
    </main>
  )
}
