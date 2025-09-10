import Link from 'next/link';
import { fetchSeriesPosts } from '~/lib/hashnode/fetchSeriesPosts';
import { dateFormatter } from '~/lib/hashnode/utils';

export default async function EngagementsPage() {
  const posts = await fetchSeriesPosts('engagements', { forceRefresh: true });

  return (
    <div className="container my-16 max-w-xl">
      <section>
        <h1 className="font-semibold text-xl">Engagements</h1>
      </section>
      <section className="mt-16">
        {posts.length === 0 ? (
          <p className="text-gray-500">No engagements found.</p>
        ) : (
          posts.map((post) => (
            <div
              className="border-b pb-4 transition-colors delay-75 duration-150 ease-in-out hover:border-foreground/60 hover:bg-muted/50 [&:not(:first-child)]:pt-6"
              key={post.slug}
            >
              <Link href={`/post/${post.slug}`}>
                <h3 className="line-clamp-2 font-semibold text-xl tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-muted-foreground/60 text-sm">
                  <span className="font-medium italic">
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
