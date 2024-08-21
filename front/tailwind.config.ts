import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200': '200px',
      },
      backgroundImage: {
        'landing': "url('/landing2.jpg')",
      },
    },
  },
  plugins: [],
};


export default config;
