import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://listen-api.listennotes.com/api/v2/search?q=test', {
      headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {
      return (
        <div className="App">
          <SearchPage />
        </div>
      );
    }
  }
}

export default App;
