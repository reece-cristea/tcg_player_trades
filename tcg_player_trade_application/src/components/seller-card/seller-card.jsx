import React from 'react'
import './seller-card.css';

const sellerCard = ({ card }) => {
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
            <div className='add-to-cart-sec'>
                <div className='seller-sec-quantity-selector'>{card.individual_card_quantity}</div>
                <div>
                    <button className='seller-sec-add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default sellerCard