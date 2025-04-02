import classMerge from "root/lib/classMerge";
import { ColorVariants, ShapeVariants, SizeVariants, RoundedVariants } from "root/types/ui.types";

/* Types */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shape?: ShapeVariants;
  color?: ColorVariants;
  size?: SizeVariants;
  rounded?: RoundedVariants;
};

/* Constants */
const baseClasses =
  "center-items transition-all ring-4 ring-transparent active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed";

const styleVariants: Record<ColorVariants, Record<ShapeVariants, string>> = {
  primary: {
    fill: "bg-primary text-background hover:bg-primary/90 focus:ring-primary/10",
    soft: "bg-primary/10 text-primary hover:bg-primary/5 focus:bg-transparent focus:ring-primary/10",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-background focus:ring-primary/10",
    ghost: "text-primary hover:bg-primary/10 focus:hover:bg-transparent focus:ring-primary/10",
  },
  secondary: {
    fill: "bg-secondary text-background-secondary/90 focus:ring-secondary/10",
    soft: "bg-secondary/10 text-secondary hover:bg-secondary/5 focus:bg-transparent focus:ring-secondary/10",
    outline:
      "border border-secondary text-secondary hover:bg-secondary hover:text-background focus:ring-secondary/10",
    ghost:
      "text-secondary hover:bg-secondary/10 focus:hover:bg-transparent focus:ring-secondary/10",
  },
  danger: {
    fill: "bg-danger text-background hover:bg-danger/90 focus:ring-danger/10",
    soft: "bg-danger/10 text-danger hover:bg-danger/5 focus:bg-transparent focus:ring-danger/10",
    outline:
      "border border-danger text-danger hover:bg-danger hover:text-background focus:ring-danger/10",
    ghost: "text-danger hover:bg-danger/10 focus:hover:bg-transparent focus:ring-danger/10",
  },
  success: {
    fill: "bg-success text-background hover:bg-success/90 focus:ring-success/10",
    soft: "bg-success/10 text-success hover:bg-success/5 focus:bg-transparent focus:ring-success/10",
    outline:
      "border border-success text-success hover:bg-success hover:text-background focus:ring-success/10",
    ghost: "text-success hover:bg-success/10 focus:hover:bg-transparent focus:ring-success/10",
  },
  warning: {
    fill: "bg-warning text-background hover:bg-warning/90 focus:ring-warning/10",
    soft: "bg-warning/10 text-warning hover:bg-warning/5 focus:bg-transparent focus:ring-warning/10",
    outline:
      "border border-warning text-warning hover:bg-warning hover:text-background focus:ring-warning/10",
    ghost: "text-warning hover:bg-warning/10 focus:hover:bg-transparent focus:ring-warning/10",
  },
  foreground: {
    fill: "bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground/10",
    soft: "bg-foreground/10 text-foreground hover:bg-foreground/5 focus:bg-transparent focus:ring-foreground/10",
    outline:
      "border border-foreground text-foreground hover:bg-foreground hover:text-background focus:ring-foreground/10",
    ghost:
      "text-foreground hover:bg-foreground/10 focus:hover:bg-transparent focus:ring-foreground/10",
  },
};

const sizeVariants: Record<SizeVariants, string> = {
  sm: "px-3 h-8 text-sm gap-2",
  normal: "px-5 h-10 text-base gap-3",
  lg: "px-6 h-12 text-lg gap-4",
};

const roundedVariants: Record<RoundedVariants, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

/* Component */
const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    styleVariants[props.color ?? "primary"][props.shape ?? "fill"],
    sizeVariants[props.size ?? "normal"],
    roundedVariants[props.rounded ?? "normal"],
    className
  );

  return <button className={currentClass} {...props} />;
};

export default Button;
