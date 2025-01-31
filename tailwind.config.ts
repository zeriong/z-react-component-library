import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-1": "#2E073F",
        "brand-2": "#7A1CAC",
        "brand-3": "#AD49E1",
        "brand-4": "#EBD3F8",

        "error-1": "#C80036",
      },
    },
  },
  plugins: [],
} satisfies Config;
