import React, { useState } from 'react';
import "../styles/RegisterPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [showOtpContainer, setShowOtpContainer] = useState(false);
  const [otp, setOtp] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSendOTP = () => {
    setShowOtpContainer(true);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log({
      username,
      email,
      password,
      mobile,
      otp,
      termsAccepted,
    });
  };

  return (
    <div>
      <h1 className='Register-heading' >Register</h1>
      <div className="registration-container">
      <h2>
          <FontAwesomeIcon icon={faHome} className="home-icon" /> Home/Register
        </h2>
      <form className="form-container">
        <div className="input-container">
          <label className='Register=Label'>
            Username:
          </label>
          <input className = 'Register-Input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your username"/>
          
        </div>
        <div className="input-container">
          <label>
            Email Address:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Valid Email" />
        </div>
        <div className="input-container">
          <label>
            Password:
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
        </div>
        <div className="input-container">
          <label>
            Mobile No:
          </label>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile No" />
        </div>
        {showOtpContainer ? (
          <div className="input-container otp-container">
            <label>
              OTP:
            </label>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)}  placeholder="Your Otp"/>
          </div>
        ) : (
          <button className='Register-Button' type="button" onClick={handleSendOTP}>
            Send OTP
          </button>
        )}
        <div className="terms-container">
        <label className="terms-label"></label>
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>
        <button className='Register-Input' type="submit" onClick={handleRegistration} disabled={!termsAccepted}>
            Sign Up
          </button>
          <p className="login-link">
            Already have an account? <a href="#">Sign in</a>
          </p>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;
