import Link from "next/link";

import ThreeSceneDark from "~/components/globe/dark/ThreeSceneDark";
import ThreeSceneLight from "~/components/globe/light/ThreeSceneLight";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="container max-w-2xl pt-24">
          <div>
            <h1 className="font-semibold leading-tight">Chad Fernandez</h1>
            <h2 className="leading-tight opacity-60">Web Developer</h2>
          </div>
          <div className="mt-6">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I&apos;m a multidisciplinary enthusiast, straddling the worlds of
              web development, design, and academia. Currently pursuing my
              Information Technology degree at the University of Antique, I
              channel my spare time into crafting digital experiences.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              className="h-fit rounded-md border bg-transparent px-2 py-0.5 text-black/60 shadow-none backdrop-blur-sm hover:bg-transparent hover:text-black dark:border-white/10 dark:bg-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
              asChild
            >
              <Link
                href="https://github.com/chof64"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/chof64
              </Link>
            </Button>
            <Button
              className="h-fit rounded-md border bg-transparent px-2 py-0.5 text-black/60 shadow-none backdrop-blur-sm hover:bg-transparent hover:text-black dark:border-white/10 dark:bg-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
              asChild
            >
              <Link
                href="mailto:contact@chadfernandez.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                mailto:contact@chadfernandez.me
              </Link>
            </Button>
          </div>
        </div>
        <div className="py-56" />
        <div className="absolute inset-x-0 top-56 -z-50 h-[52rem] w-full">
          <ThreeSceneDark />
          <ThreeSceneLight />
        </div>
      </section>
      <section className="container max-w-2xl">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I&apos;m fascinated by all things tech! I enjoy diving into the world
          of technology, whether it&apos;s building cool websites or managing
          service deployments with Docker. I&apos;m a fan of using JavaScript,
          especially Next.js, and I&apos;m drawn to a clean and minimal design
          style with the help of Tailwind CSS.
        </p>
      </section>
      {/* Add project portfolio here. At most 2 starred projects. */}
      <section className="container mt-6 max-w-2xl">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I have this urge to learn more and believe in learning by doing. So, I
          like to get my hands dirty and experiment with things. This hands-on
          approach helps me grasp concepts quicker and keeps me on a path of
          constant improvement. And I&apos;ve developed this platform—to share
          my journey and the exciting things I&apos;ve discover.
        </p>
      </section>
      {/* Add blog post list here. At most 2 latest blog post. */}
      <section className="container mb-32 mt-6 max-w-2xl">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If you&apos;re like me and enjoy exploring the fascinating world of
          technology, let&apos;s connect. Feel free to reach out - I&apos;m
          always up for a chat! Let&apos;s build, design, and learn together.
        </p>
      </section>
    </main>
  );
}
