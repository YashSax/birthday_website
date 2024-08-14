import { forwardRef, useState } from "react";

import { cn } from "@/util/tailwindUtil";

export type ToggleButtonProps = {
  isActive: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, ToggleButtonProps>(
  ({ className, isActive, onClick, ...props }, ref) => {
    const [isOn, setIsOn] = useState(isActive);

    return (
      <div
        ref={ref}
        className={cn(
          "border border-border rounded-md p-2 cursor-pointer",
          isActive ? "bg-muted text-muted-foreground" : "bg-background text-muted-foreground",
          className
        )}
        onClick={(e) => {
          setIsOn(!isOn);
          onClick?.(e);
        }}
        {...props}
      ></div>
    );
  }
);
