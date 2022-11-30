import React, { Fragment } from "react";
import Image from "next/image";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import PostHeader from "/src/components/blog/PostHeader";
import PostContent from "/src/components/blog/PostContent";

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
      <PostHeader
        className="mt-16"
        data={{
          title: metadata.properties.Name.title[0].plain_text,
          category: metadata.properties.Category.select.name,
          created_time: metadata.parsed_created_time,
        }}
      />
      <PostContent className="mt-16" data={content} />
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
