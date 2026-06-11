import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D62828",
          redDark: "#A61E1E",
          redSoft: "#FDECEC",
          white: "#FFFFFF",
          bg: "#FAFAFA",
          text: "#1F2937",
          muted: "#6B7280",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};

export default config;
