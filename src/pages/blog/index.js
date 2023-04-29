import Layout from "@/components/layout/Layout";
import Platform from "@/components/Platform";
import { auth } from "@/lib/ghost/auth";
import { readingTime, tags } from "@tryghost/helpers";
import { differenceInHours, format, formatDistance } from "date-fns";
import Link from "next/link";

export const getStaticProps = async () => {
  const ghost = auth();

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
      // post.date = formatDistance(time, new Date());
      post.date = format(time, "MMMM do, yyyy");
    }
    post.post_tags = tags(post, { separator: ", " });
    post.reading_time = readingTime(post, {
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

export default function index({ posts }) {
  return (
    <>
      <Platform
        className="bg-gradient-to-b from-gray-100 via-gray-100 to-transparent pb-8 pt-48"
        type="lg"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="text-neutral-800">
            I write about programming, server, and other things tech. I also
            write to share the things I&apos;ve learned along the way.
          </p>
        </div>
      </Platform>
      <Platform className="pb-16 pt-8" type="lg">
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id}>
              <Link
                className="group/post space-y-1"
                href={`/blog/` + post.slug}
              >
                <h2 className="bg-gradient-to-r from-sky-800 to-purple-800 box-decoration-clone bg-clip-text font-semibold transition delay-75 duration-200 ease-in-out group-hover/post:text-transparent group-hover/post:underline group-hover/post:decoration-purple-800 group-hover/post:underline-offset-2 group-hover/post:after:content-['__-->']">
                  {post.title}
                </h2>
                <div>
                  <p className="line-clamp-2 text-neutral-600">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex space-x-4 text-xs text-neutral-800">
                    <p>
                      <time dateTime={post.published_at}>{post.date}</time>
                    </p>
                    <p>{post.reading_time}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Platform>
    </>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
