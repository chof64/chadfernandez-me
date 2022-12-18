import React from "react";

import { classMerge } from "/src/utils/classMerge";

export default function Platform({ children, className }) {
  return (
    <div className={classMerge("flex h-full w-full justify-center", className)}>
      <div className="h-full w-[95vw] md:w-[90vw] lg:w-[85vw]">{children}</div>
    </div>
  );
}
