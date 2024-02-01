import React from 'react'
import './search-results.css'
import SearchResult from '../search-result/search-result'

const searchResults = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result, i)=> {
        return <SearchResult result={result} key={i}/>
      })}
    </div>
  )
}

export default searchResults