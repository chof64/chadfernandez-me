import React from "react"
import { Metadata } from "next"
import Link from "next/link"

import { getDatabase } from "@/lib/notion"
import { cn } from "@/lib/utils"
import DateFormat from "@/components/DateFormat"

export const revalidate = 10

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://chadfernandez.me"
  ),
  title: "Blog - Chad Fernandez",
  description:
    "I write to share. Share the things I've learned, I've discovered, and things that are worth sharing.",
  openGraph: {
    title: "Blog - Chad Fernandez",
    description:
      "I write to share. Share the things I've learned, I've discovered, and things that are worth sharing.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default async function Blog() {
  if (!process.env.NOTION_DB_BLOG) {
    throw new Error("NOTION_DB_BLOG is not set")
  }

  const postList = await getDatabase(process.env.NOTION_DB_BLOG, {
    sorts: [
      {
        property: "Publish",
        direction: "descending",
      },
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
    filter: {
      property: "Publish",
      date: { before: new Date().toISOString() },
    },
  })

  return (
    <main className="mx-4">
      <section className="mx-auto my-8 max-w-lg">
        <h1 className="h1">Blog</h1>
        <p className="p">
          I write to share. Share the things I've learned, I've discovered, and
          things that are worth sharing.
        </p>
      </section>

      <section className="mx-auto my-8 flex max-w-lg flex-col gap-4">
        {postList.map((post: any) => (
          <Link href={`/blog/${post.properties.slugAsParams.formula.string}`}>
            <p className={cn("p", "text-lg font-medium text-neutral-800")}>
              {post.properties.Name.title[0].plain_text}
            </p>
            <div className={cn("inline-flex gap-4")}>
              <p className={cn("p", "muted !mt-0.5 font-medium")}>
                {post.properties.Topic.select.name}
              </p>
              <p className={cn("p", "muted !mt-0.5")}>
                <DateFormat
                  date={new Date(post.properties.Publish.date.start)}
                  style="MMM. d yyyy"
                />
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
