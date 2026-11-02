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
          black: "#0f172a", // Dark text / accents
          white: "#ffffff",
          slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
          lime: "#16a34a", // Vibrant accessible green on light background
          "lime-hover": "#15803d",
          "lime-light": "#dcfce7",
          mint: "#0d9488",
          teal: "#0284c7",
          "teal-light": "#e0f2fe",
          "teal-dark": "#0369a1",
          navy: "#033653",
          "navy-light": "#084970",
          "navy-dark": "#022438",
          "navy-surface": "#f8fafc",
          charcoal: "#f1f5f9",
          surface: "#ffffff",
          "surface-light": "#f8fafc",
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
          "50%": { transform: "translateY(-8px)" },
        },
        glowLine: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "lime-glow": "0 0 25px -5px rgba(22, 163, 74, 0.25)",
        "teal-glow": "0 0 25px -5px rgba(2, 132, 199, 0.25)",
        "card-soft": "0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 12px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
