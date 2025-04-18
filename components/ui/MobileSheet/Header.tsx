import { FC, HTMLAttributes, use } from "react";

import classMerge from "root/lib/classMerge";
import { MobileSheetContext } from "./Context";

type MobileSheetHeaderProps = HTMLAttributes<HTMLDivElement>;

const MobileSheetHeader: FC<MobileSheetHeaderProps> = ({ className, children, ...props }) => {
  const { controls } = use(MobileSheetContext);

  return (
    <div
      className={classMerge(
        "pt-3 pb-6 cursor-grab touch-none group active:cursor-grabbing center-items",
        className
      )}
      onPointerDown={(ev) => controls?.start(ev)}
      {...props}
    >
      {children || (
        <span className="h-2 w-1/5 rounded-full bg-foreground/10 transition-all group-active:scale-x-110 group-active:bg-foreground" />
      )}
    </div>
  );
};

export default MobileSheetHeader;
