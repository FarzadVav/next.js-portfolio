"use client";

import { createPortal } from "react-dom";
import { useMounted } from "@mantine/hooks";
import { HTMLAttributes, useEffect, useRef } from "react";

import classMerge from "root/lib/classMerge";
import { PageModalContext } from "./Context";

type PageModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  closeHandler: () => void;
};

const PageModal: React.FC<PageModalProps> = ({ isOpen, closeHandler, className, ...props }) => {
  const mounted = useMounted();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const rootElem = document.getElementById("root") as HTMLDivElement;
    const bodyElem = document.body;

    if (isOpen) {
      bodyElem.classList.add("overflow-hidden");
      rootElem.classList.add("translate-x-full");
    } else {
      bodyElem.classList.remove("overflow-hidden");
      rootElem.classList.remove("translate-x-full");
    }

    return () => {
      bodyElem.classList.remove("overflow-hidden");
      rootElem.classList.remove("translate-x-full");
    };
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <PageModalContext value={{ isOpen, closeHandler }}>
      {createPortal(
        <>
          <div
            className={classMerge(
              "w-screen h-dvh bg-background fixed top-0 left-0 transition-all duration-500",
              isOpen ? "" : "opacity-0 invisible -translate-x-full",
              className
            )}
            {...props}
          />
        </>,
        document.body
      )}
    </PageModalContext>
  );
};

export default PageModal;
