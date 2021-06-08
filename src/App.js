import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
        
    </Router>

    </div>
  );
}

export default App;
