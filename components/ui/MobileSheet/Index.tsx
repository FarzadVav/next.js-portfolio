import { HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";

type MobileSheetProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  closeHandler: () => void;
};

const MobileSheet: React.FC<MobileSheetProps> = ({ isOpen, closeHandler, ...props }) => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      <div
        className={`fixed z-50 h-dvh bottom-0 left-0 right-0 bg-foreground/25 transition-opacity ${
          isOpen ? "" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeHandler}
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              onClick={(ev) => ev.stopPropagation()}
              className="h-[75%] absolute bottom-0 left-0 right-0 bg-background"
              initial={{ y: "100dvh" }}
              animate={{ y: 0 }}
              exit={{ y: "100dvh" }}
              transition={{
                ease: "easeOut",
                duration: 0.2,
              }}
            >
              <div className="h-1 mx-auto w-1/4 mt-3 bg-foreground/10 rounded-full" />
              <div className="p-3 overflow-y-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam, eveniet
                eum numquam voluptates id consequatur sunt illo optio, quas cumque provident
                reiciendis repellat hic in repellendus libero, qui ipsa eos accusantium voluptate
                nemo suscipit! Fugiat ab, nemo quo placeat repudiandae odio esse sequi, alias optio,
                tempora iste. Autem, alias ex! Quisquam sint quasi alias asperiores omnis deserunt
                vitae mollitia ex, dolores nobis ea similique voluptates iusto, impedit explicabo
                delectus consectetur dolorum beatae exercitationem dolorem neque. Mollitia atque
                impedit, quasi praesentium minus molestiae sapiente assumenda neque aliquid,
                inventore omnis vitae? Inventore natus fugiat et recusandae a quam, delectus culpa
                non!
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>,
    document.body
  );
};

export default MobileSheet;
