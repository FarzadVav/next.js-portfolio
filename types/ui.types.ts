// Base variants that are shared across components
export type StyleVariants = "fill" | "soft" | "outline" | "ghost";

export type ColorVariants =
  | "background"
  | "foreground"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

export type SizeVariants = "sm" | "normal" | "lg";

export type RoundedVariants = "sm" | "normal" | "lg" | "full";

// Base properties that can be shared
export interface VariantsProps {
  style?: StyleVariants;
  color?: ColorVariants;
  size?: SizeVariants;
  rounded?: RoundedVariants;
  className?: string;
}