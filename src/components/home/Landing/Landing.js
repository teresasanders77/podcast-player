import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import APILogo from '../../../img/apiLogo.png';
import './Landing.css';


export class Landing extends Component {
  render() {

    return (
      <div className="resultsBackground2">
        <h2>Welcome!</h2>
        <h1>Explore top podcasts!</h1>
        <SearchForm />
        <a href="https://www.listennotes.com/" target="_blank" rel="noreferrer"> <img src={APILogo} className="apiLogo" alt="API logo" /></a>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.podcasts.loading,
  podcasts: state.podcasts.podcasts.results,
})
export default connect(mapStateToProps)(Landing); 