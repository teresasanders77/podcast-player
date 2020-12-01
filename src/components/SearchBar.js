import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router'
import { listenNotesApi } from '../axios';
import Logo from './Icons/Logo.js';
import { SearchBarItem } from './SearchBarItem';
import Results from './Results';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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

  function handleSubmit(event) {
    if (searchResults > 0) {
      <Redirect to="/results/:searchResults" />
    }

  }

  return (
    <div className="SearchBar">
      <Router>
        <Router exact path="/" render={() => <SearchBar />} />
        <div className="logo">
          <Logo width="70pt" />
        </div>
        <h2>Welcome!</h2>
        <h1>Explore top podcast!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="podcast"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search podcasts"
          />
        </form>
        <Router exact path="/results/:searchResults" render={() => <Results />} />
        {searchTerm && (
          <div>
            <ul>
              {isLoading}
              {searchResults &&
                searchResults.map(podcast => (
                  <SearchBarItem
                    clearSearch={() => setSearchTerm('')}
                    key={podcast.id}
                    {...podcast}
                  />
                ))}
            </ul>
          </div>
        )}
      </Router>
    </div>
  )
}

export default SearchBar