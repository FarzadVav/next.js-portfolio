import { HTMLAttributes, use } from "react";
import { ArrowRightIcon } from "lucide-react";

import { PageModalContext } from "./Context";
import classMerge from "root/lib/classMerge";
import Button from "root/components/ui/Button/Index";

type PageModalHeaderProps = Omit<HTMLAttributes<HTMLHeadingElement>, "children"> & {
  title: string;
};

const PageModalHeader: React.FC<PageModalHeaderProps> = ({ className, title, ...props }) => {
  const pageModalContext = use(PageModalContext);

  return (
    <header className={classMerge("border-b border-foreground/10", className)} {...props}>
      <nav className="h-20 container row-items">
        <Button shape="ghost" onClick={pageModalContext.closeHandler}>
          <ArrowRightIcon className="compatible-icon-size" />
          <span>بازگشت</span>
        </Button>

        <span className="text-xl mx-auto font-kalameh-bold">{title}</span>
      </nav>
    </header>
  );
};

export default PageModalHeader;
