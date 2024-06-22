import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { api } from "~/trpc/server";
import { formatDate } from "~/lib/post/formatDate";

import InlineTextLogo from "~/components/InlineTextLogo";
import ImageGrid from "~/components/ImageGrid";

export default async function Home() {
  const posts = await api.post.getLatest({ limit: 3 });

  return (
    <main className="container my-16 max-w-2xl px-6 sm:px-8">
      <p className="typography-p">
        Hey, I&apos;m Chad. I&apos;m a web developer and a student. I&apos;m
        currently pursuing my Information Technology degree at the{" "}
        <InlineTextLogo image="/logo/university-of-antique.png">
          University of Antique
        </InlineTextLogo>
        . I love building things for the web and exploring the world of
        computers. I&apos;m a fan of JavaScript, especially{" "}
        <InlineTextLogo image="/logo/nextjs.svg" href="https://nextjs.org/">
          Next.js
        </InlineTextLogo>
        , and I enjoy creating websites with{" "}
        <InlineTextLogo
          image="/logo/tailwindcss.svg"
          href="https://tailwindcss.com"
        >
          Tailwind CSS
        </InlineTextLogo>
        .
      </p>
      <ImageGrid />
      <p className="typography-p">
        I&apos;m facinated by all things tech! I enjoy diving into the world of
        technology, whether it&apos;s building websites or managing service
        deployment with{" "}
        <InlineTextLogo image="logo/docker.svg" href="https://www.docker.com/">
          Docker
        </InlineTextLogo>
        . Aside from web development, I also enjoy learning about cloud
        computing and cybersecurity. I build things, I host them, and I manage
        servers.
      </p>
      <p className="typography-p">
        I have this urge to learn more and believe in learning by doing. So, I
        like to get my hands dirty and experiment with things. This hands-on
        approach helps me grasp concepts quicker and keeps me on a path of
        constant improvement. You&apos;ll find me writing about my experiences
        and the things I learn along the way, check out some of my latest posts.
      </p>

      <div className="my-8 flex flex-col gap-2">
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`} key={post.id}>
            <div className="transition-colors-default rounded-sm border bg-gray-100/50 p-4 px-4 hover:bg-gray-200/80">
              <h2 className="font-semibold leading-none tracking-tight">
                {post.title}
              </h2>
              <div>
                <p className="inline-block text-xs leading-none text-neutral-500">
                  {formatDate(new Date(post.published_at!))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="typography-p">
        If you&apos;re like me and enjoy exploring the fascinating world of
        technology, let&apos;s connect. Feel free to reach out - I&apos;m always
        up for a chat! Let&apos;s build, design, and learn together.
      </p>

      <div className="my-8">
        <Link
          className="transition-colors-default font-medium text-neutral-500 hover:text-cyan-700"
          href="mailto:contact@chadfernandez.me"
        >
          <ArrowUpRightIcon className="mb-0.5 mr-1 inline-block h-5 w-5" />
          Send me a message
        </Link>
      </div>
    </main>
  );
}
