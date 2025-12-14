import Link from "next/link";

import { fetchSeriesPosts } from "~/lib/hashnode/fetch-series-posts";

import { dateFormatter } from "~/lib/hashnode/utils";

export default async function HomeEngagements() {
  const engagementsSeries = await fetchSeriesPosts("engagements");

  if (engagementsSeries.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Engagements</h2>
        <Link className="text-muted-foreground/80 text-sm" href="/engagements">
          View all →
        </Link>
      </div>

      <ul className="mt-4 space-y-3">
        {engagementsSeries.slice(0, 3).map((engagement) => (
          <li key={engagement.title}>
            <Link
              className="block rounded-md p-3 transition-colors hover:bg-muted/50"
              href={`/post/${engagement.slug}`}
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4">
                <div className="min-w-0">
                  <h3 className="line-clamp-2 font-medium text-base">
                    {engagement.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-muted-foreground/70 text-sm">
                    {engagement.brief}
                  </p>
                </div>

                <time className="mt-2 whitespace-nowrap text-muted-foreground/70 text-sm sm:mt-0">
                  {dateFormatter(engagement.publishedAt)}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
