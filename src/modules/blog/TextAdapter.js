import { ExternalLink as ExternalLinkIcon } from "lucide-react";

import { classMerge } from "/src/utils/TailwindUtilities";

export const RichTextRender = ({ richText }) => {
  if (!richText) {
    console.log("Rich Text Renderer received null.");
    return null;
  }

  return richText.map((item, index) => {
    const { text } = item;
    const { bold, italic, strikethrough, underline, code, color } =
      item.annotations;

    return (
      <span
        key={index}
        className={classMerge(
          bold ? "font-bold" : null,
          italic ? "italic" : null,
          strikethrough ? "line-through decoration-[0.5px]" : null,
          underline ? "underline underline-offset-[3px]" : null,
          code
            ? "rounded bg-blue-100 px-0.5 align-middle font-mono text-sm font-semibold text-blue-700"
            : null,
          colorMapper(color)
        )}
      >
        {/* 
        // Resolve if it has link or not. 
        // TODO: Add check if internal or external link.
        */}
        {text.link ? (
          <a href={text.link.url}>
            {text.content}
            <ExternalLinkIcon className="ml-0.5 inline-flex h-3 w-3 items-center justify-center text-blue-700" />
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

export const blockRenderer = (block) => {
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
          <RichTextRender richText={value.rich_text} />
        </p>
      );
    case "heading_1":
      // TODO: Add support for toggleable heading 1.
      return (
        <h1
          className="mt-6 mb-2 text-2xl font-bold text-black md:text-3xl"
          id={id}
        >
          <RichTextRender richText={value.rich_text} />
        </h1>
      );
    case "heading_2":
      // TODO: Add support for toggleable heading 2.
      return (
        <h2
          className="mt-6 mb-2 text-xl font-bold text-black md:text-2xl"
          id={id}
        >
          <RichTextRender richText={value.rich_text} />
        </h2>
      );
    case "heading_3":
      // TODO: Add support for toggleable heading 3.
      return (
        <h3
          className="mt-6 mb-2 text-lg font-bold text-black md:text-xl"
          id={id}
        >
          <RichTextRender richText={value.rich_text} />
        </h3>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";

      // use <img> to render image as full width but keep aspect ratio
      return (
        <div className="mt-6 mb-2">
          <div className="flex max-h-[28rem] min-h-min w-full flex-col items-center justify-center overflow-clip rounded-lg">
            <img src={src} alt={caption} className="w-full aspect-auto" />
          </div>
          <p className="text-sm text-neutral-500">{caption}</p>
        </div>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li id={id}>
          <RichTextRender richText={value.rich_text} />
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

const colorMapper = (color) => {
  const COLORVALUES = {
    default: "",
    gray: "text-[#9B9A97]",
    brown: "text-[#64473A]",
    orange: "text-[#D9730D]",
    yellow: "text-[#DFAB01]",
    green: "text-[#3F8D2C]",
    blue: "text-[#0079BF]",
    purple: "text-[#A366E5]",
    pink: "text-[#C377E0]",
    red: "text-[#E03B3B]",
  };

  if (!(color in COLORVALUES)) {
    return null;
  }

  return COLORVALUES[color];
};
