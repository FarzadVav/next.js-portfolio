import classMerge from "root/lib/classMerge";
import { ColorVariantsT, ShapeVariantsT, SizeVariantsT } from "root/types/ui.types";

/* Types */
type InputT = {
  size?: SizeVariantsT;
  "textarea-size"?: never;
};

type TextareaT = {
  size?: never;
  "textarea-size"?: SizeVariantsT;
};

type NeitherSizeT = {
  size?: undefined;
  "textarea-size"?: undefined;
};

type InputOrTextareaT = NeitherSizeT | InputT | TextareaT;

type InputWrapperProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  InputOrTextareaT & {
    htmlFor: string;
    shape?: ShapeVariantsT;
    color?: ColorVariantsT;
    rounded?: SizeVariantsT;
  };

/* Constants */
const baseClasses =
  "ring-4 ring-transparent w-full row-items cursor-pointer transition-all relative disabled:opacity-50 disabled:cursor-not-allowed";

const styleVariants: Record<ColorVariantsT, Record<ShapeVariantsT, string>> = {
  background: {
    fill: "bg-background text-foreground focus-within:ring-background/10",
    soft: "bg-background/10 text-background focus-within:bg-transparent focus-within:ring-background/10",
    outline: "text-background border border-background focus-within:ring-background/10",
    ghost: "text-background focus-within:ring-background/10",
  },
  foreground: {
    fill: "bg-foreground text-background focus-within:ring-foreground/10",
    soft: "bg-foreground/10 text-foreground focus-within:bg-transparent focus-within:ring-foreground/10",
    outline: "text-foreground border border-foreground focus-within:ring-foreground/10",
    ghost: "text-foreground focus-within:ring-foreground/10",
  },
  danger: {
    fill: "bg-danger text-background focus-within:ring-danger/10",
    soft: "bg-danger/10 text-danger focus-within:bg-transparent focus-within:ring-danger/10",
    outline: "text-danger border border-danger focus-within:ring-danger/10",
    ghost: "text-danger focus-within:ring-danger/10",
  },
  success: {
    fill: "bg-success text-background focus-within:ring-success/10",
    soft: "bg-success/10 text-success focus-within:bg-transparent focus-within:ring-success/10",
    outline: "text-success border border-success focus-within:ring-success/10",
    ghost: "text-success focus-within:ring-success/10",
  },
  warning: {
    fill: "bg-warning text-background focus-within:ring-warning/10",
    soft: "bg-warning/10 text-warning focus-within:bg-transparent focus-within:ring-warning/10",
    outline: "text-warning border border-warning focus-within:ring-warning/10",
    ghost: "text-warning focus-within:ring-warning/10",
  },
};

const sizeVariants: Record<SizeVariantsT, string> = {
  sm: "px-3 h-8 text-sm gap-2",
  normal: "px-5 h-10 text-base gap-3",
  lg: "px-6 h-12 text-lg gap-4",
};

const textareaSizeVariants: Record<SizeVariantsT, string> = {
  sm: "p-3 h-[25dvh] text-sm gap-2",
  normal: "p-5 h-[33dvh] text-base gap-3",
  lg: "p-6 h-[50dvh] text-lg gap-4",
};

const roundedVariants: Record<SizeVariantsT, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
};

/* Component */
const InputWrapper: React.FC<InputWrapperProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    styleVariants[props.color ?? "foreground"][props.shape ?? "outline"],
    props["textarea-size"]
      ? textareaSizeVariants[props["textarea-size"]]
      : sizeVariants[props.size ?? "normal"],
    roundedVariants[props.rounded ?? "normal"],
    className
  );

  return <label className={currentClass} {...props} />;
};

export default InputWrapper;
