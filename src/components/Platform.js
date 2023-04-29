import clsx from "clsx";

export default function Platform({ children, className, type }) {
  const values = {
    default: "max-w-7xl",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  };

  const value = values[type] || values.default;

  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <div className={clsx("w-[94svw]", value)}>{children}</div>
    </div>
  );
}
