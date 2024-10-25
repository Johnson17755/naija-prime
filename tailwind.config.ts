import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      markaziText: ['"Markazi Text"', "serif"],
      inter: ["Inter", "sans-serif"],
      dmSerifText: ['"DM Serif Text"', "serif"],
      sourceSerif: ['"Source Serif 4"', "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '16/9': '56.25%',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
export default config;
