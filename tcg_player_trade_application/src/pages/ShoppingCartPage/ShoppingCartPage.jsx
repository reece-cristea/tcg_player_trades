import React from 'react'
import './ShoppingCartPage.css'
import { Navbar } from '../../containers'

const ShoppingCartPage = () => {

  const shopping_cart = {
    cart_id: 1,
    cart_uid: 1
  }

  const shopping_cart_items = [
    {
      cart_item_id: 1,
      cart_item_quantity: 2,
      cart_id: 1,
      individual_card_id: 1
    },
    {
      cart_item_id: 2,
      cart_item_quantity: 1,
      cart_id: 1,
      individual_card_id: 2
    },
    {
      cart_item_id: 3,
      cart_item_quantity: 1,
      cart_id: 1,
      individual_card_id: 3
    },
    {
      cart_item_id: 4,
      cart_item_quantity: 1,
      cart_id: 2,
      individual_card_id: 4
    },
    {
      cart_item_id: 5,
      cart_item_quantity: 1,
      cart_id: 2,
      individual_card_id: 5
    },
  ]
  return (
    <div className='shopping-cart-page-content'>
        <Navbar />
        <div className='shopping-cart-page-container'>

        </div>
    </div>
  )
}

export default ShoppingCartPage