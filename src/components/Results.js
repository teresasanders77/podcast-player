import React, { useState } from 'react';
import { SearchBarItem } from './SearchBarItem';

export const Results = (searchResults) => {

  return (
    <div>
      {JSON.stringify(searchResults)}
    </div>
  )
};

export default Results
