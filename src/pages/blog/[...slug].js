import Platform from "@/components/Platform";
import Layout from "@/components/layout/Layout";
import Render from "@/components/render/Render";
import { auth } from "@/lib/ghost/auth";
import { readingTime } from "@tryghost/helpers";
import { differenceInHours, format, formatDistance } from "date-fns";

export const getStaticPaths = async () => {
  const ghost = auth();
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

  const ghost = auth();
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
  post.reading_time = readingTime(post, {
    minute: "1 minute read",
    minutes: "% minute read",
  });

  const metadata = {
    title: post.title,
    description: post.excerpt,
  };

  return {
    props: {
      metadata,
      post,
    },
    revalidate: 10,
  };
};

export default function BlogPost({ post }) {
  return (
    <>
      <Platform
        className="bg-gradient-to-b from-gray-100 via-gray-100 to-transparent pb-8 pt-48"
        type="lg"
      >
        <div>
          {/* <Link
            className="text-sm font-medium text-neutral-600 transition delay-75 duration-200 ease-in-out hover:text-neutral-800"
            href="/blog"
          >
            {"<-- Go back to blog"}
          </Link> */}
          <h1 className="text-2xl font-semibold lg:text-3xl">{post.title}</h1>
          <div className="inline-flex space-x-4 text-sm text-neutral-800">
            <p>
              <time dateTime={post.published_at}>{post.date}</time>
            </p>
            <p>{post.reading_time}</p>
          </div>
        </div>
      </Platform>
      <Platform className="pb-16 pt-8" type="lg">
        <div className="prose prose-sky max-w-lg">
          <Render html={post.html} />
        </div>
      </Platform>
    </>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
