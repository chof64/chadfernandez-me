import Link from 'next/link';
import { fetchSeriesPosts } from '~/lib/hashnode/fetchSeriesPosts';
import { dateFormatter } from '~/lib/hashnode/utils';

export default async function HomeEngagements() {
  const engagementsSeries = await fetchSeriesPosts('engagements', {
    forceRefresh: true,
  });

  if (engagementsSeries.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Engagements</h2>
        <button className="text-xs " type="button">
          <Link href="/engagements">View more</Link>
        </button>
      </div>
      <div className="mt-6">
        {engagementsSeries.map((engagement) => (
          <div
            className="border-b pb-4 transition-colors delay-75 duration-150 ease-in-out hover:border-foreground/60 hover:bg-muted/50 [&:not(:first-child)]:pt-4"
            key={engagement.title}
          >
            <Link href={`/post/${engagement.slug}`}>
              <h3 className="line-clamp-2 font-semibold">{engagement.title}</h3>
              <p className="line-clamp-1 space-x-4 text-muted-foreground/60 text-sm">
                <span className="font-medium italic">
                  {dateFormatter(engagement.publishedAt)}
                </span>{' '}
                &mdash; {engagement.brief}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
