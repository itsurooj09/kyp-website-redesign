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
          // Official Client Brand Palette (#000000, #66cc00, #c6f5ef, #6fd3c4, #033653)
          black: "#000000",
          brandBlack: "#000000",
          white: "#ffffff",
          
          lime: "#66cc00", // Official KYP Lime Green
          brandLime: "#66cc00",
          "lime-hover": "#55b300",
          "lime-light": "#eaffd9",
          
          mint: "#c6f5ef", // Official KYP Ice Cyan / Soft Mint
          brandIce: "#c6f5ef",
          "mint-dark": "#0fa895",
          
          teal: "#6fd3c4", // Official KYP Turquoise / Teal
          brandTeal: "#6fd3c4",
          "teal-light": "#e8faf7",
          "teal-dark": "#033653",
          
          navy: "#033653", // Official KYP Deep Navy
          brandNavy: "#033653",
          "navy-light": "#084970",
          "navy-dark": "#011f30",
          "navy-surface": "#033653",
          
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
            900: "#000000",
          },
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
      boxShadow: {
        "card-soft": "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 12px 28px -4px rgba(3, 54, 83, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        "lime-glow": "0 0 24px -2px rgba(102, 204, 0, 0.4)",
        "teal-glow": "0 0 24px -2px rgba(111, 211, 196, 0.4)",
        "navy-glow": "0 0 24px -2px rgba(3, 54, 83, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
