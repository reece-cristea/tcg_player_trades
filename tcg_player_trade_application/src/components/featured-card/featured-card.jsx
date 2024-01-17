import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './featured-card.css';


const Featured_card = ({cardData}) => {
  return (
    <div className="card">
      <div className="image-content">
        <div className="card-image">
          <img src={cardData.card_picture_url} className="card-img"></img>
        </div>
        <div className="card-content">
          <h3>Price: ${cardData.min_price}</h3>
          <h3>Condition: {cardData.individual_card_condition}</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured_card