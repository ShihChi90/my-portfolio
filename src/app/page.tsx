"use client";

import { Card, Carousel, Mask } from "react-daisyui";

import Headerbar from "@/lib/components/Headerbar";
import { kaushan_script } from "@/lib/fonts";
import Image1 from "@/lib/images/nanhu/LandingImage.jpg";

// import PanoImage from "@/lib/images/nanhu/20220804-_MG_1207-全景.jpg";

export default function Home() {
  return (
    <main className="flex w-full flex-col overflow-hidden bg-neutral">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <Headerbar />
        <Mask src={Image1.src} className="w-full rounded-none" />
        {/* <Carousel display="sequential" className="w-full rounded-none">
          <Carousel.Item src={Image1.src} className="w-full rounded-none" />
          <Carousel.Item src={Image1.src} className="w-full rounded-none" />
        </Carousel> */}
        <div
          className={`${kaushan_script.className} absolute top-44 flex-col items-center justify-center`}
        >
          <p
            className="text-6xl text-secondary"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to my Portfolio
          </p>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p className="my-3 text-2xl">scroll through this page</p>
      </div>
    </main>
  );
}
