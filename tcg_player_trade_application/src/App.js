import React from 'react';

import { Navbar, Search, Footer, FeaturedCardCarousel, CategoryCarousel } from './containers';
import './App.css';


const app = () => {
  return (
    <div className='App'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='content'>
        <Search />
        <FeaturedCardCarousel />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default app