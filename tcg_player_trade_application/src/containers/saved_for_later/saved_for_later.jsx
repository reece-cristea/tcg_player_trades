import React, { useEffect, useState } from 'react'
import Axios from "axios";
import './saved_for_later.css'

const SavedForLater = ({currUserId}) => {

    const [product, setProduct] = useState("");
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        const fetchCurrUserSavedForLater = async () => {
            const apiPath = "http://localhost:3001/getSavedForLater";
            try {
              Axios.get(apiPath, {
                params: {
                  currUser: currUserId
                }
              }).then(res => {
                setItemList(res.data);
              });
            } catch (err) {
              console.log(err);
            }
        }
        fetchCurrUserSavedForLater();
    }, []);

    useEffect(() => {
        if (itemList.length === 0) {
            setProduct("You have nothing saved.")
        } else if (itemList.length === 1) {
            setProduct("1 Product")
        } else {
            setProduct(`${itemList.length} Products`)
        }
    }, [itemList])

    return (
        <div className='saved-for-later-container'>
            <h1 className='title-container'>Saved For Later</h1>
            <p>{product}</p>
            
        </div>
    )
}

export default SavedForLater