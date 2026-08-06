import React from "react";
import { cn } from "@/lib/utils";

interface ErrorLineProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string | null;
}

export function ErrorLine({
  message,
  className,
  ...props
}: ErrorLineProps) {
  if (!message) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn("pt-1 text-sm text-red-500", className)}
      {...props}
    >
      {message}
    </div>
  );
}