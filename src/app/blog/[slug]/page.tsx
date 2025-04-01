import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

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
        className="text-muted-foreground mb-16 inline-flex items-center"
      >
        <ArrowLeftIcon className="mr-2 size-4" /> Back to all posts
      </Link>

      <p className="text-muted-foreground space-x-4 text-sm">
        <span>{dateFormatter(post.publishedAt)}</span>
        <span>{post.readTimeInMinutes} min read</span>
      </p>

      <h1 className="mt-2 mb-4 text-3xl font-bold sm:text-4xl">{post.title}</h1>

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
        className="prose mt-16 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </div>
  );
}
