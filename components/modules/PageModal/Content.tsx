import { HTMLAttributes } from "react";

import classMerge from "root/lib/classMerge";

type PageModalContentProps = HTMLAttributes<HTMLDivElement>;

const PageModalContent: React.FC<PageModalContentProps> = ({ className, ...props }) => {
  return <div className={classMerge("container h-[calc(100dvh-5rem)] py-3 overflow-y-auto", className)} {...props} />;
};

export default PageModalContent;
