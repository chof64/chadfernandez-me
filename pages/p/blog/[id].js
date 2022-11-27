import React from "react";
import { useRouter } from "next/router";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/main/Layout";
import PostHeader from "/src/components/blog/PostHeader";
import PostContent from "/src/components/blog/PostContent";
import { resolvePageByNotionId } from "/src/lib/notionDatabase/resolvePageByNotionId";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const { metadata, content } = await resolvePageByNotionId(id);

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
      <PostContent content={content} />
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
