import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const variants = cva("", {
  variants: {
    shape: {
      square: `aspect-square`,
      rounded: `rounded-md`,
      circle: `rounded-full`,
    },
  },
});

export type ImageProps = {
  src: string;
  alt: string;
} & React.HTMLAttributes<HTMLImageElement> &
  VariantProps<typeof variants>;

export default forwardRef<HTMLImageElement, ImageProps>(({ shape, className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn(variants({ shape }), className)}
      {...props}
    />
  );
});
