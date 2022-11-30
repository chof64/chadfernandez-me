import React from "react";
import { Heart as HeartIcon, Copyright as CopyrightIcon } from "lucide-react";

import Platform from "./Platform";

export default function Footer() {
  return (
    <Platform className="mt-8 mb-2">
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
