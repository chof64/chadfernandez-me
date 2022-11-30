import React from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function PostHeader({ className, data }) {
  const { title, category, created_time: createdTime } = data;

  if (!data) {
    return <div>Post Header Error. Props not passed</div>;
  }

  return (
    <Platform className={classMerge("mt-10 mb-3", className)}>
      <p className="font-mono text-sm uppercase text-neutral-500">{category}</p>
      <h1 className="text-2xl font-extrabold md:text-3xl">{title}</h1>
      <p className="font-mono text-xs text-neutral-500">{createdTime}</p>
    </Platform>
  );
}
