"use client";

import { KeyboardEvent, useEffect, useState } from "react";

import { DropDownContext } from "./Context";
import classMerge from "root/lib/classMerge";

/* Types */
type DropDownProps = React.HTMLAttributes<HTMLDivElement>;

/* Constants */
const baseClasses = "relative";

/* Component */
const DropDown: React.FC<DropDownProps> = ({ className, onClick, ...props }) => {
  const [isOpen, setOpen] = useState(false);

  const currentClass = classMerge(baseClasses, className);

  useEffect(() => {
    const windowClickHandler = () => {
      setOpen(false);
    };

    window.addEventListener("click", windowClickHandler);

    return () => {
      window.removeEventListener("click", windowClickHandler);
    };
  }, []);

  const toggleHandler = () => {
    setOpen(!isOpen);
  };

  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    const elems = Array.from(ev.currentTarget.querySelectorAll<HTMLElement>("button, a"));
    if (elems.length === 0) return;

    const currentIndex = elems.findIndex((item) => item === document.activeElement);

    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      const nextIndex =
        currentIndex === -1 || currentIndex === elems.length - 1 ? 0 : currentIndex + 1;
      elems[nextIndex].focus();
    }

    if (ev.key === "ArrowUp") {
      ev.preventDefault();
      const prevIndex = currentIndex <= 0 ? elems.length - 1 : currentIndex - 1;
      elems[prevIndex].focus();
    }
  };

  return (
    <DropDownContext value={{ isOpen, toggleHandler }}>
      <div
        className={currentClass}
        onKeyDown={handleKeyDown}
        onClick={(ev) => {
          onClick?.(ev);
          ev.stopPropagation();
        }}
        {...props}
      />
    </DropDownContext>
  );
};

export default DropDown;
