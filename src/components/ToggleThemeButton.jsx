import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <button
  onClick={toggleTheme}
  style={{
    background: themeStyles[theme].buttonBg,
    color: themeStyles[theme].buttonText,
    padding: "12px 24px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.2s ease",
  }}
>
  {theme === "light" ? "🌙 Dark mode" : "🌞 Light mode"}
</button>

  );
};
