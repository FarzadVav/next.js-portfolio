import classMerge from "root/lib/classMerge";
import { SizeVariants } from "root/types/ui.types";

/* Types */
type SpaceProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: SizeVariants;
  direction?: Direction;
};

type Direction = "top" | "bottom" | "vertical";

/* Constants */
const baseClasses = "";

const sizeVariants: Record<Direction, Record<SizeVariants, string>> = {
  top: {
    sm: "mt-5",
    normal: "mt-10",
    lg: "mt-20",
  },
  bottom: {
    sm: "mb-5",
    normal: "mb-10",
    lg: "mb-20",
  },
  vertical: {
    sm: "my-5",
    normal: "my-10",
    lg: "my-20",
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
