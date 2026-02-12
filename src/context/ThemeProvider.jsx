import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    light: {
      background: "#f5f5f5",
      color: "#222222",
      buttonBg: "#333333",
      buttonText: "#ffffff",
    },
    dark: {
      background: "#1a1a1a",
      color: "#f5f5f5",
      buttonBg: "#eeeeee",
      buttonText: "#000000",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
