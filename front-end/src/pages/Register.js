import React, { useState, useEffect } from 'react';
import './register.css';
import NavComp from '../components/NavComp';
import backgroundImage from './logo3.png';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate =useNavigate()
  const [loading, setLoading] = useState(true);

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:8002/register',{name, email, password})
    .then(result => {
      console.log(result);
      localStorage.setItem('registrationData', JSON.stringify(result.data)); // Save registration data in local storage
    navigate('/login')
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
                <h3><b>Eventopia is your event planning assistant.</b></h3>
                <p><b>Input event details and get personalized recommendations.</b></p>
                </div>
            </div>
            <div className="right-column">
              <h2 className="form-title">Registration</h2>
              <div className="form-container">
                <form  onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      pattern="[a-zA-Z0-9]+"
                      title="Username must contain only letters and numbers"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                      <input type="checkbox" name="remember" required/> I accept all terms & conditions 
                    </label>
                  </div>
                  <div className="register-button-container">
                    <button type="submit" className="login-button">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
              <div className="login-link">
                <p>
                  Already have an account? {' '}
                  <a href="login" style={{ color: '#651e90', textDecoration: 'none' }}>
                    Login
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

export default RegisterForm ;