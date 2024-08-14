import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

const variants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-info",
  {
    variants: {
      color: {
        primary: "bg-primary/80 text-primary-foreground hover:bg-primary",
        secondary: "bg-secondary/80 text-secondary-foreground hover:bg-secondary",
        success: "bg-success/80 text-success-foreground hover:bg-success",
        warning: "bg-warning/80 text-warning-foreground hover:bg-warning",
        destructive: "bg-destructive/80 text-destructive-foreground hover:bg-destructive",
        info: "bg-info/80 text-info-foreground hover:bg-info",
        muted: "bg-muted/80 text-muted-foreground hover:bg-muted",
      },
      variant: {
        default: "",
        ghost: "bg-transparent",
      },
      size: {
        none: "",
        default: "h-12 px-5",
        badge: "py-1.5 px-2.5",
        icon: "aspect-square p-1",
      },
      shape: {
        default: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      color: "primary",
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
);

export type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants>;

export default forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, variant, size, shape, className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(variants({ color, variant, size, shape }), className)}
        type={type}
        {...props}
      ></button>
    );
  }
);
