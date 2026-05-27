import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#142033",
        steel: "#536174",
        signal: "#f05a28",
        cobalt: "#1e63d6"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        panel: "0 18px 55px rgba(20, 32, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
