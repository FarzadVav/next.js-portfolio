import classMerge from "root/lib/classMerge";
import { ColorVariantsT, SizeVariantsT } from "root/types/ui.types";

/* Types */
type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorVariantsT;
  space?: SizeVariantsT;
  rounded?: SizeVariantsT;
};

/* Constants */
const baseClasses = "border-2 border-transparent transition-colors";

const colorVariants: Record<ColorVariantsT, string> = {
  foreground: "hover:ring-border/10",
  danger: "hover:ring-border/10",
  success: "hover:ring-border/10",
  warning: "hover:ring-border/10",
};

const spaceVariants: Record<SizeVariantsT, string> = {
  sm: "p-3",
  normal: "p-6",
  lg: "p-9",
};

const ringVariants: Record<SizeVariantsT, string> = {
  sm: "ring-4",
  normal: "ring-8",
  lg: "ring-12",
};

const roundedVariants: Record<SizeVariantsT, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
};

/* Component */
const Box: React.FC<BoxProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    colorVariants[props.color ?? "foreground"],
    spaceVariants[props.space ?? "normal"],
    roundedVariants[props.rounded ?? "lg"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Box;
