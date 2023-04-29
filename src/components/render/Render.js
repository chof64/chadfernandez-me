import parse from "html-react-parser";
import { Fragment } from "react";
import Images from "./elements/Images";
import Links from "./elements/Links";

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
