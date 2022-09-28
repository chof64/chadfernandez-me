import Link from "next/link";
import { TextParser, colorTextToTailwind } from "/src/utils/NotionUtilities";
import Image from "next/image";
import { classMerge } from "../../../utils/TailwindUtilities";
import { Pin as PinIcon } from "lucide-react";

export default function BlogPostsList(posts) {
  const postsList = posts.posts.results;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {postsList.map((item, index) => (
        <Link key={index} href={"/blog/" + item.slug}>
          <a className="px-1 py-1 bg-white h-fit border-neutral-500">
            {/* CATEGORY */}
            <div className="mb-0.5 flex items-center gap-2 text-sm">
              <p
                className={classMerge(
                  "rounded-md px-1.5 py-0.5 font-bold",
                  colorTextToTailwind(item.properties.Category.select.color)
                )}
              >
                {item.properties.Category.select.name.toUpperCase()}
              </p>
            </div>

            {/* COVER */}
            {item.cover !== null ? (
              <div className="relative w-full mb-2 rounded-lg shadow-md aspect-video">
                <Image
                  className="rounded-lg"
                  src={item.cover.url}
                  layout="fill"
                  objectFit="cover"
                  alt={item.cover.url}
                />
              </div>
            ) : (
              ""
            )}

            {/* TITLE */}
            <h1 className="flex items-center text-xl font-semibold">
              {item.properties.Status.status.name === "Pin" ? (
                <PinIcon className="w-4 h-4 mr-1 -rotate-45 fill-amber-500 stroke-amber-500" />
              ) : null}
              {item.properties.Name.title[0].plain_text}
            </h1>

            {/* EXCERPT */}
            <p>
              <TextParser text={item.properties.Excerpt.rich_text} />
            </p>

            {/* TIMESTAMP */}
            <div className="flex flex-row items-center mt-2 gap-x-2">
              <p className="font-mono text-xs text-neutral-500">
                {item.created_time_parsed}
              </p>
            </div>
          </a>
        </Link>
      ))}

      <br />
      <pre>{JSON.stringify(postsList, null, 1)}</pre>
    </div>
  );
}
