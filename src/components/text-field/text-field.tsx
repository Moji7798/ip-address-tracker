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
      className: "bg-white border border-gray-300",
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
  const { color, disabled, endAdornment, className } = props;

  // hooks
  const { getRootProps } = useInput();

  return (
    <div
      className={cn(
        textField({ color, disabled }),
        "w-full relative flex items-center px-3.5 py-3 rounded-lg"
      )}
    >
      <Input {...getRootProps()} ref={ref} />
      {endAdornment && <div className="ms-1">{endAdornment}</div>}
    </div>
  );
});

export { TextField };
