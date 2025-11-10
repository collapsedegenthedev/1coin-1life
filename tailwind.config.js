/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coin-gold": "#fbbf24",
        "coin-dark": "#050914",
        "coin-light": "#f8fafc",
        "coin-dusk": "#1e1b4b",
        "coin-ember": "#ea580c",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "coin-aurora":
          "radial-gradient(circle at 20% 20%, rgba(251,191,36,0.25), transparent 55%), radial-gradient(circle at 80% 10%, rgba(234,88,12,0.2), transparent 60%), linear-gradient(140deg, #050914 0%, #11183d 45%, #1e1b4b 100%)",
      },
      boxShadow: {
        "coin-card": "0 25px 60px -25px rgba(15, 23, 42, 0.65)",
        "coin-glow": "0 0 50px rgba(251, 191, 36, 0.45)",
      },
    },
  },
  plugins: [],
};

