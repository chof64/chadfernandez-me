import React from "react";
import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="my-8 grid h-[30rem] grid-cols-3 grid-rows-3 gap-2 brightness-90">
      <div className="relative col-span-1 row-span-2 aspect-auto h-full w-full">
        <Image
          className="rounded-xl object-cover object-center"
          src="/imagegrid/hack4govpoints.jpg"
          fill
          alt="Hack4Gov"
        />
      </div>
      <div className="relative col-span-1 row-span-1 w-full">
        <Image
          className="rounded-xl object-cover object-center"
          src="/imagegrid/hack4govteam.jpg"
          fill
          alt="Hack4Gov"
        />
      </div>
      <div className="relative col-span-1 row-span-3 aspect-auto h-full w-full">
        <Image
          className="rounded-xl object-cover object-center"
          src="/imagegrid/nstwsolo.jpg"
          fill
          alt="NSTW"
        />
      </div>
      <div className="relative w-full">
        <Image
          className="rounded-xl object-cover object-center"
          src="/imagegrid/hack4govteam2.jpg"
          fill
          alt="Hack4Gov"
        />
      </div>
      <div className="relative col-span-2 row-span-1 w-full">
        <Image
          className="rounded-xl object-cover object-center"
          src="/imagegrid/nstwteam.jpg"
          fill
          alt="NSTW"
        />
      </div>
    </div>
  );
}
