import './App.css';
import Counter from "./components/Counter"
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";


function App() {

  const store = createStore(
    reducers,
  );

  return (
    <div className="App">
      <header>
        <h1>React-Redux counter</h1>
      </header>
      <main>
        <div className="counter">
          <Provider store={store}>
            <Counter />
          </Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
