import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import VFlex from "@/components/layout/VFlex";
import { cn } from "@/util/tailwindUtil";
import { PopoverItem } from "./PopoverItem";

const variants = cva("", {
  variants: {
    color: {
      unstyled: ``,
    },
    size: {
      unstyled: ``,
    },
    shape: {
      unstyled: ``,
    },
    variant: {
      unstyled: ``,
    },
    state: {
      unstyled: ``,
    },
  },
  defaultVariants: {
    color: "unstyled",
    size: "unstyled",
    shape: "unstyled",
    variant: "unstyled",
    state: "unstyled",
  },
});

export type PopoverContentProps = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLDivElement> &
  // NOTE: not sure why this is needed, but it is
  React.RefAttributes<HTMLDivElement> &
  VariantProps<typeof variants>;

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, variant, color, size, shape, state, setIsOpen, children, ...props }, ref) => {
    // TODO: add popover direction
    return (
      <VFlex
        ref={ref}
        className={cn(
          variants({ color, size, shape, variant, state, className }),
          "rounded-md bg-background text-foreground border border-border shadow-md p-1 absolute left-0 z-50"
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          return <PopoverItem setIsOpen={setIsOpen}>{child}</PopoverItem>;
        })}
      </VFlex>
    );
  }
);

export { PopoverContent };
