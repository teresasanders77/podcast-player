import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import BackgroundImage from './components/Icons/BackgroundImage.js';


class App extends Component {


  render() {
    return (
      <div
        className="App"
        style={{ background: `url(${BackgroundImage})` }}
      >
        <SearchBar />
      </div>

    );
  }
}

export default App;
