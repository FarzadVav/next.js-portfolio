import { FC, HTMLAttributes } from "react";

import classMerge from "root/lib/classMerge";

type MobileSheetContentProps = HTMLAttributes<HTMLDivElement>;

const MobileSheetContent: FC<MobileSheetContentProps> = ({ className, ...props }) => {
  return <div className={classMerge("overflow-y-auto p-3", className)} {...props} />;
};

export default MobileSheetContent;
