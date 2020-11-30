import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export const SearchBarItem = ({
  id,
  thumbnail,
  publisher_original,
  title_original,
  clearSearch,
}) => (
    <li>
      <Router>
        <Link
          onClick={() => clearSearch()}
          to={`/podcast/${id}`}
        >
          <img src={thumbnail} alt='' />
          <div>
            {title_original}
            {publisher_original}
          </div>
        </Link>
      </Router>
    </li >
  )

export default SearchBarItem