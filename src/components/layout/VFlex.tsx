import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

export type VFlexProps = {} & React.HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, VFlexProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col", className)}
      {...props}
    ></div>
  );
});
