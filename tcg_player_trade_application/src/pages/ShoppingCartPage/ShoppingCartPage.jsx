import React, { useEffect, useState } from 'react'
import './ShoppingCartPage.css'
import Axios from "axios";
import { Navbar, ShoppingCartSellerCard, Checkout } from '../../containers'

const ShoppingCartPage = () => {

  const currUserId = 1;

  const [currUserCart, setCurrUserCart] = useState([]);
  const [diffSellers, setDiffSellers] = useState([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);
  const [shippingCosts, setShippingCosts] = useState(0);
  const [numPackages, setNumPackages] = useState(0);

  function updateShippingCosts(oldCost, newCost) {
    setShippingCosts(shippingCosts + Number(newCost - oldCost));
  }

  const upadteShipping = () => {
    const uniqueValues = new Set();
    currUserCart.forEach(item => {
      uniqueValues.add(item['uname']);
    });
    const uniqueSellers = Array.from(uniqueValues);
    const sellersShipping = diffSellers.filter(seller => {
      if (uniqueSellers.includes(seller.uname)) {
        return seller;
      }
    })
    setNumPackages(sellersShipping.length);
    setShippingCosts(sellersShipping.reduce((acc, curr) => {
      return acc + curr.standard_shipping_cost
    }, 0));
  }

  useEffect(() => {
    upadteShipping();
  }, [currUserCart])

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
        setNumPackages(res.data.length);
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
          getDifferentSellers(res.data);
          setCurrUserCart(res.data);
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
            return <ShoppingCartSellerCard cartItemList={currUserCart.filter(card => {
              if (card.uname === seller.uname) {
                 return card; 
                } 
              })} seller={seller} currUserCart={currUserCart} setCurrUserCart={setCurrUserCart} key={i} packageNum={i} length={diffSellers.length} setCartItemTotal={setCartItemTotal} updateShippingCosts={updateShippingCosts} />
          })}
        </div>
        <Checkout numPackages={numPackages} currUserCart={currUserCart} cartItemTotal={cartItemTotal} shippingCosts={shippingCosts} />
      </div>
    </div>
  )
}

export default ShoppingCartPage