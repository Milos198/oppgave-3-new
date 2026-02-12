import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ToggleThemeButton } from "./components/ToggleThemeButton";

function App() {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: themeStyles[theme].background,
        color: themeStyles[theme].color,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "0.3s ease",
      }}
    >
      {/* HEADER */}
      <header
  style={{
    width: "100%",
    padding: "15px 0",
    textAlign: "center",
    background:
      theme === "light"
        ? "linear-gradient(90deg, #333333, #555555)"
        : "linear-gradient(90deg, #eeeeee, #535353)",
    color: theme === "light" ? "#ffffff" : "#000000",
    marginBottom: "80px",
    boxShadow: "0 4px 8px rgba(3, 3, 3, 0.2)",
  }}
>
  <h2>Min Tema-App</h2>
</header>



      {/* CARD */}
      <div
  style={{
    background: theme === "light" ? "#010101" : "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow:
      theme === "light"
        ? "0 4px 12px rgba(0,0,0,0.1)"
        : "0 4px 12px rgba(255, 255, 255, 0.36)",
    width: "620px",
    textAlign: "center",
    marginBottom: "80px",
    transform: "translateY(0)",
    transition: "0.3s ease",
    color: theme === "light" ? "#ffffff" : "#000000",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
>
  <p>
    Dette er en enkel React-app som viser hvordan man bruker Context for å
    bytte mellom dark og light mode.
  </p>
</div>


      {/* TEKST O TRENUTNOM MODU */}
      <h1>Du bruker nå {theme} mode!</h1>

      {/* DUGME */}
      <ToggleThemeButton />

      {/* FOOTER */}
      <footer
  style={{
    marginTop: "140px",
    opacity: 0.7,
    borderTop: `1px solid ${themeStyles[theme].color}33`,
    paddingTop: "10px",
  }}
>
  <p>Laget av Milos</p>
</footer>

    </div>
  );
}

export default App;
