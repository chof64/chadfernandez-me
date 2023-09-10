import React from "react"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getAllBlocks, getDatabase, getPage } from "@/lib/notion"
import { cn } from "@/lib/utils"
import DateFormat from "@/components/DateFormat"
import { renderBlock } from "@/components/notion/Render"
import Text from "@/components/notion/Text"

export const revalidate = 60

export async function generateMetadata(
  { params }: PostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!process.env.NOTION_DB_BLOG) {
    throw new Error("NOTION_DB_BLOG is not set")
  }
  const db: any = await getDatabase(process.env.NOTION_DB_BLOG, {
    filter: {
      property: "slugAsParams",
      formula: {
        string: { equals: params.slug },
      },
    },
  })

  return {
    title: db[0].properties.Name.title[0].plain_text + " - Gheriane Obja-an",
    description:
      db[0].properties.Excerpt?.rich_text[0]?.plain_text || undefined,
    openGraph: {
      title: db[0].properties.Name.title[0].plain_text + " - Gheriane Obja-an",
      description:
        db[0].properties.Excerpt?.rich_text[0]?.plain_text || undefined,
    },
  }
}

type PostProps = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: PostProps) {
  if (!process.env.NOTION_DB_BLOG) {
    throw new Error("NOTION_DB_BLOG is not set")
  }

  const db: any = await getDatabase(process.env.NOTION_DB_BLOG, {
    filter: {
      property: "slugAsParams",
      formula: {
        string: { equals: params.slug },
      },
    },
  })

  if (!db || !db.length) {
    return notFound()
  }

  const page = await getAllBlocks(db[0].id)

  if (!page || !page.length) {
    return notFound()
  }

  return (
    <main className="mx-4">
      <section className="mx-auto my-8 max-w-lg">
        <Link className={cn("muted", "text-sm")} href="/blog">
          &lt;-- Back to Blog
        </Link>
      </section>

      <section className="mx-auto my-8 max-w-lg">
        <h1 className="h1">
          <Text text={db[0].properties.Name.title} />
        </h1>
        <div className="mt-1 inline-flex gap-4">
          <p className={cn("p", "muted font-medium")}>
            {db[0].properties.Topic.select.name}
          </p>
          <p className="muted">
            <DateFormat
              date={new Date(db[0].properties.Publish.date.start)}
              style="MMMM d, yyyy"
            />
          </p>
        </div>
        <p className={cn("lead", "!mt-4 text-lg")}>
          <Text text={db[0].properties.Excerpt.rich_text} />
        </p>
      </section>

      <section className="prose prose-stone prose-cyan mx-auto my-8 mt-16 max-w-lg">
        {page.map((block) => renderBlock(block))}
      </section>
    </main>
  )
}
