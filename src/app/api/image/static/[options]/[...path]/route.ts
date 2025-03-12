import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ options: string; path: string[] }> },
) {
  const asyncParams = await params;

  const imagePath = path.join(process.cwd(), "public", ...asyncParams.path);
  const [width, quality] = asyncParams.options.split("q").map(Number);

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
    console.error(error);
    return new Response("Image not found", { status: 404 });
  }
}
