import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom';
import { listenNotesApi } from '../axios';
import Logo from './Icons/Logo.js';

export function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)
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
    <div className="SearchBar">
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
    </div>
  )
}

export default withRouter(SearchBar)