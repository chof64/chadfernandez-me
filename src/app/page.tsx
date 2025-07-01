import Image from "next/image";
import Link from "next/link";
import React from "react";

import HomeEngagements from "./HomeEngagements";

export default function PageIndex() {
  return (
    <div className="container my-16 max-w-2xl">
      <section className="mt-40 w-full">
        <Image
          className="h-60 w-48 rounded-xl object-cover"
          src="/hero-portrait.jpeg"
          width={192}
          height={240}
          alt="Portrait"
          priority
        />
        <h1 className="mt-8 font-semibold text-2xl">
          I&apos;m Chad Fernandez &mdash; web developer
        </h1>
        <p className="mt-2 text-balance font-semibold text-2xl text-muted-foreground/60">
          building web applications that make a difference in the community
        </p>
      </section>
      <section className="mt-24">
        <h2 className="font-semibold text-sm tracking-tight">About Me</h2>
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
        <h2 className="font-semibold text-sm tracking-tight">Contacts</h2>
        <p className="mt-6 leading-7">
          If you&apos;re like me and enjoy exploring the fascinating world of
          technology, let&apos;s connect. Feel free to reach out - I&apos;m
          always up for a chat! Let&apos;s build, design, and learn together.
        </p>
        <p className="mt-6">
          <Link
            className="font-medium text-muted-foreground underline transition-colors duration-300 ease-in-out hover:text-primary"
            href="mailto:contact@chadfernandez.me"
          >
            contact@chadfernandez.me
          </Link>
        </p>
        <p>
          <Link
            className="font-medium text-muted-foreground underline transition-colors duration-300 ease-in-out hover:text-primary"
            href="https://github.com/chof64"
          >
            github.com/chof64
          </Link>
        </p>
      </section>
    </div>
  );
}
