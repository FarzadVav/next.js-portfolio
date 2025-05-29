"use client";

import { HTMLAttributes, useState } from "react";

import { AccordionContext } from "./Context";
import classMerge from "root/lib/classMerge";

type AccordionProps = HTMLAttributes<HTMLDivElement>;

const Accordion: React.FC<AccordionProps> = ({ className, ...props }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionContext value={{ isOpen, setOpen: (newState: boolean) => setOpen(newState) }}>
      <div className={classMerge("card card-effect", className)} {...props} />
    </AccordionContext>
  );
};

export default Accordion;
