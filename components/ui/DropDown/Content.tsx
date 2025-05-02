import { use } from "react";

import { DropDownContext } from "./Context";
import classMerge from "root/lib/classMerge";
import { ColorVariantsT, SizeVariantsT } from "root/types/ui.types";

/* Types */
type DropDownContentProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorVariantsT;
  size?: SizeVariantsT;
  rounded?: SizeVariantsT;
};

/* Constants */
const baseClasses =
  "bg-background min-w-full w-max flex flex-col ring-4 ring-foreground/10 absolute right-0 top-[calc(100%+4px)] transition-all z-20";

const sizeVariants: Record<SizeVariantsT, string> = {
  sm: "p-1.5 space-y-1.5",
  normal: "p-3 space-y-3",
  lg: "p-6 space-y-6",
};

const roundedVariants: Record<SizeVariantsT, string> = {
  sm: "rounded",
  normal: "rounded-lg",
  lg: "rounded-xl",
};

/* Component */
const DropDownContent: React.FC<DropDownContentProps> = ({ className, ...props }) => {
  const context = use(DropDownContext);

  const currentClass = classMerge(
    baseClasses,
    sizeVariants[props.size ?? "normal"],
    roundedVariants[props.rounded ?? "normal"],
    context.isOpen ? "" : "opacity-0 invisible -translate-y-1/12",
    className
  );

  return <div className={currentClass} {...props} />;
};

export default DropDownContent;
