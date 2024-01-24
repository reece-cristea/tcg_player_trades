import React, {useState} from 'react';
import './search.css';
import { SearchBar, SearchFilter, SearchResults } from '../../components';

const Search = () => {

  const [results, setResults] = useState([]);

  return (
    <div className='searchBarContainer'>
      <h1 id='searchText'>Search for a card</h1>
      <SearchBar setResults={setResults}/>
      <SearchResults />
    </div>
  )
}

export default Search