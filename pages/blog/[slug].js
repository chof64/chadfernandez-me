import React from "react";
import { tags, readingTime } from "@tryghost/helpers";
import { format, differenceInHours, formatDistance } from "date-fns";
import {
  CalendarClock as CalendarClockIcon,
  Tags as TagsIcon,
  Timer as TimerIcon,
} from "lucide-react";

import Layout from "@components/layout/Layout";
import Platform from "@components/Platform";
import Render from "@components/render/Render";
import { getSettings } from "@lib/ghostCms/getSettings";
import { authenticate } from "@lib/ghostCms/authenticate";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const settings = await getSettings();
  const api = authenticate();
  const post = await api.posts.read({
    slug: params.slug,
    include: ["tags", "authors"],
  });
  if (!post) {
    return {
      notFound: true,
    };
  }

  const time = new Date(post.published_at);
  if (differenceInHours(new Date(), time) < 24) {
    post.date = formatDistance(time, new Date()) + " ago";
  } else {
    post.date = formatDistance(time, new Date());
    post.date = format(time, "MMMM do, yyyy");
  }

  settings.pageTitle = post.title;
  settings.metaTitle = post.meta_title;
  return {
    props: {
      post,
      settings,
      slug: params.slug,
    },
    revalidate: 10,
  };
};

export default function BlogPost({ post, slug }) {
  return (
    <>
      <Platform className="bg-slate-100 pt-48 pb-8">
        <div className="flex space-x-4 text-sm font-light text-neutral-500">
          <p className="flex items-center uppercase">
            <TagsIcon className="mr-1 h-4 w-4" />
            {tags(post, { separator: ", " })}
          </p>
          <p className="flex items-center">
            <CalendarClockIcon className="mr-1 h-4 w-4" />
            {post.date}
          </p>
          <p className="flex items-center">
            <TimerIcon className="mr-1 h-4 w-4" />
            {readingTime(post, { minute: "1 min", minutes: "% mins" })}
          </p>
        </div>
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <p className="mt-2 font-semibold text-neutral-500">{post.excerpt}</p>
      </Platform>
      <Platform className="pt-8 pb-16">
        <div className="flex justify-center">
          <div className="prose prose-cyan max-w-none">
            <Render data={post.html} />
          </div>
        </div>
      </Platform>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
