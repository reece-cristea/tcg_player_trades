import React from 'react'
import './shopping_cart_seller_card.css'

const ShoppingCartSellerCard = ({ uname, items, packageNum, length }) => {
  return (
    <div className='shopping-cart-seller-card-container'>
      <div className='seller-card-header'>Package ({packageNum + 1} of {length})</div>
      <section className='shopping-cart-seller-card-content'>
        {items.map(card => {
          return <div className='shopping-cart-card-content'>{card.card_name}</div>;
        })}
      </section>
    </div>

  )
}

export default ShoppingCartSellerCard