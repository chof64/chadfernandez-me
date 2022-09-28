//*

import React, { Fragment } from "react";

import Image from "next/image";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/alpha/Layout";
import { getPublishedPosts } from "../../src/lib/blog/NotionDatabase";
import { getPostById, getPageBlocks } from "../../src/lib/blog/NotionPage";
import {
  notionBlockAdapter,
  NotionTextFormatter,
} from "../../src/utils/NotionBlockParser";

export async function getStaticPaths() {
  const DB_POSTS = await getPublishedPosts(process.env.NOTION_BLOG_DB);

  //! As the site grows, pre-render only 10 latest posts
  //! including pinned posts.
  const POSTS_SLUG = DB_POSTS.results.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: POSTS_SLUG,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const DB_PUBLISHED = await getPublishedPosts(process.env.NOTION_BLOG_DB);
  const DB_QUERY_POST = DB_PUBLISHED.results.find((post) => post.slug === slug);

  if (!DB_QUERY_POST) {
    return {
      notFound: true,
    };
  }

  const PAGE = await getPostById(DB_QUERY_POST.id);
  const BLOCKS = await getPageBlocks(DB_QUERY_POST.id);

  //! Integrate on
  // GET CHILDREN BLOCKS
  const childBlocks = await Promise.all(
    BLOCKS.filter((block) => block.has_children).map(async (block) => {
      return {
        id: block.id,
        children: await getPageBlocks(block.id),
      };
    })
  );
  // CHECKS IF CHILDREN BLOCKS ARE ALREADY HANDLED, IF NOT, RUN childBlocks.
  const blocksWithChildren = BLOCKS.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: { slug: slug, page: PAGE, blocks: blocksWithChildren },
    revalidate: 1,
  };
}

export default function post({ slug, page, blocks }) {
  if (!page || !blocks) {
    return <p>Content error</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 w-[90vw] md:w-[75vw] lg:w-[60vw]">
        {page.cover != null ? (
          <div className="relative aspect-[16/7.5] w-full">
            <Image
              className="rounded-lg"
              src={page.cover.url}
              layout="fill"
              objectFit="cover"
              alt={page.cover.url}
            />
          </div>
        ) : (
          ""
        )}
        <h1 className="text-4xl font-bold">
          {page.properties.Name.title[0].plain_text}
        </h1>
        <div className="inline-flex text-sm gap-x-2">
          <p>Published: {page.created_time_parsed}</p>
          <p>(Updated: {page.last_edited_time_parsed})</p>
        </div>
        <p className="p-4 font-semibold text-md">
          <NotionTextFormatter text={page.properties.Excerpt.rich_text} />
        </p>
      </div>
      <section className="w-[90vw] md:w-[75vw] lg:w-[60vw]">
        {blocks.map((block) => (
          <Fragment key={block.id}>{notionBlockAdapter(block)}</Fragment>
        ))}
      </section>
      <div>
        <hr className="my-5" />

        <div>{slug}</div>
        <div>{JSON.stringify(page, null, 1)}</div>
        <h1 className="my-10">This is a barrier</h1>
        <div>{JSON.stringify(blocks, null, 1)}</div>
      </div>
    </div>
  );
}

post.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
