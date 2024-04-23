import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SigninPage = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }

    onPageChange('accountSettings', { name: 'User Name', email: formData.email });
  };

  return (
    <div className="page">
      <div className='signin_page'>
        <h1>Sign in to your <br></br>PopX account</h1>
        <p>Welcome, Please Enter Your Credentials. <br></br>To Continue To The Next Page.</p>
        <form onSubmit={handleSubmit}>
          <label>Email Address<span> *</span></label>
          <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} required />
          <label>Password<span> *</span></label>
          <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
          {passwordError && <p className="error-message2">{passwordError}</p>}
          <button type="submit">Login</button>
        </form>
        <button onClick={() => onPageChange('createAccount')} className='siginpage_createaccount'>Create Account</button>
      </div>
    </div>
  );
};

export default SigninPage;
