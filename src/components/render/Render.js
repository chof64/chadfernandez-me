import React, { Fragment } from "react";
import parse from "html-react-parser";

import Links from "./elements/Links";
import Images from "./elements/Images";

export default function Render({ html }) {
  return <Fragment>{parse(html, options)}</Fragment>;
}

const options = {
  replace: (html) => {
    if (!html.attribs) return;

    if (html.attribs.class?.includes("kg-image-card")) {
      return <Images html={html} />;
    }

    if (html.name === "a") {
      return <Links html={html} />;
    }
  },
};
