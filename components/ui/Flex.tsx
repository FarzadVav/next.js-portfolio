import classMerge from "root/lib/classMerge";
import { SizeVariants } from "root/types/ui.types";

/* Types */
type Direction = "row" | "column";

type Align = "start" | "center" | "end";

type Justify = "start" | "center" | "end" | "around" | "evenly" | "between";

type FlexProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
  space?: SizeVariants;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
};

/* Constants */
const baseClasses = "flex";

const spacingVariants: Record<SizeVariants, string> = {
  sm: "gap-1.5",
  normal: "gap-3",
  lg: "gap-6",
};

const directionVariants: Record<Direction, string> = {
  row: "flex-row",
  column: "flex-col",
};

const alignVariants: Record<Align, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifyVariants: Record<Justify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  around: "justify-around",
  evenly: "justify-evenly",
  between: "justify-between",
};

/* Component */
const Flex: React.FC<FlexProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    spacingVariants[props.space ?? "normal"],
    directionVariants[props.direction ?? "row"],
    alignVariants[props.align ?? "center"],
    justifyVariants[props.justify ?? "start"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Flex;
