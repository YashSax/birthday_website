import { forwardRef } from "react";

import { cn } from "@/util/tailwindUtil";

export type HFlexProps = {} & React.HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, HFlexProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-row", className)}
      {...props}
    ></div>
  );
});
