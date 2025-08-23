"use client";

import { motion } from "framer-motion";
import { cn } from "@kadoui/react/utils";
import Image, { StaticImageData } from "next/image";

type PageHeroProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title"> & {
  src: StaticImageData;
  title: string;
  description: string;
  darkInvert?: boolean;
};

const PageHero: React.FC<PageHeroProps> = ({ src, title, description, darkInvert, ...props }) => {
  return (
    <div className="container f-align my-20 gap-6 max-md:flex-col max-md:justify-center" {...props}>
      <motion.div
        className="size-40 min-w-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={title}
          width={160}
          height={160}
          className={cn("size-full rounded-lg", darkInvert ? "dark:invert-100" : null)}
        />
      </motion.div>

      <div className="max-md:text-center">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-3"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default PageHero;
