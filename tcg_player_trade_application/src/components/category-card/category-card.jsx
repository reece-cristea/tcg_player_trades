import React from 'react';
import './category-card.css';


const Category_card = ({cardData}) => {
  return (
    <div className="category">
      <div className='category-card-title'>
        <h3>{cardData.category_name}</h3>
      </div>
      <div className="category-image">
        <img src={cardData.category_picture_url} className="category-img" alt={cardData.category_name}></img>
      </div>
    </div>
  )
}

export default Category_card