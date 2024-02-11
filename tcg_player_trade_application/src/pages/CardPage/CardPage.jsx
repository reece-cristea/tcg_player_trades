import React, {useEffect, useState} from 'react'
import './CardPage.css'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Navbar } from '../../containers'

const CardPage = () => {
    const fetchCard = async (card_id) => {
        const apiPath = "http://localhost:3001/getSelectedCardData";
        try {
            const res = await Axios.get(apiPath, {
                params: {
                    cardId: card_id
                }
            });
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log("Error: " + err);
        }
    }
    
    const cardParam = useParams();
    const [cardData, setCardData] = useState([]);
    
    const [cardDisplayData, setCardDisplayData] = useState({});

    useEffect(() => {
        const fetchCard = async (card_id) => {
            const apiPath = "http://localhost:3001/getSelectedCardData";
            try {
                const res = await Axios.get(apiPath, {
                    params: {
                        cardId: card_id
                    }
                });
                setCardData(res.data);
                setCardDisplayData(res.data[0])
            } catch (err) {
                console.log("Error: " + err);
            }
        }
        fetchCard(cardParam.card_id);
    }, [])

    return (

        <div>
            <Navbar />
            <div className='card-page-container'>
                <div className='card-page-img-container'>
                    <img className='card-page-img' src={cardDisplayData.card_picture_url} alt={cardDisplayData.card_name}/>
                </div>
                <div className='card-page-content'>
                    <h2>Card Name: {cardDisplayData.card_name}</h2>
                    <h2>Category: {cardDisplayData.category_name}</h2>
                    <h2>Card Condition: {cardDisplayData.individual_card_condition}</h2>
                    <h2>Card Price: {cardDisplayData.individual_card_price}</h2>
                    <h2>Quantity: {cardDisplayData.individual_card_quantity}</h2>
                    <h2>Card Owner: {cardDisplayData.uname}</h2>
                </div>
            </div>
        </div>
    )
}

export default CardPage