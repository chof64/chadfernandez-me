import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import PostHeader from "/src/components/blog/PostHeader";
import PostContent from "/src/components/blog/PostContent";
import { getPageByNotionId } from "/src/lib/notionPage/getPageByNotionId";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const { metadata, content } = await getPageByNotionId(id);

  return {
    props: {
      id,
      metadata,
      content,
    },
  };
}

export default function PreviewPostPage({ id, metadata, content }) {
  return (
    <>
      <PostHeader
        data={{
          title: metadata.properties.Name.title[0].plain_text,
          category: metadata.properties.Category.select.name,
          created_time: metadata.parsed_created_time,
        }}
      />
      <PostContent data={content} />
    </>
  );
}

PreviewPostPage.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
