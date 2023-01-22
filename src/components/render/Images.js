import React from "react";
import { domToReact, attributesToProps } from "html-react-parser";

import { classMerge } from "@utils/classMerge";

export default function Images({ html }) {
  const props = attributesToProps(html.attribs);
  return (
    <figure
      {...props}
      className={classMerge(
        props.className,
        "not-prose my-4 flex flex-col items-center"
      )}
    >
      {domToReact(html.children, options)}
    </figure>
  );
}

const options = {
  replace: (child) => {
    //? <img>
    if (child.name === "img") {
      child.attribs.src = child.attribs.src.replace("http://", "https://");
      child.attribs.srcset = child.attribs.srcset.replaceAll(
        "http://",
        "https://"
      );
      const props = attributesToProps(child.attribs);
      return (
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        <img {...props} className={classMerge(props.className, "rounded-md")} />
      );
    }
    //? <figcaption>
    if (child.name === "figcaption") {
      const props = attributesToProps(child.attribs);
      return (
        <figcaption
          {...props}
          className={classMerge(props.className, "text-sm")}
        >
          {domToReact(child.children, options)}
        </figcaption>
      );
    }
  },
};
