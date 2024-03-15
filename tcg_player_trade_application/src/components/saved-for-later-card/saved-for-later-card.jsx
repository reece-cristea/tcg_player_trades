import React from 'react'
import './saved-for-later-card.css'

const SavedForLaterCard = ({ item, removeItemFromSaved, addItemToCart }) => {

    return (
        <div className='saved-for-later-card-container'>
            <div className='saved-for-later-card-info-container'>
                <img className='saved-for-later-card-img' src={item.card_picture_url} />
                <div className='saved-for-later-card-text'>
                    <h3>{item.card_name}</h3>
                    <p>Seller: {item.uname}</p>
                    <p>Condition: {item.individual_card_condition}</p>
                    <p>Price: <strong>${item.individual_card_price.toFixed(2)}</strong></p>
                </div>
            </div>
            <div className='saved-for-later-card-options'>
                <button className='saved-for-later-add-to-cart-btn' onClick={(e) => {
                    addItemToCart(item)
                }}>Add to Cart</button>
                <button className='card-cart-option' onClick={(e) => {
                    removeItemFromSaved(item)
                }}>Remove</button>
            </div>
        </div>
    )
}

export default SavedForLaterCard