import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function GET(
  req: Request,
  { params }: { params: { options: string; path: string[] } },
) {
  const imagePath = path.join(process.cwd(), "public", ...params.path);
  const [width, quality] = params.options.split("q").map(Number);

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const optimizedImage = await sharp(imageBuffer)
      .resize({ width: width })
      .webp({ quality: quality })
      .toBuffer();

    return new Response(optimizedImage, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return new Response("Image not found", { status: 404 });
  }
}
