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
      colors: {
        ink: {
          DEFAULT: "#0c0b0a",
          soft: "#161412",
          muted: "#2a2622",
        },
        cream: {
          DEFAULT: "#f6f1ea",
          soft: "#fbf8f3",
          muted: "#ebe4d8",
        },
        gold: {
          DEFAULT: "#c4a574",
          light: "#e0c9a0",
          dark: "#9a7b4f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widestx: "0.28em",
      },
      boxShadow: {
        glow: "0 20px 60px -24px rgba(196, 165, 116, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
