import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import BackgroundImage from './components/Icons/BackgroundImage.js';
import Logo from './components/Icons/Logo.js'

class App extends Component {


  render() {
    return (
      <div
        className="App"
        style={{ background: `url(${BackgroundImage})` }}
      >
        <div className="logo">
          <Logo width="70pt" />
        </div>
        <SearchBar />
      </div>

    );
  }
}

export default App;
