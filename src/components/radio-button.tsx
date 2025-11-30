"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const RadioButton = React.forwardRef<HTMLButtonElement, RadioButtonProps>(
  ({ className, checked = false, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        role="radio"
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        className={cn(
          "relative aspect-square size-3 shrink-0 rounded-full border border-black shadow-xs transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          checked && "bg-white",
          className
        )}
        {...props}
      >
      </button>
    );
  }
);

RadioButton.displayName = "RadioButton";

