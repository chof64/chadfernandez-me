import React from "react";
import Link from "next/link";
import { tags, readingTime } from "@tryghost/helpers";
import { format, differenceInHours, formatDistance } from "date-fns";

import Layout from "@/components/layout/Layout";
import Platform from "@/components/Platform";
import { authenticate } from "@/lib/ghost/authenticate";

export const getStaticProps = async () => {
  const ghost = authenticate();

  const posts = await ghost.posts.browse({
    limit: "all",
    order: "published_at DESC",
    filter: "tags:[hash-blog]",
    include: "tags,authors",
  });

  posts.forEach((post) => {
    const time = new Date(post.published_at);
    if (differenceInHours(new Date(), time) < 24) {
      post.date = formatDistance(time, new Date()) + " ago";
    } else {
      post.date = formatDistance(time, new Date());
      post.date = format(time, "MMMM do, yyyy");
    }
    post.postTags = tags(post, { separator: ", " });
    post.readingTime = readingTime(post, {
      minute: "1 minute read",
      minutes: "% minute read",
    });
  });

  const metadata = {
    title: "Blog",
    description:
      "I write about programming, and the world of technology. I also share things that I've learned along the way. I am Chad Fernandez, a web developer and a student.",
  };

  return {
    props: { posts, metadata },
    revalidate: 10,
  };
};

export default function Blog({ posts }) {
  return (
    <>
      <Platform className="mt-48 mb-16">
        <div className="">
          <h1 className="text-4xl text-slate-800 font-semibold">Blog</h1>
          <p className="text-neutral-800 max-w-sm font-medium mt-1">
            I write about programming, and the world of technology. I also share
            things that I&apos;ve learned along the way.
          </p>
        </div>
      </Platform>
      <Platform className="my-16">
        {posts.map((post) => (
          <div
            className="border-b-0 border-neutral-500 first:border-t-0 md:flex md:justify-between my-8"
            key={post.id}
          >
            <div className="md:block mt-4 hidden">
              <p className="text-sm text-slate-500 font-medium">{post.date}</p>
            </div>
            <Link href={`/blog/` + post.slug} className="md:w-2/3 py-2">
              <div className="">
                <p className="text-sm text-slate-500 font-medium md:hidden">
                  {post.date}
                </p>
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="line-clamp-2 text-neutral-800">{post.excerpt}</p>
                <p className="mt-2 hover:underline text-cyan-700 font-medium">
                  Read More --&gt;
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Platform>
    </>
  );
}

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
