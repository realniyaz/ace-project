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
        background: "#030712", // Clean premium dark base
        luxury: {
          deepBlue: "#0b2545",
          teal: "#134074",
          emerald: "#00b4d8",
          mint: "#8ecae6",
          // New Premium Luxury Gold Palette Profiles
          gold: {
            light: "#F3E5AB",   // Soft vanilla shimmer gold
            DEFAULT: "#D4AF37", // Warm, authentic metallic classic gold
            dark: "#AA7C11",    // Deep burnished antique bronze gold
            accent: "#BC8A6B"   // Elegant warm desert sand gold
          }
        }
      },
      fontFamily: {
        // Luxury display fonts combo setup
        serif: ["var(--font-cormorant)", "var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;