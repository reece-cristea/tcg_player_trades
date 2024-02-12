import React from 'react';
import './logo.css';

const logo = () => {
  return (
    <div className='logo-container'>
      <a href={"/"}>
        <img className="logo-img" src='https://tcgplayertradesimages.s3.us-west-1.amazonaws.com/Pictures/Icons/rptcg.png' alt='Logo'/>
      </a>
      
    </div>
  )
}

export default logo