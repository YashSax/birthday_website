import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

const variants = cva("", {
  variants: {
    variant: {
      unstyled: ``,
      default: `h-12 px-5 rounded-md border border-input bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-info`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof variants>;

export default forwardRef<HTMLInputElement, InputProps>(({ variant, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(variants({ variant }), className)}
      {...props}
    ></input>
  );
});
