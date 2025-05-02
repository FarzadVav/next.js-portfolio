"use client";

import { useEffect, useState } from "react";

import classMerge from "root/lib/classMerge";
import { DropDownContext } from "./Context";

/* Types */
type DropDownProps = React.HTMLAttributes<HTMLDivElement>;

/* Constants */
const baseClasses = "relative";

/* Component */
const DropDown: React.FC<DropDownProps> = ({ className, onClick, ...props }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const windowClickHandler = () => {
      setOpen(false);
    };

    window.addEventListener("click", windowClickHandler);

    return () => {
      window.removeEventListener("click", windowClickHandler);
    };
  }, []);

  const currentClass = classMerge(baseClasses, className);

  const toggleHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <DropDownContext value={{ isOpen, toggleHandler }}>
      <div
        className={currentClass}
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
