"use client";

// Add this line to import the CSS styles
import { useEffect, useState } from "react";
import { Button, Navbar, Toggle } from "react-daisyui";

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
    <Navbar className="justify-between bg-secondary">
      <Button className="glass mx-2 bg-secondary" size="md">
        <a href="/" className="text- text-2xl font-bold">
          Shih-Chi Shao
        </a>
      </Button>
      {/* <Divider horizontal /> */}

      <div className="gap-2 px-2">
        <p>dark</p>
        <Toggle
          className="mx-2"
          value={theme}
          onChange={(event) => handleChangeTheme(event.target.value)}
        />
        <p>light</p>
      </div>
    </Navbar>
  );
}
