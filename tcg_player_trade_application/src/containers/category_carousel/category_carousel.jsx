import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './category_carousel.css';
import { CategoryCard } from '../../components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Category_carousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect (() => {
    const fetchCategories = async ()=> {
      try {
        const res = await Axios.get("http://localhost:3001/getCategoryData");
        setCategories(res.data);
      } catch(err){
        console.log("Error: " + err);
      }
    }
    fetchCategories();
  }, [])

  return (
    <div className='category-carousel-container'>
      <div className="category-carousel-content">
        <div className='category-title'>
          <h1>Categories</h1>
          <p>Explore the site using a specific TCG to discover more cards and content on things like guides and other news about the game.</p>
        </div>
        <div className="category-card-wrapper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          initialSlide={0}
          centeredSlides={true}
          centeredSlidesBounds={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='swiper'
        >
          {categories.map(category=>(
          <SwiperSlide key={category.category_id} style={{display: "flex", justifyContent: "center"}}>
            <CategoryCard cardData={category}/>
          </SwiperSlide>))}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Category_carousel