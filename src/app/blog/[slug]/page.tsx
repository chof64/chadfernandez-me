import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { fetchBlogPost } from "~/lib/hashnode/fetchBlogPost";
import { dateFormatter } from "~/lib/hashnode/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container my-16 max-w-2xl">
      <Link
        href="/blog"
        className="mb-16 inline-flex items-center text-muted-foreground"
      >
        <ArrowLeftIcon className="mr-2 size-4" /> Back to all posts
      </Link>

      <p className="space-x-4 text-muted-foreground text-sm">
        <span>{dateFormatter(post.publishedAt)}</span>
        <span>{post.readTimeInMinutes} min read</span>
      </p>

      <h1 className="mt-2 mb-4 font-bold text-3xl sm:text-4xl">{post.title}</h1>

      {post.coverImage && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-lg mt-16 max-w-none"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </div>
  );
}
