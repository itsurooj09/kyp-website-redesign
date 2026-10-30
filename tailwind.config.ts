import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kyp: {
          black: "#000000",
          lime: "#66cc00",
          "lime-hover": "#57b300",
          mint: "#c6f5ef",
          teal: "#6fd3c4",
          "teal-dark": "#4db3a3",
          navy: "#033653",
          "navy-light": "#084970",
          "navy-dark": "#022438",
          "navy-surface": "#052235",
          charcoal: "#070c12",
          surface: "#0c1520",
          "surface-light": "#132132",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "glow-line": "glowLine 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowLine: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-pattern": "radial-gradient(circle at 50% 50%, rgba(3, 54, 83, 0.25) 0%, rgba(0, 0, 0, 0.95) 70%)",
      },
      boxShadow: {
        "lime-glow": "0 0 25px -5px rgba(102, 204, 0, 0.35)",
        "teal-glow": "0 0 25px -5px rgba(111, 211, 196, 0.3)",
        "mint-glow": "0 0 25px -5px rgba(198, 245, 239, 0.25)",
        "navy-card": "0 10px 30px -10px rgba(3, 54, 83, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
