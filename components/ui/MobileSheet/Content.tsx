import { FC, HTMLAttributes } from "react";

import classMerge from "root/lib/classMerge";

type MobileSheetContentProps = HTMLAttributes<HTMLDivElement>;

const MobileSheetContent: FC<MobileSheetContentProps> = ({ className, ...props }) => {
  return <div className={classMerge("overflow-y-auto px-3 pb-3", className)} {...props} />;
};

export default MobileSheetContent;
