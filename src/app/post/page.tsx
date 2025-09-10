import PostCard from '~/components/post-card';
import { fetchBlogPosts } from '~/lib/hashnode/fetchPosts';

export const revalidate = 60;

export default async function AllPostsPage() {
  const posts = await fetchBlogPosts({ forceRefresh: true });

  return (
    <div className="container my-16 max-w-2xl">
      <section>
        <h1 className="font-semibold text-xl">Latest Posts</h1>
      </section>
      <section className="mt-16">
        {posts.length === 0 ? (
          <p className="text-muted-foreground/60">
            No blog posts found. Check back soon!
          </p>
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
