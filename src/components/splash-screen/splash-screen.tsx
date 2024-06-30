"use client";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

const TEXT = "IP Address Tracker";

const textVariant = {
  hidden: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
  },
};

export default function SplashScreen({ children }: { children: ReactNode }) {
  //   states
  const [completed, setComplete] = useState<boolean>(false);

  return (
    <>
      <section
        className={cn(
          "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white",
          {
            "hidden ": completed,
          }
        )}
      >
        <motion.h1
          initial="hidden"
          whileInView={"reveal"}
          transition={{
            staggerChildren: 0.05,
          }}
          className="text-black text-2xl mt-8 text-center font-semibold"
          onAnimationComplete={() => setComplete(true)}
        >
          {TEXT.split("").map((char) => (
            <motion.span
              key={char}
              variants={textVariant}
              transition={{ duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </section>

      {completed && children}
    </>
  );
}
