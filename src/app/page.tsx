import Link from "next/link";
import ThreeScene from "~/components/globe/ThreeScene";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="container max-w-2xl pt-32">
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
              className="h-fit rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-white backdrop-blur-sm hover:border-white/20 hover:bg-white/20 "
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
              className="h-fit rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-white backdrop-blur-sm hover:border-white/20 hover:bg-white/20"
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
        <div className="absolute inset-x-0 top-64 -z-50 h-[52rem] w-full">
          <ThreeScene />
        </div>
      </section>

      <section>
        <div className="container max-w-2xl">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I&apos;m fascinated by all things tech! I enjoy diving into the
            world of technology, whether it&apos;s building cool websites or
            managing service deployments with Docker. I&apos;m a fan of using
            JavaScript, especially Next.js, and I&apos;m drawn to a clean and
            minimal design style with the help of Tailwind CSS.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <div className="container max-w-2xl">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I have this urge to learn more and believe in learning by doing. So,
            I like to get my hands dirty and experiment with things. This
            hands-on approach helps me grasp concepts quicker and keeps me on a
            path of constant improvement. And I&apos;ve developed this
            platform—to share my journey and the exciting things I&apos;ve
            discover.
          </p>
        </div>
      </section>
      <section className="mb-32 mt-6">
        <div className="container max-w-2xl">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you&apos;re like me and enjoy exploring the fascinating world of
            technology, let&apos;s connect. Feel free to reach out - I&apos;m
            always up for a chat! Let&apos;s build, design, and learn together.
          </p>
        </div>
      </section>
    </main>
  );
}
