import { createContext, useState } from "react";

const ThemeContext = createContext();

const intialTheme = "light";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(intialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const data = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
