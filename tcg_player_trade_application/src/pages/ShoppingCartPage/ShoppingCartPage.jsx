import React, { useEffect, useState } from 'react'
import './ShoppingCartPage.css'
import Axios from "axios";
import { Navbar, ShoppingCartSellerCard } from '../../containers'

const ShoppingCartPage = () => {

  const currUserId = 1;

  const [currUserCart, setCurrUserCart] = useState([]);
  const [diffSellers, setDiffSellers] = useState([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);
  const [shippingCosts, setShippingCosts] = useState(0);

  function updateShippingCosts(oldCost, newCost) {
    setShippingCosts(shippingCosts + Number(newCost - oldCost));
  }

  useEffect(() => {
    const getDifferentSellers = async (cart) => {
      const apiPath = "http://localhost:3001/getDiffSellers";
      try {
        const res = await Axios.get(apiPath, {
          params: {
            currUser: currUserId
          }
        });
        setDiffSellers(res.data);
        setShippingCosts(res.data.reduce((acc, curr) => {
          return acc + curr.standard_shipping_cost
        }, 0));
      } catch (err) {
        console.log("Error: " + err);
      }
    }
    const fetchCurrUserCart = async () => {
      const apiPath = "http://localhost:3001/getCurrUserCart";
      try {
        Axios.get(apiPath, {
          params: {
            currUser: currUserId
          }
        }).then(res => {
          setCurrUserCart(res.data);
          getDifferentSellers(res.data);
          console.log(currUserCart);
          setCartItemTotal(res.data.reduce((acc, curr) => {
            return acc + (curr.individual_card_price * curr.cart_item_quantity)
          }, 0));
        });
      } catch (err) {
        console.log("Error: " + err);
      }
    }
    fetchCurrUserCart();
  }, []);

  return (
    <div className='shopping-cart-page-content'>
      <Navbar />
      <h1 className='shopping-cart-title'>Your Shopping Cart</h1>
      <div className='shopping-cart-page-container'>
        <div className='cart-preview-container'>
          {diffSellers.map((seller, i) => {
            return <ShoppingCartSellerCard seller={seller} currUserCart={currUserCart} setCurrUserCart={setCurrUserCart} key={i} packageNum={i} length={diffSellers.length} setCartItemTotal={setCartItemTotal} updateShipping={updateShippingCosts} />
          })}
        </div>
        <div className='checkout-container'>
          <h3>Cart Summary</h3>
          <div className='checkout-cart-sumarry-info'>
            <h4>Packages</h4>
            <h4 className='right-align'>{diffSellers.length}</h4>
            <h4>Items</h4>
            <h4 className='right-align'>{currUserCart.length}</h4>
            <h4>Item Total</h4>
            <h4 className='right-align'>${cartItemTotal.toFixed(2)}</h4>
            <h4>Estimated Shipping</h4>
            <h4 className='right-align'>${Number(shippingCosts).toFixed(2)}</h4>
            <h4>Cart Subtotal</h4>
            <h4 className='right-align'>${(Number(cartItemTotal) + Number(shippingCosts)).toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartPage