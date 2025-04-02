import classMerge from "root/lib/classMerge";
import { ColorVariants, ShapeVariants, SizeVariants, RoundedVariants } from "root/types/ui.types";

/* Types */
type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  shape?: ShapeVariants;
  color?: ColorVariants;
  size?: SizeVariants;
  rounded?: RoundedVariants;
};

/* Constants */
const baseClasses = "center-items";

const colorVariants: Record<ColorVariants, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  danger: "bg-danger/10 text-danger",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  foreground: "bg-foreground/10 text-foreground",
};

const sizeVariants: Record<SizeVariants, string> = {
  sm: "px-2 h-5 text-xs gap-1",
  normal: "px-3 h-6 text-sm gap-1.5",
  lg: "px-4 h-7 text-base gap-2",
};

const roundedVariants: Record<RoundedVariants, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

/* Component */
const Badge: React.FC<BadgeProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    colorVariants[props.color ?? "primary"],
    sizeVariants[props.size ?? "normal"],
    roundedVariants[props.rounded ?? "normal"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Badge;
