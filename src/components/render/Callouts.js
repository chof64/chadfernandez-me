import React from "react";
import { domToReact, attributesToProps } from "html-react-parser";

import Links from "@components/render/Links";
import { classMerge } from "@utils/classMerge";

export default function Callouts({ html }) {
  const props = attributesToProps(html.attribs);
  return (
    <div
      {...props}
      className={classMerge(
        props.className,
        "my-4 inline-flex space-x-2 rounded-lg border border-neutral-400 p-2"
      )}
    >
      {domToReact(html.children, options)}
    </div>
  );
}

const options = {
  replace: (child) => {
    //? <div class="kg-callout-text">
    if (
      child.name === "div" &&
      child.attribs.class.includes("kg-callout-text")
    ) {
      const props = attributesToProps(child.attribs);
      return (
        <div {...props} className={classMerge(props.className, "text-lg")}>
          {domToReact(child.children, options)}
        </div>
      );
    }
    //? <div class="kg-callout-emoji">
    if (
      child.name === "div" &&
      child.attribs.class.includes("kg-callout-emoji")
    ) {
      const props = attributesToProps(child.attribs);
      return (
        <div {...props} className={classMerge(props.className, "text-lg")}>
          {domToReact(child.children, options)}
        </div>
      );
    }
    //? LINK
    if (child.name === "a") {
      return <Links html={child} />;
    }
  },
};
