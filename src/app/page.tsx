import React from "react";
import Image from "next/image";
import Link from "next/link";

import HomeEngagements from "./HomeEngagements";

export default function PageIndex() {
  return (
    <div className="container my-16 max-w-2xl">
      <section className="mt-40 w-full">
        <div className="relative h-60 w-48">
          <Image
            className="rounded-xl object-cover"
            src="/imagegrid/hack4gov3-travel.jpeg"
            fill
            alt="Portrait"
          />
        </div>
        <h1 className="mt-8 text-2xl font-semibold">
          I&apos;m Chad Fernandez &mdash; web developer
        </h1>
        <p className="text-muted-foreground/60 mt-2 text-2xl font-semibold text-balance">
          building web applications that make a difference in the community
        </p>
      </section>
      <section className="mt-24">
        <h2 className="text-sm font-semibold tracking-tight">About Me</h2>
        <p className="mt-6 leading-7">
          Driven by a love for technology and a mission to build web apps that
          matter. My passion for coding drives me to create functional,
          minimalistic websites that solve real-world problems.
        </p>
        <p className="mt-6 leading-7">
          I&apos;m a student studying Information Technology and on a journey of
          learning and growing as a web developer.
        </p>
      </section>
      <HomeEngagements />
      <section className="mt-24">
        <h2 className="text-sm font-semibold tracking-tight">Contacts</h2>
        <p className="mt-6 leading-7">
          If you&apos;re like me and enjoy exploring the fascinating world of
          technology, let&apos;s connect. Feel free to reach out - I&apos;m
          always up for a chat! Let&apos;s build, design, and learn together.
        </p>
        <p className="mt-6">
          <Link
            className="text-muted-foreground hover:text-primary font-medium underline transition-colors duration-300 ease-in-out"
            href="mailto:contact@chadfernandez.me"
          >
            contact@chadfernandez.me
          </Link>
        </p>
        <p>
          <Link
            className="text-muted-foreground hover:text-primary font-medium underline transition-colors duration-300 ease-in-out"
            href="https://github.com/chof64"
          >
            github.com/chof64
          </Link>
        </p>
      </section>
    </div>
  );
}
