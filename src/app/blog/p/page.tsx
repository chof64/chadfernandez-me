import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getAllBlocks, getPage } from "@/lib/notion"
import { cn } from "@/lib/utils"
import DateFormat from "@/components/DateFormat"
import { renderBlock } from "@/components/notion/Render"
import Text from "@/components/notion/Text"

export const revalidate = 0

type PreviewProps = {
  searchParams: {
    [key: string]: string
  }
}

export default async function Preview({ searchParams }: PreviewProps) {
  const header: any = await getPage(searchParams.id)

  if (!header) {
    return notFound()
  }

  const page = await getAllBlocks(searchParams.id)

  if (!page || page.length === 0) {
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
          <Text text={header.properties.Name.title} />
        </h1>
        <div className="mt-1 inline-flex gap-4">
          {header.properties.Topic.select && (
            <p className={cn("p", "muted font-medium")}>
              {header.properties.Topic.select.name}
            </p>
          )}
          {header.properties.Publish.date && (
            <p className="muted">
              <DateFormat
                date={new Date(header.properties.Publish.date.start)}
                style="MMMM d, yyyy"
              />
            </p>
          )}
        </div>
        <p className={cn("lead", "!mt-4 text-lg")}>
          <Text text={header.properties.Excerpt.rich_text} />
        </p>
      </section>

      <section className="prose prose-stone prose-cyan mx-auto my-8 mt-16 max-w-lg">
        {page.map((block) => renderBlock(block))}
      </section>
    </main>
  )
}
