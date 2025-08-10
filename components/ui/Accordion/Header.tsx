"use client";

import { ChevronDownIcon } from "lucide-react";
import { HTMLAttributes, use, useRef } from "react";

import { AccordionContext } from "./Context";
import classMerge from "root/lib/classMerge";

type AccordionHeaderProps = HTMLAttributes<HTMLDivElement>;

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ className, children, ...props }) => {
  const { isOpen, setOpen } = use(AccordionContext);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      {...props}
      className={classMerge("f-align justify-between cursor-pointer", className)}
      onClick={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();

        buttonRef.current?.focus();
        buttonRef.current?.click();
      }}
    >
      <div className="font-vazir-bold text-lg">{children}</div>

      <button className="btn-ghost" ref={buttonRef} onClick={() => setOpen(!isOpen)}>
        <ChevronDownIcon
          className={`btn-icon-size transition-transform ${isOpen ? "-scale-y-100" : ""}`}
        />
      </button>
    </div>
  );
};

export default AccordionHeader;
