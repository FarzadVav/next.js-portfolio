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
  background: "hover:border-background/10",
  foreground: "hover:border-foreground/10",
  danger: "hover:border-danger/10",
  success: "hover:border-success/10",
  warning: "hover:border-warning/10",
};

const spaceVariants: Record<SizeVariantsT, string> = {
  sm: "p-3",
  normal: "p-6",
  lg: "p-9",
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
