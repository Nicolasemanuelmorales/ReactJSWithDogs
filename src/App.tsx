import Routes from "../src/routes/routes";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <Routes />
    </Provider>
  );
}

export default App;
