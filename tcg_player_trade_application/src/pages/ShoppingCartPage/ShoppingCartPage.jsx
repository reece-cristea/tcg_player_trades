import React, { useEffect, useRef, useState } from 'react'
import './ShoppingCartPage.css'
import Axios from "axios";
import { Navbar, ShoppingCartSellerCard, Checkout, SavedForLater } from '../../containers'

const ShoppingCartPage = () => {

  const currUserId = 1;

  const [currUserCart, setCurrUserCart] = useState([]);
  const [diffSellers, setDiffSellers] = useState([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);
  const [shippingCosts, setShippingCosts] = useState(0);
  const [numPackages, setNumPackages] = useState(0);
  const [shippingSelections, setShippingSelections] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);

  const shoppingCartPageRef = useRef();
  const addItem = useRef();


  const updateSavedList = (item) => {
    shoppingCartPageRef.current.updateItemList(item);
  }
  
  const addItemToCart = (item) => {
    item.cart_item_quantity = 1;
    let aiList = [...currUserCart];
    aiList.push(item);
    setCurrUserCart(aiList);
    addItem.current.updateCartItems(aiList);
  }

  function updateShippingCosts(seller, newCost) {
    const s = shippingSelections.find(item => {
      if (item['seller'] == seller) {
        return item;
      }
    })
    const index = shippingSelections.indexOf(s);
    let ss = [...shippingSelections];
    ss[index].shippingSelection = Number(newCost);
    setShippingSelections(ss);
  }

  const upadteShipping = () => {
    const uniqueValues = new Set();
    currUserCart.forEach(item => {
      uniqueValues.add(item['uname']);
    });
    const uniqueSellers = Array.from(uniqueValues);
    const sellersShipping = diffSellers.filter(seller => {
      if (uniqueSellers.includes(seller.uname)) {
        return seller;
      }
    })

    let filtered = shippingSelections.filter(ssSeller => {
      if (sellersShipping.some(seller => Object.values(seller).includes(ssSeller.seller))) {
        return ssSeller;
      }
    })
    setShippingSelections(filtered);
    setNumPackages(sellersShipping.length);
    setShippingCosts(sellersShipping.reduce((acc, curr) => {
      return acc + curr.standard_shipping_cost
    }, 0));

  }

  const updateCartItemTotal = () => {
    setCartItemTotal(currUserCart.reduce((acc, curr) => {
      return acc + (curr.individual_card_price * curr.cart_item_quantity)
    }, 0));
  }

  useEffect(() => {
    upadteShipping();
    updateCartItemTotal();
  }, [currUserCart])

  useEffect(() => {
    setShippingCosts(shippingSelections.reduce((acc, curr) => {
      return acc + curr.shippingSelection
    }, 0));
  }, [shippingSelections])

  useEffect(() => {
    const getDifferentSellers = async (cart) => {
      const apiPath = "http://localhost:3001/getDiffSellers";
      try {
        const res = await Axios.get(apiPath, {
          params: {
            currUser: currUserId
          }
        });
        setDiffSellers(res.data);
        setNumPackages(res.data.length);
        const ss = [...shippingSelections];
        res.data.forEach(seller => {
          ss.push({ seller: seller.uname, shippingSelection: seller.standard_shipping_cost });
        })
        setShippingSelections(ss);
      } catch (err) {
        console.log("Error: " + err);
      }
    }
    const fetchCurrUserCart = async () => {
      const apiPath = "http://localhost:3001/getCurrUserCart";
      try {
        Axios.get(apiPath, {
          params: {
            currUser: currUserId
          }
        }).then(res => {
          getDifferentSellers(res.data);
          setCurrUserCart(res.data);
          setCartItemTotal(res.data.reduce((acc, curr) => {
            return acc + (curr.individual_card_price * curr.cart_item_quantity)
          }, 0));
        });
      } catch (err) {
        console.log("Error: " + err);
      }
    }
    const fetchCurrUserSavedForLater = async () => {
      const apiPath = "http://localhost:3001/getSavedForLater";
      try {
        Axios.get(apiPath, {
          params: {
            currUser: currUserId
          }
        }).then(res => {
          console.log(res.data);
          setSavedForLater(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchCurrUserCart();
    fetchCurrUserSavedForLater();
  }, []);

  return (
    <div className='shopping-cart-page-content'>
      <Navbar />
      <h1 className='shopping-cart-title'>Your Shopping Cart</h1>
      <div className='shopping-cart-page-container'>
        <div className='cart-preview-container'>
          {diffSellers.map((seller, i) => {
            return <ShoppingCartSellerCard cartItemList={currUserCart.filter(card => {
              if (card.uname === seller.uname) {
                return card;
              }
            })} seller={seller} currUserCart={currUserCart} setCurrUserCart={setCurrUserCart} key={i} packageNum={i} length={diffSellers.length} setCartItemTotal={setCartItemTotal} updateShippingCosts={updateShippingCosts} updateSavedList={updateSavedList} ref={addItem} />
          })}
        </div>
        <Checkout numPackages={numPackages} currUserCart={currUserCart} cartItemTotal={cartItemTotal} shippingCosts={shippingCosts} />
      </div>
      <hr className='separator'></hr>
      <SavedForLater currUserId={currUserId} savedForLater={savedForLater} addItemToCart={addItemToCart} ref={shoppingCartPageRef} />
    </div>
  )
}

export default ShoppingCartPage