"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  Carousel,
  Mask,
  Skeleton,
  Tooltip,
  Divider,
  Link,
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
import { nanhuImages, LandingImage, ProfileImage } from "@/lib/images";

// import PanoImage from "@/lib/images/nanhu/20220804-_MG_1207-全景.jpg";

export default function Home() {
  // const { theme, setTheme } = useTheme();
  const { scrollY, scrollYProgress } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const top = useTransform(scaleX, [0, 1], [0, windowHeight - 100]);

  return (
    <main className="flex w-full flex-col items-center justify-center overflow-auto bg-neutral">
      <div className="z-20 w-full">
        <Headerbar />
      </div>
      <div
        className={`flex max-h-[768px] w-full flex-col items-center justify-center`}
      >
        <Skeleton>
          <Mask
            alt="An Image of Nanhu Cirque in mist view from above"
            src={LandingImage.src}
          />
        </Skeleton>

        <div
          className={`${kaushan_script.className} absolute top-24 z-10 md:top-44`}
        >
          <p
            className={`text-4xl text-info md:text-6xl `}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Rain in the vicinity
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
      <div className="my-4 flex h-auto flex-wrap justify-center gap-8 bg-secondary px-4 py-8 md:px-24">
        <section className="bottom-0 flex flex-col text-left md:max-w-[50%]">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p className="hyphens-auto text-lg">
            Hi, I'm <a className=" text-primary">Shih-Chi (Charles) Shao</a>, a
            hobbist photographer with specialty in landscape and urban
            photograpy. <br />
            <br />
            I love finding the unseen beauty in the world and capturing it with
            my camera. With my knowledge in photography and design, I want to
            create immersive experience that are not only aesthetically pleasing
            but also meaningful. <br />
            Recently I've start to learn web developing, I'm pursuing to build
            applications with enjoyable user interface and user experience.
          </p>
        </section>
        <section className="flex flex-col items-center md:w-[30%]">
          <Mask
            variant="circle"
            src={ProfileImage.src}
            className="mb-4 max-w-[60%] rounded-none md:mt-4 md:max-w-[80%]"
          />
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <div className="flex flex-row gap-2 text-lg">
            <p>{"Email:"}</p>
            <Link target="_blank" href="mailto:shao2001@gmail.com">
              shao2001@gmail.com
            </Link>
          </div>
          <div className="flex flex-row gap-2 text-lg">
            <p>{"Phone:"}</p>
            <Link target="_blank">0987-654-321</Link>
          </div>
        </section>
      </div>
      <div className="mb-4 max-w-[80%] md:max-w-[50%]">
        <Carousel display="numbered" width="full">
          {nanhuImages.map((image, index) => (
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
