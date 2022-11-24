// IMPORTS: External
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarClock as CalendarClockIcon,
  Star as StarIcon,
} from "lucide-react";

// IMPORTS: Layout
import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/main/Layout";
import Platform from "/src/components/main/Platform";

// IMPORTS: Components
import { RichTextRender } from "/src/modules/blog/TextAdapter";

// IMPORTS: Utilities
import {
  getDatabaseMetadata,
  getPostedDatabaseItems,
} from "/src/modules/blog/DatabaseDefault";
import { classMerge } from "/src/utils/TailwindUtilities";

// GET STATIC PROPS
export const getStaticProps = async () => {
  // get database metadata. page information.
  const DATABASE_METADATA = await getDatabaseMetadata(
    process.env.NOTION_BLOG_DB
  );

  // get database items/content. blog posts list.
  const DATABASE_ITEMS = await getPostedDatabaseItems(
    process.env.NOTION_BLOG_DB
  );

  return {
    props: {
      metadata: DATABASE_METADATA,
      items: DATABASE_ITEMS,
    },
    revalidate: 5,
  };
};

// DEFAULT EXPORT
export default function blog({ metadata, items }) {
  return (
    <>
      <Platform className="my-5 mt-10">
        <div
          id="blog-posts"
          className="mb-2 text-xl select-none -rotate-1 font-display text-blue-600/80"
        >{`<div id="blog-posts" />`}</div>
        <h1 className="text-2xl font-bold">{metadata.title[0].plain_text}</h1>
        <p className="text-sm text-neutral-700">
          <RichTextRender richText={metadata.description} />
        </p>
      </Platform>
      <Platform className="mt-16 mb-10">
        <div className="flex flex-col gap-y-3">
          {items.results.map((item, index) => (
            <Link key={index} href={`/blog/${item.slug}`}>
              <a
                className={classMerge(
                  "rounded-md border py-3 px-2 shadow-md",
                  item.properties.Status.status.name === "Pin"
                    ? "border-blue-500 hover:bg-blue-100 hover:backdrop-blur-md"
                    : "border-neutral-500 hover:bg-neutral-100 hover:backdrop-blur-md"
                )}
              >
                <p className="font-mono text-xs uppercase text-neutral-500">
                  {item.properties.Category.select.name}
                </p>
                <h1 className="text-xl font-semibold">
                  {item.properties.Name.title[0].plain_text}
                </h1>
                <p className="text-sm text-neutral-700">
                  <RichTextRender
                    richText={item.properties.Excerpt.rich_text}
                  />
                </p>
                <p className="mt-3 font-mono text-xs font-medium text-neutral-500">
                  {item.parsed_created_time}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </Platform>
    </>
  );
}

blog.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
