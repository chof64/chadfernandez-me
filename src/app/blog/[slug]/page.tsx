import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { fetchBlogPost } from '~/lib/hashnode/fetchBlogPost';
import { dateFormatter } from '~/lib/hashnode/utils';

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
    <div className="container my-16 max-w-xl">
      <Link
        className="mb-8 inline-flex items-center font-serif text-muted-foreground"
        href="/blog"
      >
        <ArrowLeftIcon className="mr-2 size-4" /> Back to all posts
      </Link>

      <h1 className="mt-2 mb-4 font-bold text-3xl sm:text-4xl">{post.title}</h1>
      <p className="space-x-4 text-muted-foreground text-sm">
        <span>{dateFormatter(post.publishedAt)}</span>
        <span>{post.readTimeInMinutes} min read</span>
      </p>

      {post.coverImage && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            alt={post.title}
            className="object-cover"
            fill
            priority
            src={post.coverImage.url}
          />
        </div>
      )}

      <div
        className="prose prose-lg mt-16 max-w-none font-serif prose-headings:font-sans"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is intended to render the HTML content
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </div>
  );
}
