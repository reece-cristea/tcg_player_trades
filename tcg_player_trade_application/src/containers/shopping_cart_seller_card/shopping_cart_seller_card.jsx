import React, { useState } from 'react';
import './shopping_cart_seller_card.css';
import { ShoppingCartCardInfo } from '../../components';

const ShoppingCartSellerCard = ({ uname, currUserCart, items, packageNum, length }) => {

  const [shippingCost, setShippingCost] = useState(0.99);

  return (
    <div className='shopping-cart-seller-card-container'>
      <div className='seller-card-header'>Package ({packageNum + 1} of {length})</div>
      <h2 className='seller-name'>Seller: {uname}</h2>
      <div className='shopping-cart-seller-card-content'>
        <section className='shopping-cart-seller-cards'>
          {items.map((card, i) => {
            if (i === 0) {
              return <ShoppingCartCardInfo card={card} currUserCart={currUserCart} key={i}/>;
            } else {
              return <div><hr></hr><ShoppingCartCardInfo card={card} currUserCart={currUserCart} key={i}/></div>;
            }

          })}
        </section>
        <div className='seller-card-shipping-options'>
          <div className='seller-card-cost-info'>
            <h3 className='left-align'>Package Subtotal:</h3>
            <h3 className='right-align'>${(items.reduce(function (acc, curr) {
              const quantity = currUserCart.filter(item => {
                if (item.individual_card_id === curr.individual_card_id) {
                  return item
                }
              })
              return acc + (curr.individual_card_price * quantity[0].cart_item_quantity)
            }, 0
            ) + Number(shippingCost)).toFixed(2)}</h3>
            <p className='left-align'>Items:</p>
            <p className='right-align'>{items.length}</p>
            <p className='left-align'>Item Total:</p>
            <p className='right-align'>${items.reduce(function (acc, curr) {
              return acc + curr.individual_card_price 
            }, 0
            ).toFixed(2)}</p>
            <p className='left-align'>Shipping:</p>
            <p className='right-align'>${shippingCost}</p>
          </div>
          <div className='shipping-options-group'>
            <form>
              <div className='shipping-option'>
                <input type="radio" id={"standard" + uname} name={"standard" + uname} onClick={(e) => {setShippingCost(e.target.value)}} value={0.99} defaultChecked/>
                <label className='shipping-option-label' htmlFor={"standard" + uname}><p className='left-align'>Standard</p><p className='right-align'>$0.99</p></label>
              </div>
              <div className='shipping-option'>
                <input type="radio" id={"express" + uname} name={"standard" + uname} onClick={(e) => {setShippingCost(e.target.value)}} value={1.99}/>
                <label className='shipping-option-label' htmlFor={"express" + uname}><p className='left-align'>Express</p><p className='right-align'>$1.99</p></label>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>

  )
}

export default ShoppingCartSellerCard