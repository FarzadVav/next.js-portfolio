import { createContext } from "react";

export const DropDownContext = createContext({
  isOpen: false,
  toggleHandler: () => { }
})