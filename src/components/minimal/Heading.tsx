import React from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingStyles = cva("scroll-m-20", {
  variants: {
    variant: {
      0: "",
      1: "text-4xl font-extrabold lg:text-5xl",
      2: "text-3xl font-semibold",
      3: "text-2xl font-semibold",
      4: "text-xl font-semibold",
      5: "text-lg font-semibold",
      6: "text-base font-semibold",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif",
      averia: "font-averia",
    },
    spacing: {
      none: "",
      default: "tracking-tight",
    },
  },
  defaultVariants: {
    variant: 2,
    font: "averia",
    spacing: "default",
  },
});

interface HeadingProps extends VariantProps<typeof headingStyles> {
  children: React.ReactNode;
  className?: string;
  type?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({
  children,
  className,
  type = 2,
  variant,
  font = "averia",
  spacing = "default",
  ...props
}: HeadingProps) => {
  const Comp = `h${type}` as keyof JSX.IntrinsicElements;

  return (
    <Comp
      className={cn(
        headingStyles({ variant: variant ?? type, font, spacing, className }),
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
Heading.displayName = "Heading";

export { Heading, headingStyles };
