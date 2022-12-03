import React from "react";

import Platform from "./../Platform";
import { classMerge } from "/src/utils/classMerge";

export default function Introduction({ className }) {
  return (
    <Platform className={classMerge("", className)}>
      <div className="max-w-md">
        <h1 className="text-3xl font-extrabold text-black md:text-4xl">
          Chad Fernandez.{" "}
          <span className="ml-1 select-none rounded border border-blue-700 bg-blue-100 py-0.5 px-1 align-middle text-xs font-medium text-blue-700">
            he/him
          </span>
        </h1>
        <p className="select-none text-xs font-light text-neutral-700">
          (A self-taught fullstack developer.)
        </p>
        <div className="mt-4 space-y-2 text-neutral-700">
          <p>
            I&apos;m an all around{" "}
            <span className="font-hand text-lg font-bold text-blue-700">
              tech savvy
            </span>{" "}
            earthling.
          </p>
          <p>
            I&apos;m from the Philippines, and currently taking Bachelor of
            Science in Computer Science from the University of Antique.
          </p>
          <p>
            I&apos;m a self-taught full stack developer, working with Next.js,
            and Python. I like building things and sharing them with the world.
          </p>
        </div>
      </div>
    </Platform>
  );
}
