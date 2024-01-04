"use client";

// Add this line to import the CSS styles
import { useEffect, useState } from "react";
import { Button, Divider, Link, Navbar, Toggle } from "react-daisyui";

import { kaushan_script } from "@/lib/fonts";

export default function Headerbar() {
  const [theme, setTheme] = useState<string>("everforest");
  const handleChangeTheme = (event: string) => {
    // console.log(event);
    setTheme(event === "everforest" ? "lightforest" : "everforest");
  };
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Navbar className="glass justify-between bg-secondary">
      <div className={`mx-8 ${kaushan_script.className}`}>
        <Divider>-</Divider>
        <a href="/" className="text-[4rem]">
          Shih-Chi Shao
        </a>
      </div>
      {/* <Divider horizontal /> */}

      <div className="gap-2 px-2">
        <p>dark</p>
        <Toggle
          // defaultChecked
          className="mx-2"
          value={theme}
          onChange={(event) => handleChangeTheme(event.target.value)}
        />
        <p>light</p>
      </div>
    </Navbar>
  );
}
