import { cn } from "@/lib/utils/cn";
import { Input, useInput } from "@mui/base";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, ReactNode, forwardRef } from "react";

const textField = cva("", {
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed select-none",
      false: "",
    },
    color: {
      primary: "",
      secondary: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      disabled: false,
      className:
        "bg-white shadow-sm [&>input]:placeholder:text-gray-600 [&>input]:text-xs",
    },
    {
      color: "secondary",
      disabled: false,
      className: "bg-gray-300 border border-gray-500",
    },
  ],
  defaultVariants: {
    disabled: false,
    color: "primary",
  },
});

export type TextFieldProps = ComponentProps<"input"> & {
  endAdornment?: ReactNode;
  disabled?: boolean;
} & VariantProps<typeof textField>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { color, disabled, endAdornment, className, ...otherProps } = props;

  const { getRootProps } = useInput();

  return (
    <div
      className={cn(
        textField({ color, disabled }),
        "relative flex items-center ps-3.5 h-12 rounded-lg",
        className
      )}
    >
      <Input
        {...getRootProps()}
        {...otherProps}
        ref={ref}
        slotProps={{
          input: {
            className: "outline-none border-none grow w-full",
          },
          root: {
            className: "grow",
          },
        }}
      />
      {endAdornment}
    </div>
  );
});

export { TextField };
