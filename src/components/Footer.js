import React from "react";
import { Heart as HeartIcon, Copyright as CopyrightIcon } from "lucide-react";

import PlatformNavigation from "./navigation/PlatformNavigation";
import { classMerge } from "/src/utils/classMerge";

export default function Footer({ className }) {
  return (
    <PlatformNavigation
      className={classMerge(
        "mb-4 border-t border-neutral-300 bg-neutral-100 pt-4",
        className
      )}
    >
      <div>
        <h1 className="text-sm font-bold text-neutral-600">Chad Fernandez</h1>
        <p className="text-sm text-neutral-500">
          A self-taught fullstack developer.
        </p>
      </div>
      <p className="mt-4 select-none align-middle text-xs text-neutral-500">
        Copyright © Chad Fernandez. Made with{" "}
        <HeartIcon className="inline-block h-3 w-3 fill-red-500 stroke-red-500" />
        .
      </p>
    </PlatformNavigation>
  );
}
