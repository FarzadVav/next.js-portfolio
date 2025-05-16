"use client";

import { use } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { AccordionContext } from "./Context";
import classMerge from "root/lib/classMerge";

type AccordionContentProps = HTMLMotionProps<"div">;

const AccordionContent: React.FC<AccordionContentProps> = ({ className, children, ...props }) => {
  const { isOpen } = use(AccordionContext);

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          className={classMerge("overflow-hidden", className)}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default AccordionContent;
