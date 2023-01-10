import React from "react";
import { ChevronDown as ChevronDownIcon } from "lucide-react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import PlatformDefault from "/src/components/PlatformDefault";

export default function index() {
  return (
    <>
      <PlatformDefault>
        <div className="relative flex h-[100vh] w-full flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-neutral-800 md:text-5xl lg:text-6xl">
            Chad Fernandez
          </h1>
          <div className="mt-4 max-w-md space-y-2 text-neutral-600">
            <p>
              I&apos;m an all around{" "}
              <span className="font-hand text-lg font-bold text-blue-700">
                tech savvy
              </span>{" "}
              earthling.
            </p>
            <p>
              I&apos;m a self-taught full stack developer, working with Next.js,
              Tailwind CSS, and Python. I like building things and sharing them
              with the world.
            </p>
            <p>
              I&apos;m from the Philippines, and currently taking Bachelor of
              Science in Computer Science from the University of Antique.
            </p>
          </div>
          {/* <div className="absolute inset-x-0 bottom-0 flex w-full justify-center">
            <ChevronDownIcon className="h-8 w-8 animate-bounce text-neutral-400" />
          </div> */}
        </div>
      </PlatformDefault>
      {/* <div className="h-[100vh]" /> */}
    </>
  );
}

index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
