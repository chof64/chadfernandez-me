import { ExternalLink as ExternalLinkIcon } from "lucide-react";

import { classMerge } from "/src/utils/TailwindUtilities";

export const richTextParser = (data) => {
  if (!data) {
    console.log("Rich Text Parser received null.");
    return;
  }

  return data.map((item) => {
    const { text } = item;
    const { bold, italic, strikethrough, underline, code, color } =
      item.annotations;

    // TODO: Add check if internal or external link.
    return (
      <span
        key={item.content}
        className={classMerge(
          bold ? "font-bold" : null,
          italic ? "italic" : null,
          strikethrough ? "line-through decoration-[0.5px]" : null,
          underline ? "underline underline-offset-[3px]" : null,
          code
            ? "rounded bg-blue-100 px-0.5 align-middle font-mono text-sm font-semibold text-blue-700"
            : null,
          _colorMapper(color)
        )}
      >
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

const _colorMapper = (color) => {
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
