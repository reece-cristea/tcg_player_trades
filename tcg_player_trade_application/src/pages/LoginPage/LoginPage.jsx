import React, { useState } from 'react'
import './LoginPage.css'
import { Navbar, LoginCard, SignUpCard } from '../../containers'

const LoginPage = () => {

  const [login, setLogin] = useState(true);

  if (login === true) {
    return (
      <div>
        <Navbar />
        <div className='login-content'>
          <div className='login-card'>
            <LoginCard setLoginPage={setLogin} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar />
        <div className='login-content'>
          <div className='login-card'>
            <SignUpCard setLoginPage={setLogin} />
          </div>
        </div>
      </div>
    )
  }

}

export default LoginPage