import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply the "dark" class to <html> if theme is "dark"
    document.documentElement.classList.toggle("dark", theme === "dark");
    // Save theme to localStorage as a plain string
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
