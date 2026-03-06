import PostCard from "~/components/post-card";

export default async function AllPostsPage() {
  // Hashnode removed: show placeholder until posts are migrated
  const posts: any[] = [];

  return (
    <div className="container my-16 max-w-2xl">
      <section>
        <h1 className="font-semibold text-xl">Latest Posts</h1>
      </section>
      <section className="mt-16">
        {posts.length === 0 ? (
          <p className="text-muted-foreground/60">Blog coming soon.</p>
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
