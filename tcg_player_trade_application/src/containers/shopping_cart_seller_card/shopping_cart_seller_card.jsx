import React from 'react';
import './shopping_cart_seller_card.css';
import { ShoppingCartCardInfo } from '../../components';

const ShoppingCartSellerCard = ({ uname, items, packageNum, length }) => {
  return (
    <div className='shopping-cart-seller-card-container'>
      <div className='seller-card-header'>Package ({packageNum + 1} of {length})</div>
      <h2 className='seller-name'>Seller: {uname}</h2>
      <div className='shopping-cart-seller-card-content'>
        <section className='shopping-cart-seller-cards'>
          {items.map(card => {
            return <ShoppingCartCardInfo card={card} />;
          })}
        </section>
        <div className='seller-card-shipping-options'>
          Shipping
        </div>
      </div>

    </div>

  )
}

export default ShoppingCartSellerCard