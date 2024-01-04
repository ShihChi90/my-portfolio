"use client";

import { useRef } from "react";
import {
  Card,
  Carousel,
  Mask,
  Skeleton,
  Tooltip,
  Divider,
} from "react-daisyui";
import { useTheme } from "react-daisyui";
import { IoIosInformationCircle } from "react-icons/io";

import type { MotionValue } from "framer-motion";
import {
  motion,
  motionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Headerbar from "@/lib/components/Headerbar";
import { kaushan_script } from "@/lib/fonts";
import images from "@/lib/images";
import LandingImage from "@/lib/images/LandingImage.jpg";

// import PanoImage from "@/lib/images/nanhu/20220804-_MG_1207-全景.jpg";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, distance]);
  }
  const y = useParallax(scrollYProgress, 100);
  const y2 = useParallax(springY, 100);
  return (
    <main className="flex w-full flex-col overscroll-none bg-neutral">
      <motion.div style={{ y: 0 }}>
        <Headerbar />
      </motion.div>
      <motion.div
        style={{ y: 0 }}
        className="relative flex h-full w-full flex-col items-center justify-center"
      >
        <Skeleton className="w-full">
          <Mask src={LandingImage.src} className="w-full rounded-none" />
        </Skeleton>

        <div
          className={`${kaushan_script.className} absolute top-24 z-10 md:top-44`}
        >
          <p
            className={`text-4xl text-info md:shrink-0 md:text-6xl `}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to my Portfolio
          </p>
        </div>
        <Tooltip
          className="absolute bottom-4"
          color="info"
          message="Nanhu cirque is sitting at the northernmost edge of Central range, 
          where ancient glacier flow on 3000+ meters high mountains. "
        >
          <IoIosInformationCircle color="white" size="1.5rem" />
        </Tooltip>
      </motion.div>
      <motion.div style={{ y: springY }}>
        <Carousel display="sequential" className="my-2 w-full rounded-none">
          {images.map((image, index) => (
            <Carousel.Item
              src={image.src}
              className="w-full rounded-none"
              key={index}
            />
          ))}
        </Carousel>
      </motion.div>
      <motion.div className="progress" style={{ scaleX }} />
    </main>
  );
}
