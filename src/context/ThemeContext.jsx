import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

const intialTheme = "light";
const localStorageItem = "THEME_ITEM";

function ThemeProvider({ children }) {
  const { data: theme, saveData: saveTheme } = useLocalStorage(
    localStorageItem,
    intialTheme
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    saveTheme(newTheme);
  };

  const data = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
