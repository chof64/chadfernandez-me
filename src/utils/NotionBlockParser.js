import { classMerge } from "./TailwindUtilities";

export const notionBlockAdapter = (block) => {
  const { type, id } = block;
  const value = block[type];

  // SUPPORTED BLOCKS
  //? 1. Paragraph
  //? 2. Heading 1
  //? 3. Heading 2
  //? 4. Heading 3
  //?

  switch (type) {
    case "paragraph":
      return (
        <p id={id}>
          <NotionTextFormatter text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 id={id}>
          <NotionTextFormatter text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 id={id}>
          <NotionTextFormatter text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 id={id}>
          <NotionTextFormatter text={value.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li id={id}>
          <NotionTextFormatter text={value.rich_text} />
        </li>
      );

    default:
      return `❌ Unsupported Block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export const NotionTextFormatter = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    return (
      <span
        key={index}
        className={classMerge(
          bold ? "font-bold" : null,
          code ? "rounded bg-red-100 px-1 font-mono" : null,
          notionColorToTailwind(color),
          italic ? "italic" : null,
          strikethrough ? "line-through decoration-sky-500" : null,
          underline
            ? "underline decoration-sky-500 decoration-2 underline-offset-2"
            : null
        )}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

// TODO: Create custom/properly selected colors.
// TODO: Add support for background color.
export const notionColorToTailwind = (color) => {
  const COLORVALUES = {
    default: "",
    gray: "text-[#9B9A97]",
    brown: "text-[#64473A]",
    orange: "text-[#D9730D]",
    yellow: "text-[#DFAB01]",
    green: "text-[#0F7B6C]",
    blue: "text-[#0B6E99]",
    purple: "text-[#6940A5]",
    pink: "text-[#AD1A72]",
    red: "text-[#E03E3E]",
  };

  if (color in COLORVALUES) {
    return COLORVALUES[color];
  }
};
