import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const orderStyles = cva("scroll-m-20", {
  variants: {
    spacing: {
      default: "tracking-tight",
      wide: "tracking-wide",
      none: "tracking-normal",
    },
    style: {
      0: "",
      1: "text-3xl md:text-4xl font-bold",
      2: "text-2xl md:text-3xl font-semibold first:mt-0",
      3: "text-xl md:text-2xl font-semibold",
      4: "text-lg md:text-xl font-semibold",
      5: "md:text-lg font-bold",
      6: "text-base font-bold",
    },
    font: {
      serif: "font-serif",
      sans: "font-sans",
    },
  },
  defaultVariants: {
    spacing: "default",
    style: 2,
    font: "serif",
  },
});

interface HeadingProps extends VariantProps<typeof orderStyles> {
  children: React.ReactNode;
  className?: string;
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Heading({
  children,
  className,
  order,
  spacing,
  style,
  font,
}: HeadingProps) {
  const Element = `h${order ?? 2}` as keyof JSX.IntrinsicElements;

  return (
    <Element className={cn(orderStyles({ spacing, style, font, className }))}>
      {children}
    </Element>
  );
}
