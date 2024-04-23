import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccountPage = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: '',
    gender: '' 
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    if (e.target.type === "radio" && e.target.name === "gender") {
      console.log("Gender selected:", e.target.value);
      setFormData({ ...formData, gender: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword(formData.password)) {
      setPasswordError('Password length must be 8 with >=(1 char, 1 uppercase & 1 num)');
      return;
    }

    onPageChange('accountSettings', { 
      name: formData.fullName, 
      email: formData.emailAddress, 
      gender: formData.gender 
    });
  };

  return (
    <div className="page">
      <div className='createaccount_page'>
        <h1>Create your <br></br>PopX account</h1>
        <form onSubmit={handleSubmit}>
        <label>Full Name<span> *</span></label>
          <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} required />
          <label>Phone number<span> *</span></label>
          <input type="text" name="phoneNumber" placeholder="Enter phone number" value={formData.phoneNumber} onChange={handleChange} required />
          <label>Email address<span> *</span></label>
          <input type="email" name="emailAddress" placeholder="Enter email address" value={formData.emailAddress} onChange={handleChange} required />
          <label>Password<span> *</span></label>
          <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <label>Company name</label>
          <input type="text" name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} />
          <div className='areyouanagency'>
            <label>Are you an Agency?</label>
            <div className='create_radiobuttons'>
              <div>
                <input type="radio" id="yes" name="isAgency" value="yes" onChange={handleChange} />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input type="radio" id="no" name="isAgency" value="no" onChange={handleChange} />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
          <label>Gender<span> *</span></label>
          <div className='create_radiobuttons'>
            <div>
              <input type="radio" id="male" name="gender" value="male" onChange={handleChange} required/>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" onChange={handleChange} required/>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
