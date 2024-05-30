import React from "react";
import { Balancer } from "react-wrap-balancer";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import Globe from "~/components/magicui/globe";

export default function Home() {
  return (
    <main>
      <section className="container relative flex h-[44rem] w-full items-end">
        <div className="max-w-xl">
          <Balancer>
            <p className="font-caveat text-3xl font-bold text-sky-700 sm:text-4xl">
              A multidisciplinary enthusiast, straddling the worlds of
              programming, acamedia, and self learning.
            </p>
            <p className="font-medium text-neutral-500 sm:text-lg [&:not(:first-child)]:mt-6">
              Hi👋, I&apos;m Chad Fernandez, a student and a web developer from
              the Philippines🇵🇭. I&apos;m currently pursuing my Information
              Technology🎓 degree at the University of Antique and I channel my
              spare time into crafting digital experiences.
            </p>
          </Balancer>
          <div className="mt-6 flex w-full flex-col items-center gap-2 sm:w-fit sm:flex-row">
            <p className="mr-4 mt-1 font-caveat font-medium text-neutral-500 sm:-rotate-3">
              More about me{" "}
              <span className="hidden sm:inline-block">-&gt;</span>
            </p>
            <Button className="w-full sm:w-fit" size={"sm"}>
              <Link
                href="https://github.com/chof64"
                target="_blank"
                rel="noopenner noreferrer"
              >
                GitHub Profile
              </Link>
            </Button>
            <Button className="w-full sm:w-fit" variant={"ghost"} size={"sm"}>
              <Link href="mailto:contact@chadfernandez.me" target="_blank">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
        <Globe className="-z-10" />
      </section>
    </main>
  );
}
