import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Use class strategy for manual dark mode control
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"], // Use your chosen font here
        quicksand: ["quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
