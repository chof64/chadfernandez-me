import React from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const textStyles = cva("", {
  variants: {
    variant: {
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif",
    },
  },
  defaultVariants: {
    variant: "p",
    font: "sans",
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const Text = ({
  children,
  className,
  variant = "p",
  font = "sans",
  asChild = false,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp className={cn(textStyles({ variant, font, className }))} {...props}>
      {children}
    </Comp>
  );
};
Text.displayName = "Text";

export { Text, textStyles };
