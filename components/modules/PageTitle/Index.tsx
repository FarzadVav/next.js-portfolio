import { HTMLAttributes } from "react";
import { SparklesIcon } from "lucide-react";

import classMerge from "root/lib/classMerge";

function PageTitle({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classMerge("container f-center gap-3", className)} {...props}>
      <SparklesIcon className="compatible-icon" />
      <div className="font-kalameh-bold text-center text-2xl">{children}</div>
      <SparklesIcon className="compatible-icon -scale-x-100" />
    </div>
  );
}

export default PageTitle;
