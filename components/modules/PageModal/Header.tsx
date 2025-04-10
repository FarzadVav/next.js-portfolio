import { HTMLAttributes, use } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import Button from "../../ui/Button/Index";
import classMerge from "root/lib/classMerge";
import { PageModalContext } from "./Context";

type PageModalHeaderProps = Omit<HTMLAttributes<HTMLHeadingElement>, "children"> & {
  title: string;
};

const PageModalHeader: React.FC<PageModalHeaderProps> = ({ className, title, ...props }) => {
  const pageModalContext = use(PageModalContext);

  return (
    <header className={classMerge("border-b border-foreground/10", className)} {...props}>
      <nav className="h-20 container row-items">
        <Button onClick={pageModalContext.closeHandler}>
          <DynamicIcon name="arrow-right" className="compatible-icon-size" />
          <span>بازگشت</span>
        </Button>

        <span className="text-xl mx-auto font-kalameh-bold">{title}</span>
      </nav>
    </header>
  );
};

export default PageModalHeader;
