import { createContext, RefObject } from "react";

export const ScrollXContext = createContext<{
  scrollRef?: RefObject<HTMLDivElement | null>
}>({})