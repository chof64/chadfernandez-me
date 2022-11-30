import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Header from "/src/components/blog/Header";
import PostList from "/src/components/blog/PostList";
import { getDbPostList } from "/src/lib/notionDatabase/getDbPostList";

export const getStaticProps = async () => {
  const posts = await getDbPostList("blog");

  return {
    props: {
      metadata: posts.metadata,
      items: posts.items,
    },
    revalidate: 10,
  };
};

export default function Blog({ metadata, items }) {
  return (
    <>
      <Header
        className="mt-16"
        data={{
          title: metadata.title[0].plain_text,
          description: metadata.description,
        }}
      />
      <PostList className="mt-16" data={items.results} test={items} />
    </>
  );
}

Blog.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
