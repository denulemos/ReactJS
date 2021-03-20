import React, { Component } from 'react';
import './App.css';

import Home from './components/pages/Home';
import Edit from './components/pages/Edit';
import Create from './components/pages/Create';


import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Administrador de usuarios</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create}/>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>
      </div>
    );
  }
}

export default App;
