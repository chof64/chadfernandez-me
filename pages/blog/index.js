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
    revalidate: 30,
  };
};

// DEFAULT EXPORT
export default function blog({ metadata, items }) {
  return (
    <>
      <Platform className="my-5">
        <h1 className="text-3xl font-bold">{metadata.title[0].plain_text}</h1>
        <p className="">
          <RichTextRender richText={metadata.description} />
        </p>
      </Platform>
      <Platform className="my-10 mb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {items.results.map((item, index) => (
            <Link key={index} href={"/blog/" + item.slug}>
              <a className="mb-4">
                <div className="flex mx-1">
                  <p className="px-0.5 py-0.5 font-mono text-sm uppercase">
                    {item.properties.Category.select.name}
                  </p>
                </div>
                {item.cover !== null ? (
                  <div className="relative w-full rounded-lg aspect-video">
                    <Image
                      className="rounded-lg"
                      src={item.cover.url}
                      alt={item.cover.url}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                ) : (
                  ""
                )}
                <h1 className="flex mt-2 text-xl font-semibold leading-tight">
                  {item.properties.Status.status.name === "Pin" ? (
                    <StarIcon className="h-4 mt-1 aspect-square fill-yellow-600 stroke-yellow-600" />
                  ) : (
                    ""
                  )}
                  {item.properties.Name.title[0].plain_text}
                </h1>
                <p className="mt-1">
                  <RichTextRender
                    richText={item.properties.Excerpt.rich_text}
                  />
                </p>
                <div className="mt-1.5 flex gap-x-1 font-mono text-xs font-bold text-gray-400">
                  <p className="flex items-center">
                    <CalendarClockIcon className="aspect-square h-3.5" />
                    {item.parsed_created_time}
                  </p>
                </div>
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
