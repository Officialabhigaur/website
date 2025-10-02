"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { AnimatedTooltipSection } from "./AnimatedTooltipSection";

export function MovingBorderButton() {
  return (
    <div className="sm:text-center text-left mb-5">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-blue-900 dark:text-white border-neutral-200 dark:border-slate-800  "
      >
        <AnimatedTooltipSection />
       &nbsp;  &nbsp; &nbsp;Trusted by 10k+ student
      </Button>
    </div>
  );
}
