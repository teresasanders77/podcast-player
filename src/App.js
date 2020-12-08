import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import Logo from './components/Icons/Logo.js'
import Landing from './components/home/SearchForm/SearchForm';
import SearchForm from './components/home/Landing/Landing';
import PodcastsContainer from './components/home/PodcastsContainer/PodcastsContainer';
import APILogo from './apiLogo.png';

import './App.css';
import store from './store';


class App extends Component {

  render() {

    return (
      /*App Logos, store/routes*/
      <div className="App">
        <div className="logo">
          <a href="/"><Logo width="70pt" /></a>
        </div>
        <Provider store={store}>
          <SearchForm>
            <Switch>
              <Route exact path='/' component={Landing} />
              <div className="podcastsContainer">
                <Route path='/results' component={PodcastsContainer} />
              </div>
            </Switch>
          </SearchForm>
        </Provider>
        <div className="apiLogo">
          <a href="https://www.listennotes.com/" target="_blank" rel="noreferrer"> <img src={APILogo} alt="API logo" /></a>
        </div>
      </div>
    );
  }
}

export default App;