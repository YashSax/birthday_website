import { forwardRef } from "react";

import { cn, gridTemplateCols } from "@/util/tailwindUtil";

export type GridProps = {
  cols?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, GridProps>(({ cols, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid gap-2", gridTemplateCols[(cols ?? 4) - 1], className)}
      {...props}
    ></div>
  );
});
