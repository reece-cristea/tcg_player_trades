import React, {useState} from 'react'
import './add_to_cart.css'
import { AddToCartQuantity } from '../../components';

const AddToCart = ({ card }) => {

  const quantityArray = Array(card.individual_card_quantity).fill(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <div className='add-to-cart-container'>
      <span className='add-to-cart-card-condition'>{card.individual_card_condition}</span>
      <h2 className='add-to-cart-card-price'>${card.individual_card_price?.toFixed(2)}</h2>
      <p className='add-to-cart-card-seller'>Sold by: {card.uname}</p>
      <AddToCartQuantity card={card} setSelectedQuantity={setSelectedQuantity} quantityArray={quantityArray} />
    </div>
  )
}

export default AddToCart