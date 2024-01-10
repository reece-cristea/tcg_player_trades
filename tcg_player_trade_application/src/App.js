import React from 'react';

import { Carousel, Navbar, Search, Footer } from './containers';
import './App.css';


const app = () => {
  return (
    <div className='App'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='content'>
        <Search />
        <Carousel />
        <Carousel />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default app