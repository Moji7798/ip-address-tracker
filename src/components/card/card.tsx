import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("p-4 shadow-md rounded-lg bg-white", className)}>
      {children}
    </div>
  );
}
