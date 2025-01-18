/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          secondary: "#F9FAFB",
          textPrimary: "#1F2937",
          textSecondary: "#6B7280",
          accent: "#3B82F6",
          accentHover: "#2563EB",
          border: "#E5E7EB",
        },
        dark: {
          background: "#1F2937",
          secondary: "#111827",
          textPrimary: "#F9FAFB",
          textSecondary: "#9CA3AF",
          accent: "#60A5FA",
          accentHover: "#2563EB",
          border: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
