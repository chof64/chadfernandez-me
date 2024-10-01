import Link from "next/link";
import React from "react";

import { formatDate } from "~/lib/post/formatDate";

export default async function Post({ params }: { params: { slug: string } }) {
  // const post = await api.post.getBySlug({ slug: params.slug });

  return (
    <main className="container relative my-16 max-w-2xl px-6 sm:px-8">
      <div className="-left-40 my-12 align-middle text-sm xl:absolute xl:my-0">
        <Link
          className="typography-small text-neutral-500/60 transition-colors delay-100 duration-300 ease-in-out hover:text-cyan-700"
          href="/post"
        >
          &lt;- Back to posts
        </Link>
      </div>
      {/* <section>
        <p className="typography-small text-neutral-500">
          {formatDate(new Date(post.published_at!))}
        </p>
        <h1 className="typography-h1 mt-1.5">{post.title}</h1>
      </section>
      <section>
        <div
          className="prose prose-cyan mt-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section> */}
    </main>
  );
}
