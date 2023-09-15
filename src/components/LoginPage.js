import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "../styles/LoginPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Login successful');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="login-container">
       <h2>Home/Register</h2>
      <form className='Login-Form' onSubmit={handleLogin}>
        <label className='Login-Label'>Username:</label>
        <input className='Login-Input'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} placeholder="Your username" />
          
       
        <label className='Login-Label'>Password:</label>
        <input className='Login-Input'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
        <div className="remember-forgot-row">
          <label className='Login-Label'>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button className='Login-Button' type="submit">Login</button>
      </form >
      <div className="create-account-section">
        <p className='create-account-link'>Don't have an account? <Link to="/register">Create an account</Link></p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
