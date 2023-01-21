import React, { Fragment } from "react";
import parse from "html-react-parser";

import { options } from "@lib/render/options";

export default function Render({ data }) {
  return <Fragment>{parse(data.html, options)}</Fragment>;
}
