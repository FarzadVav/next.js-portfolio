import classMerge from "root/lib/classMerge";
import { AllSizeVariantsT, FontVariantsT } from "root/types/ui.types";

/* Types */
type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: AllSizeVariantsT;
  font?: FontVariantsT;
};

/* Constants */
const baseClasses = "block font-kalameh-bold !leading-relaxed";

const fontVariants: Record<FontVariantsT, string> = {
  kalameh: "font-kalameh-bold",
  vazir: "font-vazir-bold",
};

const sizeVariants: Record<AllSizeVariantsT, string> = {
  xs: "text-base",
  sm: "text-lg",
  normal: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

/* Component */
const Heading: React.FC<HeadingProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    fontVariants[props.font || "kalameh"],
    sizeVariants[props.size ?? "normal"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Heading;
