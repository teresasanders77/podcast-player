import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../axios'

import SearchBarItem from './SearchBarItem'

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      const search = async () => {
        const {
          data: { podcasts },
        } = await listenNotesApi.get(
          `/typeahead?q=${searchTerm}&show_podcasts=1`,
        )
        if (podcasts.length) setSearchResults(podcasts)
      }
      search()
    } else {
      setSearchResults(null)
    }
  }, [searchTerm])

  return (
    <div>
      <input
        className="input"
        type='search'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder='Search shows and podcasts'
      />
      {searchTerm && (
        <div>
          <ul>
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