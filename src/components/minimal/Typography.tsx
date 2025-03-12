import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { Slot } from "@radix-ui/react-slot";

//! Title Component ===========================================================

const titleStyles = cva("scroll-m-20", {
  variants: {
    variant: {
      0: "",
      1: "text-4xl font-extrabold lg:text-5xl",
      2: "text-3xl font-semibold",
      3: "text-2xl font-semibold",
      4: "text-xl font-semibold",
    },
    spacing: {
      default: "tracking-tight",
      none: "",
    },
  },
  defaultVariants: {
    variant: 2,
    spacing: "default",
  },
});

interface TitleProps extends VariantProps<typeof titleStyles> {
  children: React.ReactNode;
  className?: string;
  order?: 1 | 2 | 3 | 4;
  asChild?: boolean;
}

export const Title = ({
  children,
  className,
  order,
  variant,
  spacing,
  asChild = false,
}: TitleProps) => {
  const Comp = asChild ? Slot : `h${order}`;
  return (
    <Comp
      className={cn(
        titleStyles({ className, variant: variant ?? order, spacing }),
      )}
    >
      {children}
    </Comp>
  );
};

//! Text Component ============================================================

const textStyles = cva("", {
  variants: {
    variant: {
      default: "leading-7 not-first:mt-6",
      sm: "",
    },
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Text = ({
  children,
  className,
  variant,
  asChild = false,
}: TextProps) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp className={cn(textStyles({ className, variant }))}>{children}</Comp>
  );
};

//! List Component ============================================================

const listStyles = cva("my-6 ml-6", {
  variants: {
    type: {
      ul: "list-disc",
      ol: "list-decimal",
    },
    spacing: {
      default: "*:data-item:mt-2",
      tight: "*:data-item:mt-1",
      none: "*:data-item:mt-0",
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

type ListItemProps = {
  children: React.ReactNode;
};

type ListComponent = React.FC<ListProps> & {
  Item: React.FC<ListItemProps>;
};

export const List: ListComponent = ({
  children,
  className,
  type = "ul",
  spacing,
}) => {
  const Comp = type ?? "ul";
  return (
    <Comp className={cn(listStyles({ className, type, spacing }))}>
      {children}
    </Comp>
  );
};

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <li data-item>{children}</li>;
};

ListItem.displayName = "List.Item";
List.Item = ListItem;
