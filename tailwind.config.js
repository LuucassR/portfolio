// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <--- CAMBIA ESTO (importante)
  theme: {
    extend: {
      colors: { brand: "#3b82f6" },
    },
  },
  plugins: [],
};
