import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main>
      <section className="mt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="relative aspect-square h-20 rounded-full">
            <Image src="/buttericon/icon.svg" alt="Buttericon" fill />
          </div>
          <h1 className="typo-h mt-4 text-xl font-semibold">Chad Fernandez</h1>
          <p className="text-sm text-neutral-500">Student and Web Developer</p>
          <p className="typo-p max-w-2xl text-sm">
            <Balancer>
              I'm a multidisciplinary enthusiast, straddling the worlds of web
              development, design, and academia. Currently pursuing my Computer
              Science degree at the University of Antique, I channel my spare
              time into crafting digital experiences.
            </Balancer>
          </p>
        </div>
      </section>
    </main>
  );
}
