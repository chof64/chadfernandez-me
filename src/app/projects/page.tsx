import PostCard from "~/components/post-card";

import { fetchSeriesPosts } from "~/lib/hashnode/fetch-series-posts";

export default async function ProjectsPage() {
  const posts = await fetchSeriesPosts("projects");

  return (
    <div className="container my-16 max-w-2xl">
      <section>
        <h1 className="font-semibold text-xl">Projects</h1>
      </section>
      <section className="mt-16">
        {posts.length === 0 ? (
          <p className="text-muted-foreground/60">No projects found.</p>
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
