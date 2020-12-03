import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Logo from './components/Icons/Logo.js'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/home/Landing/Landing';
import PodcastsContainer from './components/home/PodcastsContainer/PodcastsContainer';
import BackButton from './components/Icons/BackButton'

import store from './store';


class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="logo">
          <Logo width="70pt" />
        </div>
        <div style={{ float: 'left', marginTop: '60px', marginLeft: '20px' }}>
          <a href='/'> <BackButton /></a>
          Results ()
        </div>
        <Switch>
          <Provider store={store}>
            <Route exact path='/' component={Landing} />
            <div className="podcastsContainer">
              <Route
                path='/results'
                component={PodcastsContainer}
              />
            </div>
          </Provider>
        </Switch>
      </div>
    );
  }
}

export default App;