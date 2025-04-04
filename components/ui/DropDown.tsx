import classMerge from "root/lib/classMerge";
import { ColorVariants, SizeVariants, RoundedVariants } from "root/types/ui.types";

/* Types */
type DropDownProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorVariants;
  size?: SizeVariants;
  rounded?: RoundedVariants;
};

/* Constants */
const baseClasses =
  "bg-background w-max flex flex-col ring-4 ring-foreground/10 absolute right-0 top-full transition-all opacity-0 invisible -translate-y-1/12 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 z-20";

const sizeVariants: Record<SizeVariants, string> = {
  sm: "p-1.5 space-y-1.5",
  normal: "p-3 space-y-3",
  lg: "p-6 space-y-6",
};

const roundedVariants: Record<RoundedVariants, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

/* Component */
const DropDown: React.FC<DropDownProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    sizeVariants[props.size ?? "normal"],
    roundedVariants[props.rounded ?? "normal"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default DropDown;
