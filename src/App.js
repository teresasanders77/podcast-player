import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Logo from './components/Icons/Logo.js'

import Landing from './components/home/Landing';

import store from './store';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
          <Logo width="70pt" />
        </div>
        <Provider store={store}>
          <Landing />
        </Provider>
      </div>
    );
  }
}

export default App;