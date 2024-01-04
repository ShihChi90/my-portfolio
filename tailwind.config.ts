import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        everforest: {
          primary: "#a7c080",
          secondary: "#48584e",
          accent: "#d699b6",
          neutral: "#293136",
          "base-100": "#293136",
          info: "#9da9a0",
          success: "#7fbbb3",
          warning: "#e69875",
          error: "#e67e80",
        },
      },
      {
        lightforest: {
          primary: "#a7c080",
          secondary: "#e5e6c5",
          accent: "#d699b6",
          neutral: "#f2efdf",
          "base-100": "#f2efdf",
          info: "#ddd8be",
          success: "#7fbbb3",
          warning: "#e69875",
          error: "#e67e80",
        },
      },
      // "light",
      // "dark",
      // {
      //   mytheme: {
      //     primary: "#facc15",
      //     secondary: "#84cc16",
      //     accent: "#3b82f6",
      //     neutral: "#f5f5f4",
      //     "base-100": "#f5f5f4",
      //     info: "#78716c",
      //     success: "#d9f99d",
      //     warning: "#fed7aa",
      //     error: "#fca5a5",
      //   },
      // },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "everforest", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), daisyui],
};
export default config;
