import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const variants = cva("border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type DividerProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants>;

export default forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(variants({ orientation }), className)}
        {...props}
      ></div>
    );
  }
);
