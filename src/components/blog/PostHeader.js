import React from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function PostHeader({ className, data }) {
  const { title, category, created_time: createdTime } = data;

  if (!data) {
    return <div>Post Header Error. Props not passed</div>;
  }

  return (
    <Platform className={classMerge("", className)}>
      <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
      <div className="mt-2 inline-flex space-x-2">
        <p className="rounded-lg border border-blue-700 bg-blue-100 px-1.5 align-middle text-sm font-medium uppercase text-blue-700">
          {category}
        </p>
        <p className="align-middle text-sm text-neutral-700">{createdTime}</p>
      </div>
    </Platform>
  );
}
