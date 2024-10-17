import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
        sm: "640px",
        md: "768px",
        lg: "1025px",
        clg: "1365px",
        clg2: "1367px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        dark: "#141414",
        primary: "#f16134",
        secondary: "#5c57a6",
      },
    },
  },
  plugins: [],
};
export default config;
