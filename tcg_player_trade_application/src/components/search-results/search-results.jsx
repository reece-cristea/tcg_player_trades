import React from 'react'
import './search-results.css'
import SearchResult from '../search-result/search-result'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const searchResults = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result, i)=> {
        return <SearchResult result={result} key={i} route={<Link to={'/card/' + result.card_name}></Link>}/>
      })}
    </div>
  )
}

export default searchResults