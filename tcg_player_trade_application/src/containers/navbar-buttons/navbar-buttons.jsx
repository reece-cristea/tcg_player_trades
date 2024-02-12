import React from 'react'
import { LogInButton,  ProfileButton, ShoppingCart } from '../../components';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import './navbar-buttons.css'

const navbarButtons = () => {
    return (
        <div className='navbar-buttons-container'>
            <ShoppingCart />
            <LogInButton route={<Link to={'/login'}></Link>} />
            <ProfileButton />
        </div>
    )
}

export default navbarButtons