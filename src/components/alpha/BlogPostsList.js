import React from "react";
import Link from "next/link";
import { TextParser, colorTextToTailwind } from "/src/utils/NotionUtilities";
import Image from "next/image";
import { classMerge } from "../../utils/TailwindUtilities";

export default function BlogPostsList(posts) {
  const postsList = posts.posts.results;
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {postsList.map((item, index) => (
        <Link key={index} href={"/blog/" + item.properties.Slug.formula.string}>
          <a className="px-3 py-2 bg-white border rounded-lg shadow h-fit border-neutral-500">
            <div className="mb-0.5 flex items-center gap-2 text-sm">
              {/* <p className="font-bold text-yellow-600">Featured</p> */}
              <p
                className={classMerge(
                  "rounded-md px-1.5 py-0.5 font-bold",
                  colorTextToTailwind(item.properties.Category.select.color)
                )}
              >
                {item.properties.Category.select.name.toUpperCase()}
              </p>
            </div>
            {item.cover !== null ? (
              <div className="relative w-full mb-2 shadow-md aspect-video">
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

            <h1 className="text-xl font-semibold">
              {item.properties.Name.title[0].plain_text}
            </h1>
            <p>
              <TextParser text={item.properties.Excerpt.rich_text} />
            </p>
            <div className="flex flex-row items-center mt-2 gap-x-2">
              <p className="font-mono text-xs">{item.created_time_parsed}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
