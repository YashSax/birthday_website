import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const variants = cva("p-2.5 rounded-md", {
  variants: {
    color: {
      unstyled: ``,
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      info: "bg-info text-info-foreground",
      muted: "bg-muted text-muted-foreground",
    },
    variant: {
      outline: "",
      default: "",
    },
  },
  defaultVariants: {
    color: "unstyled",
    variant: "default",
  },
});

export type AlertProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants>;

export default forwardRef<HTMLDivElement, AlertProps>(
  ({ color, variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(variants({ color, variant }), className)}
        {...props}
      ></div>
    );
  }
);
