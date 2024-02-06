import React from 'react'
import './login_card.css'
import 'animate.css'

const LoginCard = ({setLoginPage}) => {
  return (
    <div className='login-card-content animate__animated animate__slideInUp'>
      <label>Email</label>
      <input className='login-input' type='text' placeholder='Enter your email'></input>
      <label>Password</label>
      <input className='login-input' type='text' placeholder='Enter your password'></input>
      <div className='login-interactables'>
        <button className='login-card-button'>Login</button>
        <hr></hr>
        <p className='sign-up-text'>Don't have an account yet? <button onClick={() => {
        setLoginPage(false);
      }}>Sign Up!</button></p>
      </div>
      
    </div>
  )
}

export default LoginCard