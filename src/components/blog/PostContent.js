import React, { Fragment } from "react";

import Platform from "/src/components/Platform";
import { blockParser } from "/src/lib/notionParser/blockParser";

export default function PostContent({ content }) {
  if (!content) {
    return <div>Post Content Error. Props not passed</div>;
  }

  return (
    <Platform className="mt-5 mb-10 text-neutral-700">
      {content.map((block) => (
        <Fragment key={block.id}>{blockParser(block)}</Fragment>
      ))}
    </Platform>
  );
}
