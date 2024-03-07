import React from 'react'
import './checkout.css'

const checkout = ({numPackages, currUserCart, cartItemTotal, shippingCosts}) => {

  const taxTotal = (Number(cartItemTotal) + Number(shippingCosts)) * 0.0725;

  return (
    <div className='checkout-container'>
          <h3>Cart Summary</h3>
          <div className='checkout-cart-sumarry-info'>
            <h4>Packages</h4>
            <h4 className='right-align'>{numPackages}</h4>
            <h4>Items</h4>
            <h4 className='right-align'>{currUserCart.length}</h4>
            <h4>Item Total</h4>
            <h4 className='right-align'>${cartItemTotal.toFixed(2)}</h4>
            <h4>Estimated Shipping</h4>
            <h4 className='right-align'>${Number(shippingCosts).toFixed(2)}</h4>
            <h4>Tax</h4>
            <h4 className='right-align'>${taxTotal.toFixed(2)}</h4>
            <h4>Cart Subtotal</h4>
            <h4 className='right-align'>${(Number(cartItemTotal) + Number(shippingCosts) + Number(taxTotal)).toFixed(2)}</h4>
          </div>
          <button className='checkout-button'>Checkout</button>
        </div>
  )
}

export default checkout