/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F0E",
        section: "#0F1412",
        primary: "#00FF88",
        primaryHover: "#00cc6a",
        textMuted: "#9CA3AF",
        textSoft: "#6B7280",
        card: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.1)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(0,255,136,0.3)"
      },
      backdropBlur: {
        xl: "20px"
      }
    },
  },
  plugins: [],
};