import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lumios-marker': ['"Lumios Marker"', 'cursive'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#132841",
        "secondary-color": "#F3F5FA",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // background: "#FFFFFF", // or DEFAULT
            // foreground: "#11181C", // or 50 to 900 DEFAULT
            // primary: {
            //   //... 50 to 900
            //   foreground: "#132841",
            //   DEFAULT: "#006FEE",
            // },
            primary: "#141212",
            secondary: "#ffffff",
          },
        },
      },
    }),
  ],
};
export default config;
