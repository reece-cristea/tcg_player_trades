import React, { useState } from 'react';
import './search-bar.css';
import { FaSearch } from 'react-icons/fa';
import Axios from "axios";

const Search_bar = ({setResults}) => {

  const [input, setInput] = useState("");


  const fetchCards = async (value) => {
    try {
      const res = await Axios.get("http://localhost:3001/getCardData");
      const results = res.data.filter((card) => {
        return value && card && card.card_name && card.card_name.includes(value);
      });
      setResults(results);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  const handleChange = (value) => {
    setInput(value);
    fetchCards(value);
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id="searchIcon" />
      <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)}></input>
    </div>
  )
}

export default Search_bar