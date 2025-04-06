import { createContext } from "react";

export const PageModalContext = createContext({
  isOpen: false,
  closeHandler: () => { }
})