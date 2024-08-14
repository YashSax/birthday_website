import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

import { center, color, size } from "./TypographyVariants";

const variants = cva("cursor-grab hover:opacity-60", {
  variants: {
    color,
    size,
    center,
  },
  defaultVariants: {
    color: "primary",
    size: "bodyM",
  },
});

export type LinkProps = {} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof variants>;

export default forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color, size, center, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(variants({ color, size, center }), className)}
        {...props}
      ></a>
    );
  }
);
