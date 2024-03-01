import React, { useState } from 'react'
import './shopping-cart-card-info.css'

const ShoppingCartCardInfo = ({ card, quantity }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  const quantityArray = Array(card.individual_card_quantity).fill(0);
  console.log(card)
  console.log(quantity)
  console.log("-------")

  return (
    <div className='shopping-cart-card-info-container'>
      <img className='shopping-cart-card-img' src={card.card_picture_url} />
      <div className='shopping-cart-card-title-quantity'>
        <h3 className=''>{card.card_name}</h3>
        <div className='shopping-cart-card-selection-options'>
          <div className='shopping-cart-card-quantity'>
            <select className='shopping-cart-card-quantity-selector' onChange={((e) => {
              setSelectedQuantity(e.target.value);
              console.log(e.target.value)
            })}>
              {quantityArray.map((_, i) => {
                if (i + 1 === quantity[0].cart_item_quantity) {
                  return <option className="select-option" value={i + 1} key={i} selected>{i + 1}</option>
                } else {
                  return <option className="select-option" value={i + 1} key={i}>{i + 1}</option>
                }
              })}
            </select>
            <div className='shopping-cart-card-total-quantity'>
              of {card.individual_card_quantity}
            </div>
          </div>
          <button className='card-cart-option'>Remove</button>
          <button className='card-cart-option'>Save For Later</button>
        </div>

      </div>
      <div className='shopping-cart-card-condition-price'>
        <p>{card.individual_card_condition}</p>
        <p>${card.individual_card_price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ShoppingCartCardInfo