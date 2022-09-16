import { classMerge } from "./TailwindUtilities";

export const TextParser = ({ text }) => {
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
          colorTextToTailwind(color),
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

export const colorTextToTailwind = (color) => {
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

export const colorCategoryToTailwind = (color) => {
  const COLORVALUES = {
    default: "",
    gray: "bg-[#EBECED]",
    brown: "bg-[#E9E5E3]",
    orange: "bg-[#FAEBDD]",
    yellow: "bg-[#FBF3DB]",
    green: "bg-[#DDEDEA]",
    blue: "bg-[#DDEBF1]",
    purple: "bg-[#EAE4F2]",
    pink: "bg-[#F4DFEB]",
    red: "bg-[#FBE4E4]",
  };

  if (color in COLORVALUES) {
    return COLORVALUES[color];
  }
};
