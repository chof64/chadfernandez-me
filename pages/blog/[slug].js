// IMPORTS: External
import React, { Fragment } from "react";
import Image from "next/image";
import {
  CalendarClock as CalendarClockIcon,
  FileClock as FileClockIcon,
} from "lucide-react";

// IMPORTS: Layout
import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Platform from "/src/components/Platform";

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
    revalidate: 10,
  };
}

// DEFAULT EXPORT
export default function BlogPost({ slug, metadata, content }) {
  if (!metadata || !content) {
    return <p>Content error</p>;
  }

  return (
    <>
      <Platform className="mt-10 mb-3">
        <div
          id="post"
          className="mb-2 -rotate-1 select-none font-display text-xl text-blue-600/80"
        >{`<div id="post" />`}</div>

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
        <div className="">
          <p className="font-mono text-sm uppercase text-neutral-500">
            {metadata.properties.Category.select.name}
          </p>
          <h1 className="text-2xl font-extrabold md:text-3xl">
            {metadata.properties.Name.title[0].plain_text}
          </h1>
        </div>
        <div>
          <p className="font-mono text-xs text-neutral-500">
            {metadata.parsed_created_time}
          </p>
        </div>
      </Platform>
      <Platform className="mt-5 mb-10 text-neutral-700">
        {content.map((block, index) => (
          <Fragment key={index}>{blockRenderer(block)}</Fragment>
        ))}
      </Platform>
    </>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
