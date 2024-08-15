"use client";

import React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { staticImageLoader } from "~/lib/staticImageLoader";

export default function ImageGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "my-8 grid h-[36rem] grid-cols-2 grid-rows-4 gap-2 sm:h-[30rem] sm:grid-cols-3 sm:grid-rows-3",
        className,
      )}
    >
      <div className="relative col-span-1 row-span-2 aspect-auto h-full w-full">
        <Image
          className="rounded-xl object-cover object-center"
          loader={staticImageLoader}
          src="/imagegrid/hack4gov3-travel.jpeg"
          fill
          alt=""
          priority
        />
      </div>
      <div className="relative col-span-1 row-span-1 w-full">
        <Image
          className="rounded-xl object-cover object-center"
          loader={staticImageLoader}
          src="/imagegrid/hack4gov3-group.jpeg"
          fill
          alt=""
          priority
        />
      </div>
      <div className="relative col-span-1 row-span-2 aspect-auto h-full w-full sm:row-span-3">
        <Image
          className="rounded-xl object-cover object-center"
          loader={staticImageLoader}
          src="/imagegrid/hack4gov3-card.jpeg"
          fill
          alt=""
          priority
        />
      </div>
      <div className="relative w-full">
        <Image
          className="rounded-xl object-cover object-center"
          loader={staticImageLoader}
          src="/imagegrid/hack4gov3-team.jpeg"
          fill
          alt=""
          priority
        />
      </div>
      <div className="relative col-span-2 row-span-1 w-full">
        <Image
          className="rounded-xl object-cover object-center"
          loader={staticImageLoader}
          src="/imagegrid/hack4gov3-solo.jpeg"
          fill
          alt=""
          priority
        />
      </div>
    </div>
  );
}
