// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "[data-theme='dark']"], // Soporta ambos sistemas
  theme: {
    extend: {
      colors: { 
        brand: "#3b82f6",
      },
      animation: {
        "blob": "blob 7s infinite",
        "animation-delay-2000": "animation-delay-2000 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "animation-delay-2000": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-30px, 20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(20px, -50px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
