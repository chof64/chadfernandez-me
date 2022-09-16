import React from "react";
import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/alpha/Layout";
import {
  getDatabaseObject,
  getPublishedPosts,
} from "/src/lib/blog/NotionDatabase";
import BlogPostsList from "/src/components/alpha/BlogPostsList";
import { TextParser } from "../../src/utils/NotionUtilities";

export const getStaticProps = async () => {
  const databaseQuery = await getPublishedPosts(process.env.NOTION_BLOG_DB);
  const databaseObject = await getDatabaseObject(process.env.NOTION_BLOG_DB);

  return {
    props: {
      posts: databaseQuery,
      metadata: databaseObject,
    },
    revalidate: 1,
  };
};

export default function blog({ posts, metadata }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 w-[90vw] md:w-[75vw] lg:w-[60vw]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="my-1">
            <TextParser text={metadata.description} />
          </p>
        </div>
        <BlogPostsList posts={posts} />
      </div>
    </div>
  );
}

blog.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
