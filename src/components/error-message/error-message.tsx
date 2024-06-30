import { cn } from "@/lib/utils/cn";
import { IconAlertTriangle } from "@tabler/icons-react";
import { ComponentProps, forwardRef, ReactNode } from "react";

export type ErrorMessageProps = ComponentProps<"p">;

const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  (props, ref) => {
    const { className, children, ...otherProps } = props;

    if (!children) return null;

    return (
      <p
        ref={ref}
        className={cn(
          "flex items-center gap-2 text-xs/6 font-medium text-white",
          className
        )}
        {...otherProps}
      >
        <span className="shrink-0">
          <IconAlertTriangle size={16} className="text-red-600" />
        </span>
        {children as ReactNode}
      </p>
    );
  }
);

ErrorMessage.displayName = "ErrorMessage";

export { ErrorMessage };
