import "./login.css"
import React from 'react'

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp</h3>
          <span className="loginDesc">
            Connect with Friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="password" className="loginInput" />
            <button className="loginButton">Log In</button>  
            <span className="loginForgot">Forgot Password</span>          
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login