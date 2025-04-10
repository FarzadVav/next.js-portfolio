import classMerge from "root/lib/classMerge";
import { AllSizeVariantsT } from "root/types/ui.types";

/* Types */
type SpaceProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: AllSizeVariantsT;
  direction?: Direction;
};

type Direction = "top" | "bottom" | "vertical";

/* Constants */
const baseClasses = "";

const sizeVariants: Record<Direction, Record<AllSizeVariantsT, string>> = {
  top: {
    xs: "mt-1.5",
    sm: "mt-3",
    normal: "mt-6",
    lg: "mt-12",
    xl: "mt-20",
  },
  bottom: {
    xs: "mb-1.5",
    sm: "mb-3",
    normal: "mb-6",
    lg: "mb-12",
    xl: "mb-20",
  },
  vertical: {
    xs: "my-1.5",
    sm: "my-3",
    normal: "my-6",
    lg: "my-12",
    xl: "my-20",
  },
};

/* Component */
const Space: React.FC<SpaceProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    sizeVariants[props.direction ?? "top"][props.size ?? "lg"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Space;
