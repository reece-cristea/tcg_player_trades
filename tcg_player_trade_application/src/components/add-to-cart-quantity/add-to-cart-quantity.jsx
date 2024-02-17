import React from 'react'

const addToCartQuantity = ({card, setSelectedQuantity, quantityArray}) => {
    return (
        <div className='add-to-cart-sec'>
            <div className='seller-sec-quantity'>
                <select className='seller-sec-quantity-selector' onChange={((e) => {
                    setSelectedQuantity(e.target.value);
                    console.log(e.target.value)
                })}>
                    {quantityArray.map((_, i) => {
                        return <option className="select-option" value={i + 1}>{i + 1}</option>
                    })}
                </select>
                <div className='total-quantity'>
                    {card.individual_card_quantity}
                </div>
            </div>
            <div>
                <button className='seller-sec-add-to-cart-btn'>Add to Cart</button>
            </div>
        </div>
    )
}

export default addToCartQuantity