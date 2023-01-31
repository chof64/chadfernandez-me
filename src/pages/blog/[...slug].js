import React, { useState } from "react";
import { readingTime } from "@tryghost/helpers";
import { format, differenceInHours, formatDistance } from "date-fns";

import Layout from "@/components/layout/Layout";
import Platform from "@/components/Platform";
import Render from "@/components/render/Render";
import { authenticate } from "@/lib/ghost/authenticate";

export const getStaticPaths = async () => {
  const ghost = authenticate();
  const slug = await ghost.posts.browse({
    limit: 20,
    fields: ["slug"],
    order: "published_at DESC",
    filter: ["tags:[hash-prerender]", "tags:[hash-blog]"],
  });

  return {
    paths: slug.map((page) => ({
      params: { slug: [page.slug] },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  if (params.slug[1] === "edit") {
    return {
      redirect: {
        destination: `${process.env.GHOST_URL}/${params.slug[0]}/edit`,
        permanent: false,
      },
    };
  }

  const ghost = authenticate();
  const post = await ghost.posts
    .read({
      slug: params.slug[0],
      include: "tags",
    })
    .catch((err) => {
      return err.response;
    });

  if (post.status) {
    return {
      notFound: true,
    };
  }

  const time = new Date(post.published_at);
  if (differenceInHours(new Date(), time) < 24) {
    post.date = formatDistance(time, new Date()) + " ago";
  } else {
    post.date = format(time, "MMMM do, yyyy");
  }
  post.readingTime = readingTime(post, {
    minute: "1 minute read",
    minutes: "% minute read",
  });

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default function BlogPost({ post }) {
  return (
    <>
      <Platform className="mt-48 mb-16" type="max-w-2xl">
        <h1 className="text-4xl font-semibold text-slate-800">{post.title}</h1>
        <div className="divide-x-2 divide-dotted divide-slate-400 text-slate-500 text-sm max-w-lg mt-1">
          <p className="px-2 inline">{post.date}</p>
          <p className="px-2 inline">{post.readingTime}</p>
        </div>
        <div className="px-2 flex max-w-lg flex-wrap text-xs space-y-0.5 space-x-0.5">
          {post.tags.map((tag) => {
            if (tag.visibility !== "public") {
              return;
            }
            return (
              <div
                className="bg-slate-100 inline transition duration-200 delay-75 p-0.5 px-2 text-slate-500 border border-slate-200 hover:bg-slate-200 rounded-full font-medium"
                // href={`/tag/${tag.slug}`}
                key={tag.id}
              >
                {tag.name}
              </div>
            );
          })}
        </div>
      </Platform>
      <Platform className="my-16" type="max-w-2xl">
        <div className="prose prose-cyan max-w-none">
          <Render html={post.html} />
        </div>
      </Platform>
    </>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
