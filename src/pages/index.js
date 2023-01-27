import React from "react";

import Layout from "@/components/layout/Layout";
import Platform from "@/components/Platform";

export default function index() {
  return (
    <>
      <Platform className="mt-32 mb-16">
        <div className="text-4xl text-slate-600 font-semibold space-y-6 my-8">
          <h1>
            Hello. I&apos;m <span className="text-neutral-800">Chad</span>, a
            web developer, and a student from the Philippines.
          </h1>
          <h1>
            I am a self-taught web developer. Creating cool things with Next.js,
            Tailwind CSS, and Python.
          </h1>
          <h1>
            I am also a freshman at the University of Antique, taking up BS in
            Computer Science.
          </h1>
        </div>
        <div className="mt-32">
          <div className="first:border-t border-b flex flex-col border-neutral-500 lg:flex-row lg:justify-between">
            <h1 className="text-2xl font-semibold mt-4">about me</h1>
            <div className="lg:max-w-md w-full lg:divide-y divide-neutral-500">
              <div className="py-4">
                <h2 className="font-semibold text-xl">background</h2>
                <p>
                  My coding journey started in mid-2021 when I started learning
                  Python. But my interest in web development grow. So around
                  mid-2022, I started learning and using Next.js and Tailwind
                  CSS.
                  <br />
                  <br />
                  Right now, I am using Next.js and Tailwind CSS to build
                  websites. While at the same time, I am expanding my Python
                  knowledge with my university subjects.
                </p>
              </div>
              <div className="py-4">
                <h2 className="font-semibold text-xl">education</h2>
                <ul className="list-disc list-inside">
                  <li>
                    BS Computer Science, University of Antique (2022 - present)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="first:border-t border-b flex flex-col border-neutral-500 lg:flex-row lg:justify-between">
            <h1 className="text-2xl font-semibold mt-4">current</h1>
            <div className="lg:max-w-md w-full lg:divide-y divide-neutral-500">
              <div className="py-4">
                <h2 className="font-semibold text-xl">time zone</h2>
                <p>Philippine Standard Time (UTC+8)</p>
              </div>
              <div className="py-4">
                <h2 className="font-semibold text-xl">socials</h2>
                <p>
                  <a
                    className="underline text-slate-600 hover:text-cyan-800 font-medium transition duration-150"
                    href="https://github.com/chof64"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                  {", "}
                  <a
                    className="underline text-slate-600 hover:text-cyan-800 font-medium transition duration-150"
                    href="https://polywork.chadfernandez.me"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Polywork
                  </a>
                  {", and "}
                  <a
                    className="underline text-slate-600 hover:text-cyan-800 font-medium transition duration-150"
                    href="https://twitter.com/chof64"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Twitter
                  </a>
                </p>
              </div>
              <div className="py-4">
                <h2 className="font-semibold text-xl">contact</h2>
                <p>
                  I am open to new opportunities or collaboration. Feel free to
                  contact me.
                  <br />
                  <a
                    className="underline text-slate-600 hover:text-cyan-800 font-medium transition duration-150"
                    href="mailto:contact@chadfernandez.me"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    contact@chadfernandez.me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Platform>
    </>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
