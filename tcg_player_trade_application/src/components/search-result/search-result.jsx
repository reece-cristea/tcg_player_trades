import React from 'react'
import './search-result.css'

const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={(e) => {}}>{result.card_name}</div>
  )
}

export default SearchResult