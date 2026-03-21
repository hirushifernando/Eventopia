import React, { useState, useEffect } from 'react';
import './login.css';
import NavComp from '../components/NavComp';
import backgroundImage from './logo3.png';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import GoogleLogin from "react-google-login";

const LoginForm = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate =useNavigate()
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(true);
  
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    // You can handle the successful login here, for example, by sending the token to your backend for authentication.
 };
 
 const onFailure = (error) => {
    console.error('Login Failed:', error);
    // You can handle the failed login here, for example, by displaying an error message to the user.
 };

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:8002/login',{email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/home')
      } else {
        setMessage(result.data); // Set message if login fails
      }
    })
    .catch(err=> console.log(err))
  }

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="d-flex align-items-center justify-content-center vh-100"
          style={{
            backgroundImage: `url(${backgroundImage}), linear-gradient(316deg, #310e68 0%, #5f0f40 74%)`,
            backgroundSize: 'fix',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#460046',
          }}
        >
        </div>
      ) : (
        <div>
          <NavComp />
          <div className="login-container">
            <div className="left-column">
              <img src="./login.jpg" alt="Logo" className="logo" />
              <div className="overlay-text">
                <h2><b>Eventopia is your event planning assistant.</b></h2>
                <p><b>Input event details and get personalized recommendations.</b></p>
                </div>
            </div>
            <div className="right-column">
              <h2 className="form-title">Login</h2>
              <div className="form-container">
              
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      title="Enter a valid email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      pattern=".{6,}"
                      title="Password must be at least 6 characters"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input type="checkbox" name="remember" required /> Remember me
                    </label>
                  </div>
                  {message && <div className="error-message">{message}</div>} {/* Display error message */}<br></br>
                  <div className="alt-login">
                      <div className="facebook"></div>
                      <div className="google">
                          <GoogleLogin className="google-log"
                              clientId="YOUR_CLIENT_ID_HERE"
                              buttonText="Login with Google"
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              cookiePolicy={'single_host_origin'}
                          />
                      </div>
                  </div><br></br>
                  <div className="login-button-container">
                    <button type="submit" className="login-button">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="register-link">
                <p>
                  Don't have an account?{' '}
                  <a href="register" style={{ color: '#651e90', textDecoration: 'none' }}>
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
















