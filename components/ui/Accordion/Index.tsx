"use client";

import { useState } from "react";

import Box, { BoxProps } from "../Box/Index";
import { AccordionContext } from "./Context";

type AccordionProps = BoxProps;

const Accordion: React.FC<AccordionProps> = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionContext value={{ isOpen, setOpen: (newState: boolean) => setOpen(newState) }}>
      <Box {...props} />
    </AccordionContext>
  );
};

export default Accordion;
