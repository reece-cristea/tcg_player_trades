import React from 'react'
import './shopping-cart-card-info.css'

const ShoppingCartCardInfo = ({card}) => {
  return (
    <div className='shopping-cart-card-info-container'>
        <img className='shopping-cart-card-img' src={card.card_picture_url}/>
        <div className=''>{card.card_name}</div>
    </div>
  )
}

export default ShoppingCartCardInfo