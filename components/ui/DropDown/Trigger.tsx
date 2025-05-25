import { ChevronDown } from "lucide-react";
import { HTMLAttributes, ReactNode, use } from "react";

import { DropDownContext } from "./Context";

export type DropDownTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
};

const DropDownTrigger: React.FC<DropDownTriggerProps> = ({ children, onClick, icon, ...props }) => {
  const context = use(DropDownContext);

  return (
    <button
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
