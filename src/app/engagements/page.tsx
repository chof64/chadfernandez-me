import PostCard from "~/components/post-card";

import { fetchSeriesPosts } from "~/lib/hashnode/fetch-series-posts";

export const revalidate = 60;
export const fetchCache = "force-cache";

export default async function EngagementsPage() {
  const posts = await fetchSeriesPosts("engagements");

  return (
    <div className="container my-16 max-w-2xl">
      <section>
        <h1 className="font-semibold text-xl">Engagements</h1>
      </section>
      <section className="mt-16">
        {posts.length === 0 ? (
          <p className="text-muted-foreground/60">No engagements found.</p>
        ) : (
          <div className="flex flex-col divide-y">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
