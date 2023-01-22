import React from "react";

import Callouts from "@components/render/Callouts";
import Images from "@components/render/Images";
import Links from "@components/render/Links";

export const options = {
  replace: (html) => {
    if (!html.attribs) {
      return;
    }
    //? CALLOUT
    if (html.attribs.class?.includes("kg-callout-card")) {
      return <Callouts html={html} />;
    }
    //? SINGLE IMAGE
    if (html.attribs.class?.includes("kg-image-card")) {
      return <Images html={html} />;
    }
    //? LINK
    if (html.name === "a") {
      return <Links html={html} />;
    }
  },
};
