import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Usuarios</Link>

        <Switch>
        
          <Route path="/usuario/:id">
            <Usuario />
          </Route>
          <Route path="/">
            <Usuarios />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
