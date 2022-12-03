import React, { Fragment } from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";
import { blockParser } from "/src/lib/notionParser/blockParser";

export default function PostContent({ className, data }) {
  if (!data) {
    return <div>Post Content Error. No data received</div>;
  }

  return (
    <Platform className={classMerge("text-neutral-700", className)}>
      {data.map((block) => (
        <Fragment key={block.id}>{blockParser(block)}</Fragment>
      ))}
    </Platform>
  );
}
