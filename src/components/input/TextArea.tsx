import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

const variants = cva("", {
  variants: {
    variant: {
      unstyled: ``,
      default: `h-12 px-5 rounded-md border border-input bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-info`,
      borderless: `focus-visible:outline-none resize-none`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TextAreaProps = {
  resizable?: boolean;
  maxHeight?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof variants>;

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ variant, resizable = true, maxHeight, className, ...props }, ref) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
      const textAreaElm = internalRef.current;
      const textareaScrollHeight = textAreaElm?.scrollHeight ?? 0;

      if (textAreaElm && maxHeight && textareaScrollHeight > maxHeight) {
        textAreaElm.style.height = maxHeight + "px";
        return;
      }

      if (resizable && textAreaElm) {
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaElm.style.height = "0px";
        const scrollHeight = textAreaElm.scrollHeight;

        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will produce an incorrect value.
        textAreaElm.style.height = 1 * scrollHeight + "px";
      }
    }, [resizable, maxHeight, internalRef.current?.value]);

    return (
      <textarea
        ref={internalRef}
        className={cn(variants({ variant }), className)}
        {...props}
      ></textarea>
    );
  }
);
