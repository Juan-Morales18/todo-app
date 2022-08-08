import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MainContainer } from "../containers/MainContainer";

function AppContainer() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme}`}>
      <div className="app-container">
        <MainContainer />
      </div>
    </main>
  );
}

export { AppContainer };
