import React, { useState } from 'react'
import './login_card.css'
import 'animate.css'

const LoginCard = ({ setLoginPage }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="login" className='login-card-content animate__animated animate__zoomIn'>
      <label>Email</label>
      <input
        className='login-input'
        type="email"
        id="email"
        pattern=".+@example\.com"
        size="30"
        required
        placeholder='Enter your email'
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />
      <label>Password</label>
      <input
        id="pass"
        className='login-input'
        type={
          showPassword ? "text" : "password"
        }
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        placeholder='Enter your password'
      />
      <label>Show Password</label>
      <input
        id="check"
        type="checkbox"
        className='checkbox-container'
        value={showPassword}
        onChange={() =>
          setShowPassword((prev) => !prev)
        }
      />
      <div className='login-interactables'>
        <button className='login-card-button'>Login</button>
        <hr></hr>
        <p className='sign-up-text'>Don't have an account yet?
          <button className="switch-card" onClick={() => {
            console.log(email);
            console.log(password);
            document.getElementById("login").classList.remove('animate__zoomIn');
            document.getElementById("login").classList.add('animate__zoomOut');
            console.log(document.getElementById("login").classList)
            setTimeout(() => {
              setLoginPage(false);
            }, 500);
          }}>Sign Up!</button>
        </p>
      </div>

    </div>
  )
}

export default LoginCard