import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import HFlex from "@/components/layout/HFlex";
import { cn } from "@/util/tailwindUtil";

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

export type PopoverItemProps = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants>;

const PopoverItem = React.forwardRef<HTMLDivElement, PopoverItemProps>(
  ({ className, variant, color, size, shape, state, setIsOpen, onClick, ...props }, ref) => {
    return (
      <HFlex
        ref={ref}
        className={cn(
          variants({ color, size, shape, variant, state, className }),
          "rounded-md px-2 py-1 hover:bg-input"
        )}
        onClick={(e) => {
          // NOTE: don't like this
          setIsOpen?.(false);
          onClick?.(e);
        }}
        {...props}
      ></HFlex>
    );
  }
);

export { PopoverItem };
