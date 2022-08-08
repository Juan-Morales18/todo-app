import { TodoProvider } from "./context/TodoContext";
import { MainContainer } from "./containers/MainContainer";
import "./styles/App.scss";

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <MainContainer />
      </div>
    </TodoProvider>
  );
}

export { App };
