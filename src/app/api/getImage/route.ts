import { Buffer } from "buffer"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url") || ""

  // use fetch to get image from url
  const imageResponse = await fetch(url, { next: { revalidate: 86400 } })
  const contentType = imageResponse.headers.get("content-type") || "image/jpeg"
  const imageBuffer = await imageResponse.arrayBuffer()

  // return image as buffer
  return new Response(Buffer.from(imageBuffer), {
    headers: {
      "Content-Type": contentType,
    },
  })
}
