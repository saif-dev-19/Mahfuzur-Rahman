/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12161D",
        night: "#0B0E14",
        surface: "#161B24",
        "surface-card": "#1A202C",
        brand: "#12F7D6",
        mint: "#98FAEC",
        steel: "#2D3748",
        "text-primary": "#FFFFFF",
        "text-secondary": "#CBD5E1",
        "text-muted": "#94A3B8",
        "border-subtle": "rgba(255, 255, 255, 0.1)",
        "border-brand": "rgba(18, 247, 214, 0.35)",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(18, 247, 214, 0.15)",
        card: "0 8px 30px rgba(0, 0, 0, 0.35)",
        "card-hover": "0 14px 40px rgba(0, 0, 0, 0.5)",
      },
      maxWidth: {
        shell: "1320px",
      },
    },
  },
  plugins: [],
};
