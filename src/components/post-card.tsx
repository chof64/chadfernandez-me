import Link from "next/link";
type LocalPost = {
  slug: string;
  title: string;
  brief?: string;
  publishedAt?: string | Date;
  series?: { name?: string } | null;
};

function dateFormatter(_d: string | Date | undefined) {
  // Simple local formatter fallback
  try {
    if (!_d) return "";
    const d = typeof _d === "string" ? new Date(_d) : _d;
    return d.toLocaleDateString();
  } catch {
    return "";
  }
}

export default function PostCard({ post }: { post: LocalPost }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="group py-6" key={post.slug}>
        <h3 className="line-clamp-2 font-medium text-lg transition-colors duration-75 ease-out group-hover:text-cyan-600">
          {post.title}
        </h3>
        <div className="mt-3">
          <p className="line-clamp-3 text-muted-foreground/70 text-sm">
            {post.brief}
          </p>
          <div className="mt-3 flex items-center gap-4 text-muted-foreground/80 text-xs">
            <time>{dateFormatter(post.publishedAt)}</time>
            {post.series?.name ? <span>{post.series.name}</span> : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
