import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./state/store";

import Counter from "./components/Counter.jsx";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
