/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#292F36",
        night: "#1A1E23",
        brand: "#12F7D6",
        mint: "#98FAEC",
        steel: "#43454D",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(18, 247, 214, 0.18)",
      },
    },
  },
  plugins: [],
};
