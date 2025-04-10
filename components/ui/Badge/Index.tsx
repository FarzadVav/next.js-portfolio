import classMerge from "root/lib/classMerge";
import { ColorVariantsT, SizeVariantsT } from "root/types/ui.types";

/* Types */
type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorVariantsT;
  size?: SizeVariantsT;
  rounded?: SizeVariantsT;
};

/* Constants */
const baseClasses = "center-items";

const colorVariants: Record<ColorVariantsT, string> = {
  foreground: "bg-foreground/10 text-foreground",
  danger: "bg-danger/10 text-danger",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

const sizeVariants: Record<SizeVariantsT, string> = {
  sm: "px-2 h-5 text-xs gap-1",
  normal: "px-3 h-6 text-sm gap-1.5",
  lg: "px-4 h-7 text-base gap-2",
};

const roundedVariants: Record<SizeVariantsT, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
};

/* Component */
const Badge: React.FC<BadgeProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    colorVariants[props.color ?? "foreground"],
    sizeVariants[props.size ?? "normal"],
    roundedVariants[props.rounded ?? "normal"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Badge;
