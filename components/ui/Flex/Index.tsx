import classMerge from "root/lib/classMerge";
import { SizeVariants } from "root/types/ui.types";

/* Types */
type Direction = "row" | "column" | "rowReverse" | "columnReverse";

type Align = "start" | "center" | "end";

type Justify = "start" | "center" | "end" | "around" | "evenly" | "between";

type Wrap = "wrap" | "reverse" | "nowrap";

type FlexProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
  space?: SizeVariants;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  wrap?: Wrap;
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
  rowReverse: "flex-row-reverse",
  column: "flex-col",
  columnReverse: "flex-col-reverse",
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

const wrapVariants: Record<Wrap, string> = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  reverse: "flex-wrap-reverse",
};

/* Component */
const Flex: React.FC<FlexProps> = ({ className, ...props }) => {
  const currentClass = classMerge(
    baseClasses,
    spacingVariants[props.space ?? "normal"],
    directionVariants[props.direction ?? "row"],
    alignVariants[props.align ?? "center"],
    justifyVariants[props.justify ?? "start"],
    wrapVariants[props.wrap ?? "nowrap"],
    className
  );

  return <div className={currentClass} {...props} />;
};

export default Flex;
