import { use } from "react";

import { DropDownContext } from "./Context";
import classMerge from "root/lib/classMerge";

type DropDownContentProps = React.HTMLAttributes<HTMLDivElement>;

const DropDownContent: React.FC<DropDownContentProps> = ({ className, ...props }) => {
  const context = use(DropDownContext);

  return (
    <div
      className={classMerge(
        "bg-background min-w-full w-max ring-4 ring-foreground-5 absolute rounded-lg p-3 space-y-1.5 right-0 top-[calc(100%+4px)] transition-all z-20",
        context.isOpen ? "" : "opacity-0 invisible -translate-y-1/12",
        className
      )}
      {...props}
    />
  );
};

export default DropDownContent;
