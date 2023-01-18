import React from "react";

import { classMerge } from "/src/utils/classMerge";

export default function Platform({ children, className, type }) {
  switch (type) {
    case "read":
      return (
        <div
          className={classMerge("flex h-full flex-col items-center", className)}
        >
          <div className="h-full w-[95vw] md:w-[75vw] lg:w-[55vw]">
            {children}
          </div>
        </div>
      );

    case "navigation":
    case "page-header":
      return (
        <div
          className={classMerge("flex h-full flex-col items-center", className)}
        >
          <div className="h-full w-[95vw] md:w-[90vw] lg:w-[85vw]">
            {children}
          </div>
        </div>
      );

    default:
      return (
        <div
          className={classMerge("flex h-full flex-col items-center", className)}
        >
          <div className="h-full w-[95vw] md:w-[75vw] lg:w-[60vw]">
            {children}
          </div>
        </div>
      );
  }
}
