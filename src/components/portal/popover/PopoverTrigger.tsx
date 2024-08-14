import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

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

export type PopoverTriggerProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLElement> &
  // NOTE: not sure why this is needed, but it is
  React.RefAttributes<HTMLElement> &
  VariantProps<typeof variants>;

const PopoverTrigger = React.forwardRef<HTMLElement, PopoverTriggerProps>(
  (
    { className, variant, color, size, shape, state, isOpen, setIsOpen, children, ...props },
    ref
  ) => {
    return React.cloneElement(children as React.ReactElement, {
      ...props,
      ref,
      className: cn(variants({ color, size, shape, variant, state, className })),
      onClick: () => {
        setIsOpen?.(!isOpen);
      },
    });
  }
);

export { PopoverTrigger };
