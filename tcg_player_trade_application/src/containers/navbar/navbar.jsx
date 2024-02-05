import React from 'react';
import './navbar.css';
import { LogInButton, LogoButton, ProfileButton, ShoppingCart } from '../../components';
import { LoginPage } from "../../pages";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import app from '../../App';

const navbar = () => {
  return (
    <div className='navbar'>
      <LogoButton/>
      <div className='spacer'></div>
      <ShoppingCart />
      <LogInButton route={<Link to={'/login'}></Link>}/>
      <ProfileButton />
    </div>
  )
}

export default navbar