import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './shopping_cart_seller_card.css';
import { ShoppingCartCardInfo } from '../../components';

const ShoppingCartSellerCard = forwardRef(({ cartItemList, seller, currUserCart, setCurrUserCart, packageNum, length, setCartItemTotal, updateShippingCosts, updateSavedList }, ref) => {
  const [shippingCost, setShippingCost] = useState(seller.standard_shipping_cost);
  const [cartItems, setCartItems] = useState(cartItemList);

  useImperativeHandle(ref, () => {
    return {
      updateCartItems: updateCartItems
    }
  })

  const setShippingCosts = cost => {
    updateShippingCosts(seller.uname, cost);
    setShippingCost(cost);
  }

  const updateCartItems = (cart) => {
    const list = cart.filter(card => {
      if (card.uname === seller.uname) {
        return card;
      }});
    setCartItems(list);
  }

  const removeItemFromCart = (card) => {
    const cucIndex = currUserCart.indexOf(card);
    const cucItems = [...currUserCart];
    cucItems.splice(cucIndex, 1);
    updateCurrUserCart(cucItems);

    const ciIndex = cartItems.indexOf(card);
    const ciItems = [...cartItems];
    ciItems.splice(ciIndex, 1);
    setCartItems(ciItems);
  }

  const saveItemToSavedList = (card) => {
    updateSavedList(card);
    removeItemFromCart(card);
  }

  const updateCurrUserCart = currUserCart => {
    setCurrUserCart(currUserCart);
    setCartItemTotal(currUserCart.reduce((acc, curr) => {
      return acc + (curr.individual_card_price * curr.cart_item_quantity)
    }, 0));
  }

  if (cartItems.length > 0) {
    return (
      <div className='shopping-cart-seller-card-container'>
        <div className='seller-card-header'>Package from {seller.uname}</div>
        <div className='shopping-cart-seller-card-content'>
          <section className='shopping-cart-seller-cards'>
            {cartItems.map((card, i) => {
              if (cartItems.length > 0) {
                if (i === 0) {
                  return <ShoppingCartCardInfo card={card} currUserCart={currUserCart} setCurrUserCart={updateCurrUserCart} removeItemFromCart={removeItemFromCart} saveItemToSavedList={saveItemToSavedList} key={i} />;
                } else {
                  return <div><hr></hr><ShoppingCartCardInfo card={card} currUserCart={currUserCart} setCurrUserCart={updateCurrUserCart} removeItemFromCart={removeItemFromCart} saveItemToSavedList={saveItemToSavedList} key={i} /></div>;
                }
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
                  <input type="radio" id={"standard" + seller.uname} name={"standard" + seller.uname} onClick={(e) => { setShippingCosts(e.target.value) }} value={seller.standard_shipping_cost} defaultChecked />
                  <label className='shipping-option-label' htmlFor={"standard" + seller.uname}><p className='left-align'>Standard</p><p className='right-align'>${seller.standard_shipping_cost.toFixed(2)}</p></label>
                </div>
                <div className='shipping-option'>
                  <input type="radio" id={"express" + seller.uname} name={"standard" + seller.uname} onClick={(e) => { setShippingCosts(e.target.value) }} value={seller.express_shipping_cost} />
                  <label className='shipping-option-label' htmlFor={"express" + seller.uname}><p className='left-align'>Express</p><p className='right-align'>${seller.express_shipping_cost.toFixed(2)}</p></label>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  } else {
    return (<></>);
  }


})

export default ShoppingCartSellerCard