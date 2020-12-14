import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'

import Logo from './components/Icons/Logo.js'
import Landing from './components/home/SearchForm/SearchForm';
import SearchForm from './components/home/Landing/Landing';
import PodcastsContainer from './components/home/PodcastsContainer/PodcastsContainer';


import './App.css';



const App = () => {

  return (
    /*App Logos, store/routes*/
    <div className="App">
      <div className="logo">
        <a href="/"><Logo width="70pt" /></a>
      </div>
      <Route component={SearchForm} >
        <div className="welcomeText">
          <h2>Welcome!</h2>
          <h1>Explore top podcasts!</h1>
        </div>
        <Route exact path='/results'>
          <PodcastsContainer />
        </Route>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Redirect to={'/'} />
      </Route>
    </div>
  );
}

export default App;