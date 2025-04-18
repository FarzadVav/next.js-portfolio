import { DragControls, MotionValue } from "framer-motion";
import { createContext, RefObject } from "react";

type MobileSheetContextT = {
  isOpen: boolean
  handleClose: () => void
  drawerRef?: RefObject<any>
  controls?: DragControls
  y?: MotionValue<number>
}

export const MobileSheetContext = createContext<MobileSheetContextT>({
  isOpen: false,
  handleClose: () => { }
})