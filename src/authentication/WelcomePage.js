import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = ({ onPageChange }) => {
  return (
    <div className="page">
        <div className='welcompage'>
      <h1>Welcome to PopX</h1>
      <p>Please choose any options from below</p>
      <button onClick={() => onPageChange('createAccount')}>Create Account</button><br></br>
      <button onClick={() => onPageChange('signin')} className='loginbutton'>Already Registered? Login</button>
    </div>
    </div>
  );
};

export default WelcomePage;
