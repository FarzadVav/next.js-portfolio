"use client";

import { createPortal } from "react-dom";
import { useMounted, useElementSize } from "@mantine/hooks";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  HTMLMotionProps,
} from "framer-motion";

import classMerge from "root/lib/classMerge";
import { MobileSheetContext } from "./Context";
import { useEffect } from "react";

type MobileSheetProps = HTMLMotionProps<"div"> & {
  isOpen: boolean;
  closeHandler: () => void;
};

const MobileSheet: React.FC<MobileSheetProps> = ({ isOpen, closeHandler, className, ...props }) => {
  const mounted = useMounted();
  const { ref: drawerRef, height } = useElementSize();

  const [scope, animate] = useAnimate();
  const controls = useDragControls();
  const y = useMotionValue(0);

  useEffect(() => {
    const removeOverflow = () => {
      document.body.classList.remove("overflow-hidden");
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      removeOverflow();
    }

    return () => removeOverflow();
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#drawer", {
      y: [yStart, height],
    });

    closeHandler();
  };

  return createPortal(
    <>
      {isOpen ? (
        <MobileSheetContext value={{ isOpen, handleClose, drawerRef, controls, y }}>
          <motion.div
            ref={scope}
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={classMerge("fixed inset-0 z-50 bg-foreground/25", className)}
            {...props}
          />
        </MobileSheetContext>
      ) : null}
    </>,
    document.body
  );
};

export default MobileSheet;
