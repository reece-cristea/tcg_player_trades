import React from 'react';
import './navbar.css';
import { LogInButton, LogoButton, ProfileButton, ShoppingCart } from '../../components';

const navbar = () => {
  return (
    <div className='navbar'>
      <LogoButton />
      <div className='spacer'></div>
      <ShoppingCart />
      <LogInButton />
      <ProfileButton />
    </div>
  )
}

export default navbar