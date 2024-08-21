import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      keyframes: {
        morph: {
          "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " },
          "100%": { borderRadius: "32% 68% 46% 54% / 59% 75% 25% 41%  " },
        },
        spin: {
          to: { transform: " " },
        },
      },
      // animation: {
      //   morph: "morph 50s ease-in-out infinite alternate",
      //   spin: "spin 50s ease-in-out infinite alternate",
      // },
    },
  },
  plugins: [],
};
export default config;
