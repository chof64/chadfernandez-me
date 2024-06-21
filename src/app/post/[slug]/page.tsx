import Link from "next/link";
import React from "react";

import { api } from "~/trpc/server";
import { formatDate } from "~/lib/post/formatDate";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await api.post.getBySlug({ slug: params.slug });

  return (
    <main className="container relative my-16 max-w-2xl">
      <div className="absolute -left-40 align-middle text-sm">
        <Link
          className="typography-small text-neutral-500/60 transition-colors delay-100 duration-300 ease-in-out hover:text-neutral-800"
          href="/post"
        >
          &lt;- Back to posts
        </Link>
      </div>
      <section>
        <p className="typography-small text-neutral-500">
          {formatDate(new Date(post.published_at!))}
        </p>
        <h1 className="typography-h1 mt-1.5">{post.title}</h1>
      </section>
      <section>
        <div
          className="prose prose-cyan prose-headings:text-cyan-700 mt-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </main>
  );
}
