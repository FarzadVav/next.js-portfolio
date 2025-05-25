import { HTMLAttributes, ReactNode, use } from "react";
import { ChevronDown } from "lucide-react";

import { DropDownContext } from "./Context";
import classMerge from "root/lib/classMerge";

export type DropDownTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
};

const DropDownTrigger: React.FC<DropDownTriggerProps> = ({
  className,
  children,
  onClick,
  icon,
  ...props
}) => {
  const context = use(DropDownContext);

  return (
    <button
      className={classMerge("btn", className)}
      onClick={(ev) => {
        onClick?.(ev);
        context.toggleHandler();
      }}
      {...props}
    >
      {children}
      <span className={`transition-transform ${context.isOpen ? "-scale-y-100" : ""}`}>
        {icon || <ChevronDown className="compatible-icon" />}
      </span>
    </button>
  );
};

export default DropDownTrigger;
