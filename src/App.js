import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import Results from './components/Results.js'
import Logo from './components/Icons/Logo.js'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="logo">
        <Logo width="70pt" />
      </div>
      <Switch>
        <Route exact path='/' component={SearchBar} />
        <Route path='/podcast:id' component={Results} />
      </Switch>
    </div>
  );
}

export default App;
