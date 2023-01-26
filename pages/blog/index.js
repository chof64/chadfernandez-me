import React from "react";
import Link from "next/link";
import { tags, readingTime } from "@tryghost/helpers";
import { format, differenceInHours, formatDistance } from "date-fns";
import {
  CalendarClock as CalendarClockIcon,
  Timer as TimerIcon,
} from "lucide-react";

import Layout from "@components/layout/Layout";
import Platform from "@components/Platform";
import { getSettings } from "@lib/ghostCms/getSettings";
import { authenticate } from "@lib/ghostCms/authenticate";

export const getStaticProps = async () => {
  const api = authenticate();
  const settings = await getSettings();

  const metadata = await api.tags.read({ slug: "hash-blog" });
  const posts = await api.posts.browse({
    filter: "tags:[hash-blog]",
    order: "published_at DESC",
    include: ["tags"],
  });
  posts.forEach((post) => {
    const time = new Date(post.published_at);
    if (differenceInHours(new Date(), time) < 24) {
      post.date = formatDistance(time, new Date()) + " ago";
    } else {
      post.date = formatDistance(time, new Date());
      post.date = format(time, "MMMM do, yyyy");
    }
  });

  settings.pageTitle = "Blog";

  return {
    props: { posts, settings, metadata },
    revalidate: 10,
  };
};

export default function Blog({ posts, metadata }) {
  return (
    <>
      <Platform className="border-b bg-gray-50 pt-32 pb-8">
        <h1 className="text-5xl font-semibold">Blog</h1>
        {metadata.description && (
          <p className="mt-2 max-w-md">{metadata.description}</p>
        )}
      </Platform>
      <Platform className="py-4">
        <div className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <Link key={post.id} href={"/blog/" + post.slug}>
              <div className="space-y-0.5 rounded border border-neutral-300 bg-white p-3 transition delay-100 duration-150 hover:border-neutral-400 hover:bg-gray-50 hover:shadow-lg">
                <p className="text-sm uppercase text-neutral-500">
                  {tags(post, { separator: ", " })}
                </p>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-neutral-700">{post.excerpt}</p>
                <div className="flex space-x-6 text-neutral-500">
                  <p className="flex items-center text-xs">
                    <CalendarClockIcon className="mr-1 h-4 w-4" />
                    {post.date}
                  </p>
                  <p className="flex items-center text-xs">
                    <TimerIcon className="mr-1 h-4 w-4" />
                    {readingTime(post, {
                      minute: "1 minute read",
                      minutes: "% minute read",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Platform>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    </>
  );
}

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
