import classMerge from "root/lib/classMerge";

// Types
type StyleVariants = "fill" | "soft" | "outline" | "ghost";

type ColorVariants =
  | "background"
  | "foreground"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

type SizeVariants = "sm" | "normal" | "lg";

type RoundedVariants = "sm" | "normal" | "lg" | "full";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: StyleVariants;
  color?: ColorVariants;
  size?: SizeVariants;
  rounded?: RoundedVariants;
};

// Constants
const colorStyles: Record<ColorVariants, Record<StyleVariants, string>> = {
  primary: {
    fill: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "text-blue-500 hover:bg-blue-100",
    soft: "bg-blue-100 text-blue-700",
    outline: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  },
  secondary: {
    fill: "bg-gray-500 text-white hover:bg-gray-600",
    ghost: "text-gray-500 hover:bg-gray-100",
    soft: "bg-gray-100 text-gray-700",
    outline: "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white",
  },
  danger: {
    fill: "bg-red-500 text-white hover:bg-red-600",
    ghost: "text-red-500 hover:bg-red-100",
    soft: "bg-red-100 text-red-700",
    outline: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
  },
  success: {
    fill: "bg-green-500 text-white hover:bg-green-600",
    ghost: "text-green-500 hover:bg-green-100",
    soft: "bg-green-100 text-green-700",
    outline: "border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
  },
  warning: {
    fill: "bg-yellow-500 text-white hover:bg-yellow-600",
    ghost: "text-yellow-500 hover:bg-yellow-100",
    soft: "bg-yellow-100 text-yellow-700",
    outline: "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white",
  },
  background: {
    fill: "bg-black text-white hover:bg-gray-800",
    ghost: "text-black hover:bg-gray-200",
    soft: "bg-gray-200 text-black",
    outline: "border-black text-black hover:bg-black hover:text-white",
  },
  foreground: {
    fill: "bg-white text-black hover:bg-gray-100",
    ghost: "text-white hover:bg-gray-600",
    soft: "bg-gray-100 text-black",
    outline: "border-white text-white hover:bg-white hover:text-black",
  },
};

const sizeClasses: Record<SizeVariants, string> = {
  sm: "px-3 h-8 text-sm",
  normal: "px-5 h-10 text-base",
  lg: "px-6 h-12 text-lg",
};

const roundedClasses: Record<RoundedVariants, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

const baseClasses = "rounded-full transition-all border hover:brightness-90 active:scale-90";
// Component
const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  color = "primary",
  size = "normal",
  rounded = "normal",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classMerge(
        baseClasses,
        sizeClasses[size],
        colorStyles[color][variant],
        roundedClasses[rounded],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
