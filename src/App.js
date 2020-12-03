import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Logo from './components/Icons/Logo.js'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/home/Landing';
import PodcastsContainer from './components/home/PodcastsContainer';

import store from './store';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
          <Logo width="70pt" />
        </div>
        <Switch>
          <Provider store={store}>
            <Route exact path='/' component={Landing} />
            <Route path='/results' component={PodcastsContainer} />
          </Provider>
        </Switch>
      </div>
    );
  }
}

export default App;