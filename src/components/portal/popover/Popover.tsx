import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import ReactDOM from "react-dom";

import useClickOutside from "@/components/hooks/useClickOutside";
import VFlex from "@/components/layout/VFlex";
import { cn } from "@/util/tailwindUtil";
import { PopoverContent, PopoverContentProps } from "./PopoverContent";
import { PopoverTrigger, PopoverTriggerProps } from "./PopoverTrigger";

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

export type PopoverProps = {
  offset?: number;
  children: [React.ReactElement<PopoverTriggerProps>, React.ReactElement<PopoverContentProps>];
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants>;

export default React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, variant, color, size, shape, state, offset = 8, children, ...props }, ref) => {
    const triggerRef = React.useRef<React.ElementRef<typeof PopoverTrigger>>(null);
    const contentRef = React.useRef<React.ElementRef<typeof PopoverContent>>(null);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    useClickOutside({
      ref: contentRef,
      omittedRefs: [triggerRef],
      callback: () => setIsOpen(false),
    });

    return (
      <VFlex
        ref={ref}
        className={cn(variants({ color, size, shape, variant, state, className }), "relative")}
        {...props}
      >
        {React.cloneElement(children[0], { ref: triggerRef, isOpen, setIsOpen })}
        {isOpen &&
          triggerRef.current &&
          triggerRef.current.parentElement &&
          ReactDOM.createPortal(
            React.cloneElement(children[1], {
              ref: contentRef,
              setIsOpen,
              style: {
                // top: `${triggerRef.current.getBoundingClientRect().height + offset}px`,
                // minWidth: `${triggerRef.current.getBoundingClientRect().width}px`,
                bottom: `${triggerRef.current.getBoundingClientRect().height + offset}px`,
              },
            }),
            // NOTE: very jank, but too tired to fix
            triggerRef.current.parentElement
          )}
      </VFlex>
    );
  }
);
