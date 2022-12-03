import React from "react";

import Platform from "./../Platform";
import { classMerge } from "/src/utils/classMerge";
import { richTextParser } from "/src/lib/notionParser/richTextParser";

export default function Header({ className, data }) {
  if (!data) {
    return <div>Header Error. No data received</div>;
  }

  return (
    <Platform className={classMerge("", className)}>
      <h1 className="text-3xl font-extrabold md:text-4xl">{data.title}</h1>
      <p className="mt-4 text-sm text-neutral-700">
        {richTextParser(data.description)}
      </p>
    </Platform>
  );
}
