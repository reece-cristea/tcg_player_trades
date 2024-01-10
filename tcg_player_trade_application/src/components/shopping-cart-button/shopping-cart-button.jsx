import React from 'react';
import './shopping-cart-button.css';

const shopping_cart_button = () => {
  return (
    <div className='shoppingCart'>
      <button className='cartButton'>
        <img src='https://tcgplayertradesimages.s3.us-west-1.amazonaws.com/Pictures/Icons/shopping-cart-icon.png' alt='Shopping Cart'></img>
        <div id='cartCounter'>0</div>
      </button>
    </div>
  )
}

export default shopping_cart_button