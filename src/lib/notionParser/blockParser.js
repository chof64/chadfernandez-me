import React, { Fragment } from "react";
import { richTextParser } from "./richTextParser";

export const blockParser = (block) => {
  if (!block) {
    console.log("Block Adapter received null.");
    return null;
  }

  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="mt-2 mb-4" id={id}>
          <Fragment>{richTextParser(value.rich_text)}</Fragment>
        </p>
      );
    case "heading_1":
      // TODO: Add support for toggleable heading 1.
      return (
        <h1
          className="mt-6 mb-2 text-2xl font-bold text-black md:text-3xl"
          id={id}
        >
          <Fragment>{richTextParser(value.rich_text)}</Fragment>
        </h1>
      );
    case "heading_2":
      // TODO: Add support for toggleable heading 2.
      return (
        <h2
          className="mt-6 mb-2 text-xl font-bold text-black md:text-2xl"
          id={id}
        >
          <Fragment>{richTextParser(value.rich_text)}</Fragment>
        </h2>
      );
    case "heading_3":
      // TODO: Add support for toggleable heading 3.
      return (
        <h3
          className="mt-6 mb-2 text-lg font-bold text-black md:text-xl"
          id={id}
        >
          <Fragment>{richTextParser(value.rich_text)}</Fragment>
        </h3>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";

      // TODO: Use rich text parser for caption.
      return (
        <div className="mt-6 mb-2">
          <div className="flex max-h-[28rem] min-h-min w-full flex-col items-center justify-center overflow-clip rounded-lg">
            <img src={src} alt={caption} className="aspect-auto w-full" />
          </div>
          <p className="text-sm text-neutral-500">{caption}</p>
        </div>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li id={id}>
          <Fragment>{richTextParser(value.rich_text)}</Fragment>
        </li>
      );
    case "divider":
      return (
        <hr className="mx-auto my-4 h-0.5 w-full border-0 bg-gray-200 md:my-6" />
      );
    default:
      return `❌ UnsupportedBlock: ${
        type === "unsupported" ? "unsupported by Notion API" : type
      }`;
  }
};
