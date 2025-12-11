import Link from "next/link";
import type { HashnodePostNode } from "~/lib/hashnode/types";
import { dateFormatter } from "~/lib/hashnode/utils";

export default function PostCard({ post }: { post: HashnodePostNode }) {
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
