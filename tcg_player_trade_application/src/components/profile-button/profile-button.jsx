import React from 'react';
import './profile-button.css';

const profile_button = () => {
  return (
    <div className='profileButton'>
      <a href=''>
        <img src='https://tcgplayertradesimages.s3.us-west-1.amazonaws.com/Pictures/Icons/profile-icon.png' alt='Profile'></img>
      </a>
    </div>
  )
}

export default profile_button