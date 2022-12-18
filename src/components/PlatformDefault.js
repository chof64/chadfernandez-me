import React from "react";

import { classMerge } from "/src/utils/classMerge";

export default function Platform({ children, className }) {
  return (
    <div className={classMerge("flex h-full flex-col items-center", className)}>
      <div className="h-full w-[95vw] md:w-[75vw] lg:w-[60vw]">{children}</div>
    </div>
  );
}
