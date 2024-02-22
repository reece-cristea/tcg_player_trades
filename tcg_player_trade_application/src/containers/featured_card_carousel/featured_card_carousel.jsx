import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './featured_card_carousel.css';
import { FeaturedCard } from '../../components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Featured_card_carousel = () => {
  const [featuredCards, setFeaturedCards] = useState([]);

  useEffect (() => {
    const fetchFeaturedCards = async ()=> {
      try {
        const res = await Axios.get("http://localhost:3001/getFeaturedCardsData");
        setFeaturedCards(res.data);
      } catch(err){
        console.log("Error: " + err);
      }
    }
    fetchFeaturedCards();
  }, [])

  return (
    <div className='carousel-container'>
      <div className="carousel-content">
        <div className='featured-card-title'>
          <h1>Featured Cards</h1>
        </div>
        <div className="card-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          initialSlide={0}
          centeredSlides={true}
          centeredSlidesBounds={true}
          navigation
          pagination={{ clickable: true }}
          className='swiper'
        >
          {featuredCards.map(featuredCard=>(
          <SwiperSlide key={featuredCard.card_id} style={{display: "flex", justifyContent: "center"}}>
            <FeaturedCard cardData={featuredCard}/>
          </SwiperSlide>))}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Featured_card_carousel