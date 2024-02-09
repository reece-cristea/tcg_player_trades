import React from 'react'
import './CardPage.css'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import  { Navbar } from '../../containers'


const fetchCard = async (card_id) => {
    const apiPath = "http://localhost:3001/getSelectedCardData";
    try {
        const res = await Axios.get(apiPath, { params: {
            cardId: card_id
        } });
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log("Error: " + err);
    }
}   

const CardPage = () => {
    const cardParam = useParams();
    const cardData = fetchCard(cardParam.card_id);

    return (

        <div>
            <Navbar />
        </div>
    )
}

export default CardPage