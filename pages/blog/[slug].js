import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import PostHeader from "/src/components/blog/PostHeader";
import PostContent from "/src/components/blog/PostContent";
import { getDbPostList } from "/src/lib/notionDatabase/getDbPostList";
import { getPostContent } from "/src/lib/notionPage/getPostContent";

export async function getStaticPaths() {
  const list = await getDbPostList("blog");

  const post_slug = list.items.results.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: post_slug,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const list = await getDbPostList("blog");
  const post = list.items.results.find((item) => item.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const post_content = await getPostContent(post.id);

  return {
    props: {
      slug: slug,
      metadata: post,
      content: post_content,
    },
    revalidate: 10,
  };
}

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
