import React from 'react'
import './shopping-cart-card-info.css'

const ShoppingCartCardInfo = ({card}) => {
  return (
    <div className='shopping-cart-card-info-container'>
        <img className='shopping-cart-card-img' src={card.card_picture_url}/>
        <h3 className=''>{card.card_name}</h3>
        <div>{card.individual_card_condition}</div>
    </div>
  )
}

export default ShoppingCartCardInfo