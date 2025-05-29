"use client";

import { HTMLAttributes, use } from "react";

import { ScrollXContext } from "./Context";
import classMerge from "root/lib/classMerge";

function ScrollXContainer({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { scrollRef } = use(ScrollXContext);

  return (
    <div ref={scrollRef} className={classMerge("f-align-scroll", className)} {...props}>
      {children}
    </div>
  );
}

export default ScrollXContainer;
