import classMerge from "root/lib/classMerge";
import { ColorVariants, RoundedVariants, SizeVariants } from "root/types/ui.types";

/* Types */
type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorVariants;
  space?: SizeVariants;
  ring?: SizeVariants;
  rounded?: Rounded;
};

type Rounded = Exclude<RoundedVariants, "full">;

/* Constants */
const baseClasses = "ring-transparent transition-shadow";

const colorVariants: Record<ColorVariants, string> = {
  foreground: "hover:ring-foreground/10",
  danger: "hover:ring-danger/10",
  success: "hover:ring-success/10",
  warning: "hover:ring-warning/10",
};

const spaceVariants: Record<SizeVariants, string> = {
  sm: "p-3",
  normal: "p-6",
  lg: "p-9",
};

const ringVariants: Record<SizeVariants, string> = {
  sm: "ring-4",
  normal: "ring-8",
  lg: "ring-12",
};

const roundedVariants: Record<Rounded, string> = {
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
    ringVariants[props.ring ?? "normal"],
    roundedVariants[props.rounded ?? "lg"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Box;
