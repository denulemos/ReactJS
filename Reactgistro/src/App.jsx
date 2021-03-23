import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
     <Router>
       <Menu></Menu>
       <Switch>
       <Route to="/login" component={Login}>
             
             </Route>
        <Route exact to="/" component={Inicio}>

</Route>
       <Route to="/admin" component={Admin}>
           
           </Route>
          
         
        
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
