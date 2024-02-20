import React from 'react'
import './shopping_cart_seller_card.css'

const ShoppingCartSellerCard = ({uname, items}) => {
  return (
    <div>{items.map(card => {
        return card.card_name;
    })}</div>
  )
}

export default ShoppingCartSellerCard