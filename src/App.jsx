import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AppContainer } from "./containers/AppContainer";

import "./styles/App.scss";

function App() {
  return (
    <TodoProvider>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </TodoProvider>
  );
}

export { App };
