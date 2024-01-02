"use client";

// Add this line to import the CSS styles
import { useEffect, useState } from "react";
import { Button, Navbar, Toggle, Divider } from "react-daisyui";

export default function Headerbar() {
  const [theme, setTheme] = useState<string>("everforest");
  const handleChangeTheme = () => {
    console.log(theme);
    setTheme(theme === "everforest" ? "lightforest" : "everforest");
  };
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Navbar className="justify-between gap-4 bg-secondary">
      <Button color="primary" className="glass mx-2" size="md">
        <a href="/" className="text- text-2xl font-bold">
          Shih-Chi Shao
        </a>
      </Button>

      <div className="gap-2">
        <Divider horizontal />
        <p>dark</p>
        <Toggle className="mx-2" onChange={() => handleChangeTheme()} />
        <p>light</p>
      </div>
    </Navbar>
  );
}
