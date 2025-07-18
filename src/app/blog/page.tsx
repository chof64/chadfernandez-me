import Link from 'next/link';

import { fetchBlogPosts } from '~/lib/hashnode/fetchBlogPosts';
import { dateFormatter } from '~/lib/hashnode/utils';

export default async function Blog() {
  const posts = await fetchBlogPosts({ forceRefresh: true });

  return (
    <div className="container my-16 max-w-xl">
      <section>
        <h1 className="font-semibold text-xl">Latest Posts</h1>
      </section>
      <section className="mt-16">
        {posts.length === 0 ? (
          <p className="text-gray-500">No blog posts found. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <div
              className="border-b pb-4 transition-colors delay-75 duration-150 ease-in-out hover:border-foreground/60 hover:bg-muted/50 [&:not(:first-child)]:pt-6"
              key={post.title}
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="line-clamp-2 font-bold text-xl">{post.title}</h3>
                <p className="mt-3 line-clamp-3 font-serif text-muted-foreground/60 text-sm">
                  <span className="font-semibold">
                    {dateFormatter(post.publishedAt)}
                  </span>{' '}
                  &mdash; {post.brief}
                </p>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
