import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Header from "/src/components/blog/Header";
import PostList from "/src/components/blog/PostList";

import {
  getDatabaseMetadata,
  getPostedDatabaseItems,
} from "/src/modules/blog/DatabaseDefault";

export const getStaticProps = async () => {
  // get database metadata. page information.
  const DATABASE_METADATA = await getDatabaseMetadata(
    process.env.NOTION_BLOG_DB
  );

  const DATABASE_ITEMS = await getPostedDatabaseItems(
    process.env.NOTION_BLOG_DB
  );

  return {
    props: {
      metadata: DATABASE_METADATA,
      items: DATABASE_ITEMS,
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
