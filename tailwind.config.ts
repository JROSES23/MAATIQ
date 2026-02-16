import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "riesgo-alto": "#EF4444",
        "riesgo-medio": "#F59E0B",
        "riesgo-bajo": "#10B981"
      },
      borderRadius: {
        "3xl": "24px"
      }
    }
  },
  plugins: []
};
export default config;
