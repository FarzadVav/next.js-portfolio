"use client";

import { use } from "react";
import { ChevronDownIcon } from "lucide-react";

import { AccordionContext } from "./Context";
import classMerge from "root/lib/classMerge";
import Button from "root/components/ui/Button/Index";
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
      <Button shape="ghost">
        <ChevronDownIcon
          className={`compatible-icon-size transition-transform ${isOpen ? "-scale-y-100" : ""}`}
        />
      </Button>
    </Flex>
  );
};

export default AccordionHeader;
