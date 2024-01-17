import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './featured_card_carousel.css';
import { FeaturedCard } from '../../components';

const Featured_card_carousel = () => {
  const [featuredCards, setFeaturedCards] = useState([]);

  useEffect (() => {
    const fetchFeaturedCards = async ()=> {
      try {
        const res = await Axios.get("http://localhost:3001/getFeaturedCardsData");
        setFeaturedCards(res.data);
      } catch(err){
        console.log("Error: " + err);
      }
    }
    fetchFeaturedCards();
  }, [])

  return (
    <div className='carousel-container'>
      <div className="carousel-content">
        <div className="card-wrapper">
          {featuredCards.map(featuredCard=>(
          <div key={featuredCard.card_id}>
            <FeaturedCard cardData={featuredCard}/>
          </div>))}
        </div>
      </div>
    </div>
  )
}

export default Featured_card_carousel