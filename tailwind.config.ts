import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "rgb(17 24 39)",      // gray-900
        accent: "rgb(59 130 246)",   // blue-500
        success: "rgb(34 197 94)",   // green-500
        warn: "rgb(234 179 8)",      // yellow-500
        danger: "rgb(239 68 68)"     // red-500
      },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
};
export default config;
