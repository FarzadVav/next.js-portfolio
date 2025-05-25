"use client";

import { use } from "react";
import { ChevronDownIcon } from "lucide-react";

import { AccordionContext } from "./Context";
import classMerge from "root/lib/classMerge";
import Flex, { FlexProps } from "root/components/ui/Flex/Index";

type AccordionHeaderProps = FlexProps;

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  className,
  justify,
  onClick,
  children,
  ...props
}) => {
  const { isOpen, setOpen } = use(AccordionContext);

  return (
    <Flex
      {...props}
      justify={justify || "between"}
      className={classMerge("cursor-pointer", className)}
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
    </Flex>
  );
};

export default AccordionHeader;
