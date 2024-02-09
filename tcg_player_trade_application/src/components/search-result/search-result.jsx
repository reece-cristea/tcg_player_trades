import React from 'react'
import './search-result.css'

const SearchResult = ({result}) => {
  return (
    <a className='search-result' href={'/card/' + result.card_id +'/' + result.card_name.split(' ').join('-').split('/').join('-') }>{result.card_name}</a>
  )
}

export default SearchResult