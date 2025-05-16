import classMerge from "root/lib/classMerge";
import { AllSizeVariantsT, FontVariantsT } from "root/types/ui.types";

/* Types */
export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: AllSizeVariantsT;
  font?: FontVariantsT;
};

/* Constants */
const baseClasses = "!leading-relaxed";

const fontVariants: Record<FontVariantsT, string> = {
  kalameh: "font-kalameh",
  vazir: "font-vazir",
};

const sizeVariants: Record<AllSizeVariantsT, string> = {
  xs: "text-xs",
  sm: "text-sm",
  normal: "text--base",
  lg: "text-lg",
  xl: "text-xl",
};

/* Component */
const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    fontVariants[props.font || "vazir"],
    sizeVariants[props.size ?? "normal"],
    className
  );

  return <p className={currentClass} {...props} />;
};

export default Paragraph;
