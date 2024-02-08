import React, {useState} from 'react'
import './signup_card.css'

const SignUpCard = ({setLoginPage}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="signup" className='signup-card-content animate__animated animate__zoomIn'>
      <label>Email*</label>
      <input
        className='signup-input'
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
      <label>Username*</label>
      <input
        className='signup-input'
        type="username"
        id="username"
        size="30"
        required
        placeholder='Enter your username'
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />
      <label>Full Name</label>
      <input
        className='signup-input'
        type="text"
        id="fullname"
        size="30"
        required
        placeholder='Enter your full name e.g. John Doe'
        onChange={(e) =>
          setFullName(e.target.value)
        }
      />
      <label>Password*</label>
      <input
        id="pass"
        className='signup-input'
        type={
          showPassword ? "text" : "password"
        }
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        placeholder='Enter your password'
      />
      <label>Re-Enter Password*</label>
      <input
        id="pass"
        className='signup-input'
        type={
          showPassword ? "text" : "password"
        }
        value={passwordConf}
        onChange={(e) =>
          setPasswordConf(e.target.value)
        }
        placeholder='Re-Enter your password to confirm'
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
      <p className='required-text'>* fields are required</p>
      <div className='signup-interactables'>
        <button className='signup-card-button'>Sign Up!</button>
        <hr></hr>
        <p className='login-text'>Already have an account?
          <button className="switch-card" onClick={() => {
            console.log(email);
            console.log(password);
            document.getElementById('signup').classList.remove('animate__zoomIn');
            document.getElementById('signup').classList.add('animate__zoomOut');
            console.log(document.getElementById("signup").classList)
            setTimeout(() => {
              setLoginPage(true);
            }, 500);
          }}>Login</button>
        </p>
      </div>

    </div>
  )
}

export default SignUpCard