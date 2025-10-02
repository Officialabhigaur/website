"use client";

import React, {  useRef } from "react";
import {  useMotionValue } from "motion/react";
import Image from "next/image";


export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  

  // const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (animationFrameRef.current) {
  //     cancelAnimationFrame(animationFrameRef.current);
  //   }

  //   animationFrameRef.current = requestAnimationFrame(() => {
  //     const halfWidth = event.currentTarget.offsetWidth / 2;
  //     x.set(event.nativeEvent.offsetX - halfWidth);
  //   });
  // };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  if (animationFrameRef.current) {
    cancelAnimationFrame(animationFrameRef.current);
  }

  // store what you need before requestAnimationFrame
  const { offsetWidth } = event.currentTarget;
  const { offsetX } = event.nativeEvent;

  animationFrameRef.current = requestAnimationFrame(() => {
    const halfWidth = offsetWidth / 2;
    x.set(offsetX - halfWidth);
  });
};


  return (
    <>
      {items.map((item) => (
        <div className="group relative -mr-4 " key={item.name}>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-8 w-8 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
