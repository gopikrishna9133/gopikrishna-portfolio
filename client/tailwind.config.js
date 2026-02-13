/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        surface: "#1E293B",
        primary: "#22D3EE",
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8",
      },
    },
  },
  plugins: [],
};
