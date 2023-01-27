import React from "react";

import { classMerge } from "@/utils/classMerge";

export default function Platform({ children, className, type }) {
  switch (type) {
    case "minimal-9":
      return (
        <div className={classMerge("flex flex-col items-center", className)}>
          <div className="w-[95vw] md:w-[95vw] lg:w-[95vw]">{children}</div>
        </div>
      );

    default:
      return (
        <div className={classMerge("flex flex-col items-center", className)}>
          <div className="w-[95vw] md:w-[75vw] lg:w-[60vw]">{children}</div>
        </div>
      );
  }
}
