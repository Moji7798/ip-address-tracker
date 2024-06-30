import { cn } from "@/lib/utils/cn";
import { useMemo } from "react";
import styles from "./styles.module.css";

type LoaderSize = "lg" | "md" | "sm";
type LoaderColor = "white" | "primary";

export default function Loader({
  color = "white",
  size = "md",
}: {
  color?: LoaderColor;
  size?: LoaderSize;
}) {
  const style = useMemo(() => {
    if (size === "md")
      return {
        width: 24,
        height: 24,
      };
    else if (size === "lg")
      return {
        width: 32,
        height: 32,
      };
    else if (size === "sm")
      return {
        width: 16,
        height: 16,
      };
  }, [size]);

  const className = useMemo(() => {
    if (color === "primary") return "!border-t-primary";
    else if (color === "white") return "!border-t-white";
  }, [size]);
  return <span className={cn(styles.loader, className)} style={style}></span>;
}
