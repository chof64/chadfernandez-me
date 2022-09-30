// IMPORTS: External
import React, { Fragment } from "react";
import Image from "next/image";
import {
  CalendarClock as CalendarClockIcon,
  FileClock as FileClockIcon,
} from "lucide-react";

// IMPORTS: Layout
import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/main/Layout";
import Platform from "/src/components/main/Platform";

// IMPORTS: Components
import { RichTextRender, blockRenderer } from "/src/modules/blog/TextAdapter";

// IMPORTS: Utilities
import { getPostedDatabaseItems } from "/src/modules/blog/DatabaseDefault";
import { getPostContent } from "../../src/modules/blog/PostsDefault";

// GET STATIC PATHS
export async function getStaticPaths() {
  // TODO: Get 10 pinned and latest posts to be pre-rendered.
  const POSTED_ITEMS = await getPostedDatabaseItems(process.env.NOTION_BLOG_DB);
  const POSTED_SLUG = POSTED_ITEMS.results.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: POSTED_SLUG,
    fallback: true,
  };
}

// GET STATIC PROPS
export async function getStaticProps(context) {
  const { slug } = context.params;

  const POSTED_ITEMS = await getPostedDatabaseItems(process.env.NOTION_BLOG_DB);
  const POST = POSTED_ITEMS.results.find((post) => post.slug === slug);

  if (!POST) {
    return {
      notFound: true,
    };
  }

  const POST_CONTENT = await getPostContent(POST.id);

  return {
    props: {
      slug: slug,
      metadata: POST,
      content: POST_CONTENT,
    },
    revalidate: 30,
  };
}

// DEFAULT EXPORT
export default function post({ slug, metadata, content }) {
  if (!metadata || !content) {
    return <p>Content error</p>;
  }

  return (
    <>
      <Platform className="mt-10 mb-5">
        {metadata.cover !== null ? (
          <div className="relative mb-2 aspect-video w-full rounded-lg md:aspect-[16/7]">
            <Image
              className="rounded-lg"
              src={metadata.cover.url}
              alt={metadata.cover.url}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ) : (
          ""
        )}
        <div>
          <p className="font-mono text-sm uppercase">
            {metadata.properties.Category.select.name}
          </p>
          <h1 className="text-2xl font-bold md:text-3xl">
            {metadata.properties.Name.title[0].plain_text}
          </h1>
        </div>
        <div>
          <div className="p-1 border border-b-0 rounded-t-md bg-gray-50 md:flex md:items-center md:gap-3 md:border-0 md:bg-transparent">
            <p className="flex items-center font-mono text-sm text-gray-400">
              <CalendarClockIcon className="h-4 aspect-square" />
              {metadata.parsed_created_time}
            </p>
            <p className="flex items-center font-mono text-sm text-gray-400">
              <FileClockIcon className="h-4 aspect-square" />
              {metadata.parsed_last_edited_time}
            </p>
          </div>
          <div className="p-1 border border-t-0 rounded-b-md bg-gray-50 md:rounded-md md:border">
            <span className="font-mono text-xs font-bold text-gray-400">
              EXCERPT
            </span>
            <p className="text-gray-600">
              <RichTextRender
                richText={metadata.properties.Excerpt.rich_text}
              />
            </p>
          </div>
        </div>
      </Platform>
      <section>
        <Platform>
          {content.map((block, index) => (
            <Fragment key={index}>{blockRenderer(block)}</Fragment>
          ))}
        </Platform>
      </section>
    </>
  );
}

post.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
