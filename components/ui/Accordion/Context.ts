"use client";

import { createContext } from "react";

export const AccordionContext = createContext<{
  isOpen: boolean,
  setOpen: (newState: boolean) => void
}>({
  isOpen: false,
  setOpen: () => { }
})