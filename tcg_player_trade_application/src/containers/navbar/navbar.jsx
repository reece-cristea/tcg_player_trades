import React from 'react';
import './navbar.css';
import NavbarButtons from '../navbar_buttons/navbar_buttons';
import {LogoButton} from '../../components';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const navbar = () => {
  return (
    <div className='navbar'>
      <LogoButton/>
      <div className='spacer'></div>
      <NavbarButtons/>
    </div>
  )
}

export default navbar