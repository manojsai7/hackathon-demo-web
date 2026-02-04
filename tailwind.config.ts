import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          green: "#00ff00",
          red: "#ff0033",
          amber: "#ffb000",
          cyan: "#00ffff",
          purple: "#bf00ff",
        },
        hacker: {
          bg: "#0a0a0a",
          card: "#111111",
          border: "#1a1a1a",
          glow: "#00ff00",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        display: ["Orbitron", "sans-serif"],
      },
      animation: {
        "matrix-rain": "matrix 20s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        "flicker": "flicker 0.15s infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "scroll-x": "scroll-x 20s linear infinite",
      },
      keyframes: {
        "matrix": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(0, 255, 0, 0.3), 0 0 40px rgba(0, 255, 0, 0.1)",
        "glow-red": "0 0 20px rgba(255, 0, 51, 0.3), 0 0 40px rgba(255, 0, 51, 0.1)",
        "glow-cyan": "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1)",
        "terminal": "0 0 0 1px rgba(0, 255, 0, 0.1), inset 0 0 20px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
