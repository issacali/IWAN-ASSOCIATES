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
        navy: {
          DEFAULT: "#101D32",
          primary: "#101D32",
          deep: "#0B1424",
          light: "#182A48",
          dark: "#080F1C",
        },
        gold: {
          DEFAULT: "#C6A15B",
          antique: "#C6A15B",
          light: "#D9BC82",
          dark: "#A3803C",
          muted: "#B89650",
        },
        ivory: {
          DEFAULT: "#F8F6F1",
          soft: "#F3EFE6",
        },
        charcoal: "#252A33",
        mutedGrey: "#737B87",
        lightBorder: "#E4DFD4",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(198, 161, 91, 0.2)",
        "gold-lg": "0 10px 30px -5px rgba(198, 161, 91, 0.3)",
        card: "0 10px 30px -5px rgba(11, 20, 36, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
