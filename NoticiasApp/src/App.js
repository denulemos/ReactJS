import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./state/store";
import Homepage from "./components/pages/Homepage";

function App(){
  return (
      <Provider store={store}>
        <Homepage/>
      </Provider>
  )
}

export default App;
