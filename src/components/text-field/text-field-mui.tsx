import { FilledTextFieldProps, TextField } from "@mui/material";
import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";

const textField = cva("rounded-lg", {
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

type TextFieldMuiProps = FilledTextFieldProps & {
  endAdornment?: ReactNode;
} & VariantProps<typeof textField>;

export default function TextFieldMui(props: TextFieldMuiProps) {
  const {
    value,
    placeholder,
    endAdornment,
    className,
    onChange,
    disabled = false,
    color = "primary",
  } = props;

  return (
    <TextField
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      InputProps={{
        endAdornment,
        classes: {
          root: "pe-0 h-12 [&input]:placeholder:text-gray-600",
          input: "placeholder:!text-gray-600",
        },
      }}
      classes={{
        root: textField({ color, disabled }),
      }}
      variant={"filled"}
    />
  );
}
