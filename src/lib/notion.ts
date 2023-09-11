import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

type getDatabaseProps = {
  sorts?: any | undefined
  filter?: any | undefined
}

export const getDatabase = async (
  databaseId: string,
  { sorts, filter }: getDatabaseProps
) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: sorts || undefined,
    filter: filter || undefined,
  })
  return response.results
}

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const fetchBlock = async (blockId: string, cursor: string | null) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
    start_cursor: cursor || undefined,
  })

  return response
}

export const getAllBlocks = async (blockId: string) => {
  const results: any = []
  let nextCursor: string | null = null

  do {
    const response = await fetchBlock(blockId, nextCursor)

    for (const block of response.results as any) {
      if (block.has_children) {
        const children = await getAllBlocks(block.id)
        block.children = children
      }
    }

    results.push(...response.results)
    nextCursor = response.next_cursor || null
  } while (nextCursor !== null)

  return results
}
