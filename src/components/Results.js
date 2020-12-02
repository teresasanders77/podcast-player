import React, { useState } from 'react';
import { SearchBarItem } from './SearchBarItem';

export const Results = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults] = useState(null)
  const [isLoading] = useState(false)

  return (
    <div>
      { searchTerm && (
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
};

export default Results
