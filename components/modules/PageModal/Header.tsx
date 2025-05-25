import { HTMLAttributes, use } from "react";
import { ArrowRightIcon } from "lucide-react";

import { PageModalContext } from "./Context";
import classMerge from "root/lib/classMerge";

type PageModalHeaderProps = Omit<HTMLAttributes<HTMLHeadingElement>, "children"> & {
  title: string;
};

const PageModalHeader: React.FC<PageModalHeaderProps> = ({ className, title, ...props }) => {
  const pageModalContext = use(PageModalContext);

  return (
    <header className={classMerge("border-b border-foreground/10", className)} {...props}>
      <nav className="h-20 container row-items">
        <button className="btn btn-ghost" onClick={pageModalContext.closeHandler}>
          <ArrowRightIcon className="compatible-icon" />
          <span>بازگشت</span>
        </button>

        <span className="text-xl mx-auto font-kalameh-bold">{title}</span>
      </nav>
    </header>
  );
};

export default PageModalHeader;
