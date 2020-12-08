import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Logo from './components/Icons/Logo.js'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/home/SearchForm/SearchForm';
import SearchForm from './components/home/Landing/Landing';
import PodcastsContainer from './components/home/PodcastsContainer/PodcastsContainer';
import APILogo from './apiLogo.png';


import store from './store';


class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="logo">
          <Logo width="70pt" />
        </div>
        <Provider store={store}>
          <SearchForm>
            <Switch>
              <Route exact path='/' component={Landing} />
              <div className="podcastsContainer">
                <Route
                  path='/results'
                  component={PodcastsContainer}
                />
              </div>
            </Switch>
          </SearchForm>
        </Provider>
        <div className="apiLogo">
          <a href="https://www.listennotes.com/" target="_blank" rel="ListenNotes.com"> <img src={APILogo} alt="API logo" /></a>
        </div>
      </div>
    );
  }
}

export default App;