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

  return (
    <main className="flex w-full flex-col overscroll-none bg-neutral">
      <Headerbar />
      <div className="flex max-h-[764px] w-full flex-col items-center justify-center">
        <Skeleton className="w-full">
          <Mask src={LandingImage.src} className="w-full rounded-none" />
        </Skeleton>

        <div
          className={`${kaushan_script.className} absolute top-16 z-10 md:top-44`}
        >
          <p
            className={`text-4xl text-info md:text-6xl `}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to my Portfolio
          </p>
        </div>
        <Tooltip
          className="abolute bottom-8 md:bottom-12"
          color="info"
          message="Nanhu cirque is sitting at the northernmost edge of Central range, 
          where ancient glacier flow on 3000+ meters high mountains. "
        >
          <IoIosInformationCircle color="white" size="1.5rem" />
        </Tooltip>
      </div>
      <Carousel
        display="sequential"
        className="my-0 max-h-screen w-full rounded-none"
      >
        {images.map((image, index) => (
          <Carousel.Item
            src={image.src}
            className="w-full rounded-none"
            key={index}
          />
        ))}
      </Carousel>
      <motion.div className="progress" style={{ scaleX }} />
    </main>
  );
}
