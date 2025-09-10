import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBlogPost } from '~/lib/hashnode/fetchPost';
import { dateFormatter } from '~/lib/hashnode/utils';

export const revalidate = 60;
export const fetchCache = 'force-cache';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ReadPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug, { forceRefresh: true });

  if (!post) {
    notFound();
  }

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
        <h1 className="mt-2 font-semibold text-4xl leading-tight">
          {post.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <time>{dateFormatter(post.publishedAt)}</time>
        </div>

        {post.coverImage && (
          <div className="relative mt-8 mb-8 aspect-video w-full overflow-hidden rounded-sm">
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
          className="prose prose-lg mt-10 max-w-none"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this is intended to render the HTML content
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </article>
    </div>
  );
}
