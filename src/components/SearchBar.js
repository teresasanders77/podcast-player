import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../axios'

import SearchBarItem from './SearchBarItem'
import SearchBarIcon from './Icons/SearchBar.js'

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

  return (
    <div className="SearchBar">
      <h2>Welcome!</h2>
      <h1>Explore top podcast!</h1>
      <input
        type="text"
        className="podcast"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search podcasts"
      />
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
    </div>
  )
}

export default SearchBar