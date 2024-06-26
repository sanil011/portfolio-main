import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#c1c2c6",
        lightMain: "#000000",
        text: "#868e96",
        // text: "#BBC4CC",
        orange: "#ffa51d",
        background: "#1A1A1E",
        lightText: "rgb(55 65 81 )",
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
