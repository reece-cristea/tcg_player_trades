import React, { useEffect, useState } from 'react'
import './ShoppingCartPage.css'
import Axios from "axios";
import { Navbar, ShoppingCartSellerCard } from '../../containers'

const ShoppingCartPage = () => {

  const shopping_cart_items = [
    {
      cart_item_id: 1,
      cart_item_quantity: 1,
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
      cart_item_id: 7,
      cart_item_quantity: 2,
      cart_id: 1,
      individual_card_id: 7
    },
  ]

  const [diffSellers, setDiffSellers] = useState([]);
  const [cardsInCart, setCardsInCart] = useState([]);

  useEffect(() => {
    const getDifferentSellers = async () => {
      const apiPath = "http://localhost:3001/getDiffSellers";
      try {
        const res = await Axios.get(apiPath, {
          params: {
            cards: shopping_cart_items
          }
        });
        setDiffSellers(res.data);
      } catch (err) {
        console.log("Error: " + err);
      }
    }
    const fetchCardsInCart = async () => {
      const apiPath = "http://localhost:3001/getCardsInCart";
      try {
        const res = await Axios.get(apiPath, {
          params: {
            cards: shopping_cart_items
          }
        });
        setCardsInCart(res.data);
      } catch (err) {
        console.log("Error: " + err);
      }
    }
    fetchCardsInCart();
    getDifferentSellers();
  }, []);

  return (
    <div className='shopping-cart-page-content'>
      <Navbar />
      <h1 className='shopping-cart-title'>Your Shopping Cart</h1>
      <div className='shopping-cart-page-container'>
        <div className='cart-preview-container'>
          {diffSellers.map((seller, i) => {
            return <ShoppingCartSellerCard uname={seller.uname} items={cardsInCart.filter(card => {
              if (card.uname === seller.uname) {
                return card;
              }
            })} key={i} packageNum={i} length={diffSellers.length}/>
          })}
        </div>
        <div className='checkout-container'>
          
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartPage