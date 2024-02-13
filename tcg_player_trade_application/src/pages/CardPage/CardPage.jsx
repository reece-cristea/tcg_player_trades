import React, { useEffect, useState } from 'react'
import './CardPage.css'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { AddToCart, Navbar, Search } from '../../containers';

const CardPage = () => {
    const cardParam = useParams();
    const [cardData, setCardData] = useState([]);
    const [cardDisplayData, setCardDisplayData] = useState({});
    const [cardDetails, setCardDetails] = useState("");

    useEffect(() => {
        const fetchCard = async (card_id) => {
            const apiPath = "http://localhost:3001/getSelectedCardData";
            try {
                const res = await Axios.get(apiPath, {
                    params: {
                        cardId: card_id
                    }
                });
                
                console.log(res.data[0].card_text + " " + res.data[0].card_attack1 + " " + res.data[0].card_attack2); 
                setCardData(res.data);
                setCardDisplayData(res.data[0]);
            } catch (err) {
                console.log("Error: " + err);
            }
        }
        fetchCard(cardParam.card_id);
    }, [])

    return (

        <div className='card-page'>
            <Navbar />
            <Search />
            <div className='card-page-container'>
                <div className='card-page-img-container'>
                    <img className='card-page-img' src={cardDisplayData.card_picture_url} alt={cardDisplayData.card_name} />
                </div>
                <div className='card-page-content'>
                    <div className='card-page-title'>
                        <h1>{cardDisplayData.card_name}</h1>
                    </div>
                    <h2>Product Details</h2>
                    <div className='card-page-details'>
                        <ul className='card-details'>
                            <li><div className='detail'><h2 className='detail-title'>Card Type / HP:</h2><span>{cardDisplayData.card_type} / {cardDisplayData.card_hp}</span></div></li>
                            <li><div className='detail'><h2 className='detail-title'>Card Text:</h2><span>{cardDisplayData.card_text}</span></div></li>
                            <li><div className='detail'><h2 className='detail-title'>Attack 1:</h2><span>{cardDisplayData.card_attack1}</span></div></li>
                            <li><div className='detail'><h2 className='detail-title'>Attack 2:</h2><span>{cardDisplayData.card_attack2}</span></div></li>
                            <li><div className='detail'><h2 className='detail-title'>Card Illustrator:</h2><span>{cardDisplayData.card_illustrator}</span></div></li>   
                        </ul>
                        <div className='add-to-cart-container'>
                            <AddToCart />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardPage