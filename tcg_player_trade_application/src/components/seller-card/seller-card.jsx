import React, {useState} from 'react'
import './seller-card.css';
import { AddToCartQuantity } from '..';

const SellerCard = ({ card }) => {

    const quantityArray = Array(card.individual_card_quantity).fill(0);

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    return (
        <div className='seller-card-container'>
            <div className='seller-info'>
                <h3>{card.uname}</h3>
                <p className='user-sales-num'>(X Sales)</p>
            </div>
            <div className='card-info'>
                <h3>{card.individual_card_condition}</h3>
                <h3 className='cost'>${card.individual_card_price.toFixed(2)}</h3>
            </div>
            <AddToCartQuantity card={card} setSelectedQuantity={setSelectedQuantity} quantityArray={quantityArray}/>
        </div>
    )
}

export default SellerCard