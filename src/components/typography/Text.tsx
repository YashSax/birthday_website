import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

import { center, color, size } from "./TypographyVariants";

const variants = cva("", {
  variants: {
    color,
    size,
    center,
    variant: {
      link: "text-info cursor-pointer",
    },
  },
  defaultVariants: {
    color: "inherited",
    size: "bodyM",
  },
});

export type TextProps = {} & React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof variants>;

export default forwardRef<HTMLSpanElement, TextProps>(
  ({ color, size, center, variant, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(variants({ color, size, center, variant }), className)}
        {...props}
      ></span>
    );
  }
);
