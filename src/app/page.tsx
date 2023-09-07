import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="mx-4">
      <section className="mx-auto my-8 mt-16 max-w-lg">
        <h1 className="h1">hey, I&apos;m Chad👋</h1>
        <p className="p">
          I&apos;m a multidisciplinary enthusiast, straddling the worlds of web
          development, design, and academia. Currently pursuing my{" "}
          <span className="font-medium text-black">Computer Science</span>{" "}
          degree at the University of Antique, I channel my spare time into
          crafting digital experiences.
        </p>
      </section>

      <section className="mx-auto my-8 max-w-lg">
        <div className="relative h-52 rounded-lg shadow md:h-64 transition delay-150 duration-100 ease-in hover:rotate-2">
          <Image
            className="rounded-lg bg-gradient-to-br from-sky-200 to-purple-200 object-cover object-center"
            src="https://res.cloudinary.com/dmk5o9frj/image/upload/f_auto,q_auto/v1693036339/chadfernandez.me/Home/hack4gov-group_dgfd0w.jpg"
            fill
            alt="HackForGov 2 Group Photo"
          />
        </div>
        <div className="mt-3 columns-2 gap-3">
          <div className="relative h-52 rounded-lg shadow md:h-64 transition delay-150 duration-100 ease-in hover:-rotate-2">
            <Image
              className="rounded-lg bg-gradient-to-br from-sky-200 to-purple-200 object-cover object-bottom"
              src="https://res.cloudinary.com/dmk5o9frj/image/upload/f_auto,q_auto/v1693036340/chadfernandez.me/Home/hack4gov-table_du5e93.jpg"
              fill
              alt="HackForGov 2 Photo"
            />
          </div>
          <div className="relative h-52 rounded-lg shadow md:h-64 transition delay-150 duration-100 ease-in hover:rotate-2">
            <Image
              className="rounded-lg bg-gradient-to-br from-sky-200 to-purple-200 object-cover object-center"
              src="https://res.cloudinary.com/dmk5o9frj/image/upload/f_auto,q_auto/v1693036336/chadfernandez.me/Home/hack4gov-solo_vhsxsy.jpg"
              fill
              alt="HackForGov 2 Solo Photo"
            />
          </div>
        </div>
        <div className="mt-2">
          <p className={cn("muted text-center text-xs")}>
            HackForGov 2 Competition by DICT Region VI (Aug 18, 2023).
          </p>
        </div>
      </section>

      <section className="mx-auto my-8 max-w-lg">
        <p className="p">
          I&apos;m fascinated by all things tech! I enjoy diving into the world
          of technology, whether it&apos;s building cool websites or managing
          service deployments with Docker. I&apos;m a fan of using JavaScript,
          especially Next.js, and I&apos;m drawn to a clean and minimal design
          style with the help of Tailwind CSS.
        </p>
      </section>

      {/* INSERT SOME CASE STUDIES HERE, AT MOST 2 ITEMS */}

      <section className="mx-auto my-8 max-w-lg">
        <p className="p">
          I have this urge to learn more and believe in learning by doing. So, I
          like to get my hands dirty and experiment with things. This hands-on
          approach helps me grasp concepts quicker and keeps me on a path of
          constant improvement. And I&apos;ve developed this platform—to share
          my journey and the exciting things I&apos;ve discover.
        </p>
      </section>

      {/* INSERT SOME BLOG POST HERE, AT MOST 3 ITEMS */}

      <section className="mx-auto my-8 mb-2 max-w-lg">
        <p className="p">
          If you're like me and enjoy exploring the fascinating world of
          technology, let's connect. Feel free to reach out - I'm always up for
          a chat!
        </p>
        <p className="p">Let&apos;s build, design, and learn together.</p>
      </section>
      <section className="mx-auto my-8 mb-16 mt-2 max-w-lg">
        <div className="relative aspect-video h-12">
          <Image className="" src="/chad.svg" fill alt="Handwriting" />
        </div>
      </section>
    </main>
  )
}
