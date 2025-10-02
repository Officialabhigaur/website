"use client";

import { motion } from "motion/react";
import { MovingBorderButton } from "./MovingBorderButton";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { BentoGridContainer } from "./BentoGridContainer";
import { InfiniteMovingCardsContainer } from "./InfiniteMovingCardsContainer";

export function HeroSection() {
  return (
    <>
      <div className="relative mx-auto py-20  w-full h-full  flex  flex-col items-center justify-center">
        <BackgroundRippleEffect />
        <div className="px-4 py-10 md:py-20">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <MovingBorderButton />
          </motion.div>
          <h1 className="relative z-10 mx-auto max-w-4xl text-blue-900 text-left sm:text-center text-4xl font-bold  md:text-4xl lg:text-7xl dark:text-slate-300">
            {"Future-ready careers begin here".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-3xl py-4 text-justify sm:text-center text-sm font-normal sm:text-lg text-neutral-600 dark:text-neutral-400"
          >
            With AVR Services, the top training institute for Data Analytics,
            Data Science, Web Development & Generative AI, One will be taught by
            certified trainers, will work on live projects, and will receive an
            internship certificate that will land you your first tech job.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-6 flex flex-wrap items-center justify-left sm:justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-blue-900 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
              Explore Courses
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-blue-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer">
              Start Learning Now
            </button>
          </motion.div>
        </div>
      </div>

      <BentoGridContainer />
      <InfiniteMovingCardsContainer />
    </>
  );
}
