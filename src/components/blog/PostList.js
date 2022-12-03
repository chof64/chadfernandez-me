import React from "react";
import Link from "next/link";

import Platform from "./../Platform";
import { classMerge } from "/src/utils/classMerge";
import { richTextParser } from "/src/lib/notionParser/richTextParser";

export default function PostList({ className, data }) {
  if (!data) {
    return <div>Post List Error. No data received</div>;
  }

  return (
    <Platform className={classMerge("", className)}>
      <div className="flex flex-col gap-y-3">
        {data.map((item) => (
          <Link href={`/blog/${item.slug}`} key={item.slug}>
            <a
              className={classMerge(
                "rounded border-2 bg-white p-3 shadow-md",
                item.properties.Status.status.name === "Pin"
                  ? "border-blue-500 hover:bg-blue-100"
                  : "border-neutral-500 hover:bg-neutral-100"
              )}
            >
              <p className="text-xs font-medium text-neutral-500">
                {item.properties.Category.select.name}
              </p>
              <h1 className="text-2xl font-bold">
                {item.properties.Name.title[0].plain_text}
              </h1>
              <p className="mt-4 text-sm text-neutral-700">
                {richTextParser(item.properties.Excerpt.rich_text)}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </Platform>
  );
}
