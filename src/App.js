import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Logo from './components/Icons/Logo.js'
import Landing from './components/home/SearchForm/SearchForm';
import SearchForm from './components/home/Landing/Landing';
import PodcastsContainer from './components/home/PodcastsContainer/PodcastsContainer';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './App.css';


const App = () => {


  return (
    /*App Logos, store/routes*/
    <div className="App">
      <div className="logo">
        <a href="/"><Logo width="70pt" /></a>
      </div>

      <PersistGate persistor={persistor}>
        <SearchForm>
          <Switch>
            <Route exact path='/' component={Landing} />
            <div className="podcastsContainer">
              <Route path='/results' component={PodcastsContainer} />
            </div>
          </Switch>
        </SearchForm>
      </PersistGate>
    </div>
  );
}

const mapStateToProps = state => ({
  text: state.podcasts.text,
  podcasts: state.podcasts.podcasts.results,
})

export default withRouter(connect(mapStateToProps)(App));;