import { FC, use } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import classMerge from "root/lib/classMerge";
import { MobileSheetContext } from "./Context";

type MobileSheetDrawerProps = HTMLMotionProps<"div">;

const MobileSheetDrawer: FC<MobileSheetDrawerProps> = ({ className, ...props }) => {
  const { drawerRef, controls, y, handleClose } = use(MobileSheetContext);

  return (
    <motion.div
      id="drawer"
      ref={drawerRef}
      onClick={(ev) => ev.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        ease: "easeInOut",
      }}
      className={classMerge(
        "absolute bottom-0 h-[75%] w-full overflow-hidden rounded-t-3xl bg-background",
        className
      )}
      style={{ y }}
      drag="y"
      dragControls={controls}
      onDragEnd={() => {
        if ((y?.get() || 0) >= 100) {
          handleClose();
        }
      }}
      dragListener={false}
      dragConstraints={{
        top: 0,

        bottom: 0,
      }}
      dragElastic={{
        top: 0,

        bottom: 0.5,
      }}
      {...props}
    />
  );
};

export default MobileSheetDrawer;
