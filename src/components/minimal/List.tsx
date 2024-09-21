import React from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const listStyles = cva("my-6 ml-6", {
  variants: {
    type: {
      ul: "list-disc",
      ol: "list-decimal",
      none: "list-none",
    },
    spacing: {
      default: "[&>li]:mt-2",
      tight: "[&>li]:mt-1",
      none: "[&>li]:mt-0",
    },
  },
  defaultVariants: {
    type: "ul",
    spacing: "default",
  },
});

interface ListProps extends VariantProps<typeof listStyles> {
  children: React.ReactNode;
  className?: string;
}

const List = ({ children, className, type = "ul", spacing }: ListProps) => {
  const Comp = type === "ul" ? "ul" : "ol";
  return (
    <Comp className={cn(listStyles({ spacing, className }))}>{children}</Comp>
  );
};

export { List };
