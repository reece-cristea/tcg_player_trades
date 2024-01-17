import React from 'react';
import './search.css';
import { SearchBar, SearchFilter } from '../../components';

const search = () => {
  return (
    <div className='searchBarContainer'>
      <h1 id='searchText'>Search for a card</h1>
      <SearchFilter />
      <SearchBar />
    </div>
  )
}

export default search