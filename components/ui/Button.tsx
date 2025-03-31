import { getVariantClasses } from "root/utils/ui.utils";
import {
  ColorVariants,
  ShapeVariants,
  SizeVariants,
  RoundedVariants,
  VariantsProps,
} from "root/types/ui.types";

// Constants
const baseClasses =
  "center-items rounded-full transition-all active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed";

const styles: Record<ColorVariants, Record<ShapeVariants, string>> = {
  primary: {
    fill: "bg-primary text-background hover:bg-primary/90",
    soft: "bg-primary/10 text-primary hover:bg-primary/20",
    outline: "border border-primary text-primary hover:bg-primary hover:text-background",
    ghost: "text-primary hover:bg-primary/10",
  },
  secondary: {
    fill: "bg-secondary text-background-secondary/90",
    soft: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    outline: "border border-secondary text-secondary hover:bg-secondary hover:text-background",
    ghost: "text-secondary hover:bg-secondary/10",
  },
  danger: {
    fill: "bg-danger text-background hover:bg-danger/90",
    soft: "bg-danger/10 text-danger hover:bg-danger/20",
    outline: "border border-danger text-danger hover:bg-danger hover:text-background",
    ghost: "text-danger hover:bg-danger/10",
  },
  success: {
    fill: "bg-success text-background hover:bg-success/90",
    soft: "bg-success/10 text-success hover:bg-success/20",
    outline: "border border-success text-success hover:bg-success hover:text-background",
    ghost: "text-success hover:bg-success/10",
  },
  warning: {
    fill: "bg-warning text-background hover:bg-warning/90",
    soft: "bg-warning/10 text-warning hover:bg-warning/20",
    outline: "border border-warning text-warning hover:bg-warning hover:text-background",
    ghost: "text-warning hover:bg-warning/10",
  },
  background: {
    fill: "bg-background text-foreground hover:bg-background/90",
    soft: "bg-background/10 text-background hover:bg-background/20",
    outline: "border border-background text-background hover:bg-background hover:text-foreground",
    ghost: "text-background hover:bg-background/10",
  },
  foreground: {
    fill: "bg-foreground text-background hover:bg-foreground/90",
    soft: "bg-foreground/10 text-foreground hover:bg-foreground/20",
    outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    ghost: "text-foreground hover:bg-foreground/10",
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

// Component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantsProps;

const Button: React.FC<ButtonProps> = (props) => {
  const classes = getVariantClasses(props, {
    base: baseClasses,
    style: styles,
    size: sizeVariants,
    rounded: roundedVariants,
  });

  return <button className={classes} {...props} />;
};

export default Button;
