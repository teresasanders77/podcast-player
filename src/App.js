import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import Results from './components/Results.js'
import Logo from './components/Icons/Logo.js'
import { Route, Switch } from 'react-router-dom'
import { listenNotesApi } from './axios';
import { useHistory } from 'react-router-dom';

export function App(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory();

  useEffect(() => {
    if (searchTerm) {
      const search = async () => {
        setIsLoading(true)
        const {
          data: { podcasts },
        } = await listenNotesApi.get(
          `/typeahead?q=${searchTerm}&show_podcasts=1`,
        )
        if (podcasts.length) setSearchResults(podcasts)
        setIsLoading(false)
      }
      search()
    } else {
      setSearchResults(null)
    }
  }, [searchTerm])

  function handleSubmit(e) {
    history.push("/results");
    console.log(searchResults);
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="logo">
        <Logo width="70pt" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="podcast"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search podcasts"
        />
      </form>
      <Switch>
        <Route exact path='/' component={SearchBar} searchResults={searchResults} />
        <Route path='/results' component={Results} searchResults={searchResults} />
      </Switch>
    </div>
  );
}

export default App;
