import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/lib/utils";

export interface PillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300/80 bg-accent px-2.5 py-1 text-sm font-medium transition-colors hover:bg-white/80",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
PillButton.displayName = "Pill Button";

export { PillButton };
