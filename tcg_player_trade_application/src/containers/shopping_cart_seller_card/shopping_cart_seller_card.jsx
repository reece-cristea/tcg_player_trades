import React, { useState } from 'react';
import './shopping_cart_seller_card.css';
import { ShoppingCartCardInfo } from '../../components';

const ShoppingCartSellerCard = ({ seller, currUserCart, setCurrUserCart, packageNum, length, setCartItemTotal, updateShippingCosts, diffSellers, setDiffSellers}) => {

  const [shippingCost, setShippingCost] = useState(0.99);
  const [cartItems, setCartItems] = useState(currUserCart.filter(card => {
    if (card.uname === seller.uname) {
      return card;
    }
  }))

  const setShippingCosts = cost => {
    updateShippingCosts(shippingCost, cost);
    setShippingCost(cost);
  }

  function getUniqueSellers(seller) {
    const uniqueValues = new Set();
    currUserCart.forEach(item => {
      uniqueValues.add(item[seller]);
    });
    const currSellers =  Array.from(uniqueValues);
    setDiffSellers(diffSellers.filter((seller) => {
      if (currSellers.includes(seller.uname)){
        return seller;
      }
    }))
  }

  const updateCurrUserCart = currUserCart => {
    setCurrUserCart(currUserCart);
    setCartItems(currUserCart.filter(card => {
      if (card.uname === seller.uname) {
        return card;
      }
    }));
    setCartItemTotal(currUserCart.reduce((acc, curr) => {
      return acc + (curr.individual_card_price * curr.cart_item_quantity)
    }, 0))
    getUniqueSellers('uname');
    console.log(cartItems)
  }

  return (
    <div className='shopping-cart-seller-card-container'>
      <div className='seller-card-header'>Package ({packageNum + 1} of {length})</div>
      <h2 className='seller-name'>Seller: {seller.uname}</h2>
      <div className='shopping-cart-seller-card-content'>
        <section className='shopping-cart-seller-cards'>
          {cartItems.map((card, i) => {
            if (i === 0) {
              return <ShoppingCartCardInfo card={card} currUserCart={currUserCart} setCurrUserCart={updateCurrUserCart} key={i}/>;
            } else {
              return <div><hr></hr><ShoppingCartCardInfo card={card} currUserCart={currUserCart} setCurrUserCart={updateCurrUserCart} key={i}/></div>;
            }
          })}
        </section>
        <div className='seller-card-shipping-options'>
          <div className='seller-card-cost-info'>
            <h3 className='left-align'>Package Subtotal:</h3>
            <h3 className='right-align'>${(cartItems.reduce(function (acc, curr) {
              return acc + (curr.individual_card_price * currUserCart.find(item => item.individual_card_id === curr.individual_card_id).cart_item_quantity)
            }, 0
            ) + Number(shippingCost)).toFixed(2)}</h3>
            <p className='left-align'>Items:</p>
            <p className='right-align'>{cartItems.length}</p>
            <p className='left-align'>Item Total:</p>
            <p className='right-align'>${cartItems.reduce(function (acc, curr) {
              return acc + (curr.individual_card_price * currUserCart.find(item => item.individual_card_id === curr.individual_card_id).cart_item_quantity)
            }, 0
            ).toFixed(2)}</p>
            <p className='left-align'>Shipping:</p>
            <p className='right-align'>${shippingCost}</p>
          </div>
          <div className='shipping-options-group'>
            <form>
              <div className='shipping-option'>
                <input type="radio" id={"standard" + seller.uname} name={"standard" + seller.uname} onClick={(e) => {setShippingCosts(e.target.value)}} value={seller.standard_shipping_cost} defaultChecked/>
                <label className='shipping-option-label' htmlFor={"standard" + seller.uname}><p className='left-align'>Standard</p><p className='right-align'>${seller.standard_shipping_cost.toFixed(2)}</p></label>
              </div>
              <div className='shipping-option'>
                <input type="radio" id={"express" + seller.uname} name={"standard" + seller.uname} onClick={(e) => {setShippingCosts(e.target.value)}} value={seller.express_shipping_cost}/>
                <label className='shipping-option-label' htmlFor={"express" + seller.uname}><p className='left-align'>Express</p><p className='right-align'>${seller.express_shipping_cost.toFixed(2)}</p></label>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>

  )
}

export default ShoppingCartSellerCard