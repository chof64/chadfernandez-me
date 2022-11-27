import React from "react";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Platform({ children, className = "" }) {
  return (
    <div className={classMerge("flex flex-col items-center", className)}>
      <div className="w-[95vw] md:w-[75vw] lg:w-[60vw]">{children}</div>
    </div>
  );
}
