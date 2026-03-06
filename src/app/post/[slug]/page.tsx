import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Hashnode removed: use local placeholder fetches

function dateFormatter(_d: string | Date | undefined) {
  if (!_d) return "";
  try {
    const d = typeof _d === "string" ? new Date(_d) : _d;
    return d.toLocaleDateString();
  } catch {
    return "";
  }
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () => {
  // No posts available while Hashnode integration is removed
  return [];
};

export default async function ReadPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  // Placeholder content until posts are migrated
  const post = {
    title: "Blog post coming soon",
    publishedAt: undefined,
    coverImage: null,
    content: { html: "<p>Content is being migrated.</p>" },
  };
  return (
    <div className="container my-20 max-w-2xl">
      <Link
        aria-label="Back to posts"
        className="mb-6 inline-flex items-center text-muted-foreground text-sm hover:underline"
        href="/post"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        All posts
      </Link>

      <article>
        <h1 className="mt-2 font-semibold text-4xl leading-tight">{post.title}</h1>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <time>{dateFormatter(post.publishedAt)}</time>
        </div>

        {post.coverImage ? (
          <div className="relative mt-8 mb-8 aspect-video w-full overflow-hidden rounded-sm">
            {/* coverImage removed */}
          </div>
        ) : null}

        <div
          className="prose prose-lg mt-10 max-w-none"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this is intended to render the HTML content
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </article>
    </div>
  );
}
