import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import Axios from "axios";
import { SavedForLaterCard } from '../../components';
import './saved_for_later.css'

const SavedForLater = forwardRef(({ currUserId, savedForLater, addItemToCart}, ref) => {

  useImperativeHandle(ref, () => {
    return {
      updateItemList: updateItemList
    }
  })

  const addItem = (item) => {
    addItemToCart(item);
    removeItemFromSaved(item);
  }

  const removeItemFromSaved = (item) => {
    const siIndex = itemList.indexOf(item);
    let siList = [...itemList];
    siList.splice(siIndex, 1);
    setItemList(siList);
  }

  const updateItemList = (item) => {
    let siList = [...itemList];
    siList.push(item);
    setItemList(siList);
  }

  const [productNum, setProductNum] = useState("");
  const [itemList, setItemList] = useState(savedForLater);

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
        return <SavedForLaterCard item={item} removeItemFromSaved={removeItemFromSaved} addItemToCart={addItem}/>
      })}
    </div>
  )
})

export default SavedForLater