import React from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textStyles = cva("", {
  variants: {
    type: {
      p: "leading-7 [&:not(:first-child)]:mt-6",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif",
    },
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  className,
  type = "p",
  font = "sans",
}: TextProps) {
  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(textStyles({ type, font, className }))}>{children}</Tag>
  );
}
