"use client";

import { HTMLAttributes, use } from "react";
import { ChevronDownIcon } from "lucide-react";

import { AccordionContext } from "./Context";
import classMerge from "root/lib/classMerge";

type AccordionHeaderProps = HTMLAttributes<HTMLDivElement>;

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  className,
  onClick,
  children,
  ...props
}) => {
  const { isOpen, setOpen } = use(AccordionContext);

  return (
    <div
      {...props}
      className={classMerge("f-align justify-between cursor-pointer", className)}
      onClick={(ev) => {
        onClick?.(ev);
        setOpen(!isOpen);
      }}
    >
      {children}
      <button className="btn btn-ghost">
        <ChevronDownIcon
          className={`compatible-icon transition-transform ${isOpen ? "-scale-y-100" : ""}`}
        />
      </button>
    </div>
  );
};

export default AccordionHeader;
