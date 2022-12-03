import React from "react";
import { Heart as HeartIcon, Copyright as CopyrightIcon } from "lucide-react";

import Platform from "./Platform";
import { classMerge } from "/src/utils/classMerge";

export default function Footer({ className }) {
  return (
    <Platform className={classMerge("mb-4", className)}>
      <hr className="mb-4" />
      <div>
        <h1 className="font-bold">Chad Fernandez</h1>
        <p className="text-neutral-700">A self-taught fullstack developer.</p>
      </div>
      <p className="mt-4 select-none align-middle text-sm">
        <CopyrightIcon className="inline-block h-3 w-3" /> Chad Fernandez. Made
        with{" "}
        <HeartIcon className="inline-block h-3 w-3 fill-red-500 stroke-red-500" />
        .
      </p>
    </Platform>
  );
}
