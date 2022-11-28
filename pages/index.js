import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Platform from "/src/components/Platform";
import ContactCard from "/src/components/contact/ContactCard";

export default function index() {
  return (
    <>
      {/* HERO: INTRODUCTION */}
      <div>
        <Platform className="mt-36">
          <div
            id="introduction"
            className="mb-2 -rotate-1 select-none font-display text-xl text-blue-600/80"
          >{`<div id="introduction" />`}</div>
          <div className="max-w-md">
            <h1 className="text-2xl font-bold text-black">
              👋Hi, I&apos;m Chad Fernandez.{" "}
              <span className="ml-1 select-none rounded border border-blue-600 py-0.5 px-1 align-middle font-mono text-xs text-blue-600">
                he/him
              </span>
            </h1>
            <div className="text-neutral-700">
              <p>
                I&apos;m an all around{" "}
                <span className="font-hand text-lg font-bold text-blue-700">
                  tech savvy
                </span>{" "}
                earthling.
              </p>
              <p className="mt-2">
                I&apos;m from the Philippines, and currently taking Bachelor of
                Science in Computer Science from the University of Antique.
              </p>
              <p className="mt-2">
                I&apos;m also an aspiring web developer, working with Next.js,
                and Python programmer. I like building things and sharing them
                with the world.
              </p>
            </div>
          </div>
        </Platform>
        <ContactCard />
      </div>
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
