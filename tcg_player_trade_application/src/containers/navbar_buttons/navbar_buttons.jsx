import React from 'react'
import { LogInButton,  ProfileButton, ShoppingCart } from '../../components';
import './navbar_buttons.css'

const navbarButtons = () => {
    return (
        <div className='navbar-buttons-container'>
            <ShoppingCart />
            <LogInButton />
            <ProfileButton />
        </div>
    )
}

export default navbarButtons