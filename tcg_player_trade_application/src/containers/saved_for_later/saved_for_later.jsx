import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { SavedForLaterCard } from '../../components';
import './saved_for_later.css'

const SavedForLater = ({ currUserId }) => {

  const [productNum, setProductNum] = useState("");
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
          console.log(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchCurrUserSavedForLater();
  }, []);

  useEffect(() => {
    if (itemList.length === 0) {
      setProductNum("You have nothing saved.")
    } else if (itemList.length === 1) {
      setProductNum("1 Product")
    } else {
      setProductNum(`${itemList.length} Products`)
    }
  }, [itemList])

  return (
    <div className='saved-for-later-container'>
      <h1 className='title-container'>Saved For Later</h1>
      <p>{productNum}</p>
      {itemList.map(item => {
        return <SavedForLaterCard item={item} />
      })}
    </div>
  )
}

export default SavedForLater