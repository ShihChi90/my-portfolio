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
  const { scrollX, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const top = useTransform(scaleX, [0, 1], [0, window.innerHeight - 100]);

  return (
    <main className="flex w-full flex-col items-center justify-center overscroll-none bg-neutral">
      <div className="z-20 w-full">
        <Headerbar />
      </div>
      <div className="flex max-h-[764px] w-full flex-col items-center justify-center">
        <Skeleton className="w-full">
          <Mask src={LandingImage.src} className="w-full rounded-none" />
        </Skeleton>

        <div
          className={`${kaushan_script.className} absolute top-24 z-10 md:top-44`}
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
      <div className="my-4 max-w-[80%] md:max-w-[50%]">
        <Carousel display="numbered" width="full">
          {images.map((image, index) => (
            <Carousel.Item src={image.src} className="rounded" key={index} />
          ))}
        </Carousel>
      </div>
      <motion.div
        className="z-10"
        style={{
          position: "fixed",
          top: top,
          right: 0,
          width: "8px", // Set the width of the vertical bar
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Change the color and transparency here
          transformOrigin: "top",
          height: 100, // Set the height of the vertical bar to full viewport height
        }}
      />
    </main>
  );
}
