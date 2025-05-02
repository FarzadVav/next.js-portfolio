import { ReactNode, use } from "react";
import { ChevronDown } from "lucide-react";

import { DropDownContext } from "./Context";
import Button, { ButtonProps } from "../Button/Index";

export type DropDownTriggerProps = ButtonProps & {
  icon?: ReactNode;
};

const DropDownTrigger: React.FC<DropDownTriggerProps> = ({ children, onClick, icon, ...props }) => {
  const context = use(DropDownContext);

  return (
    <Button
      onClick={(ev) => {
        onClick?.(ev);
        context.toggleHandler();
      }}
      {...props}
    >
      {children}
      <span className={`transition-transform ${context.isOpen ? "-scale-y-100" : ""}`}>
        {icon || <ChevronDown className="compatible-icon-size" />}
      </span>
    </Button>
  );
};

export default DropDownTrigger;
