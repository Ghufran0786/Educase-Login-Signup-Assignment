import React from 'react';
import { Link } from 'react-router-dom';
import maleImage from '../Images/man.jpeg';
import femaleImage from '../Images/woman.jpeg';

const AccountSettingsPage = ({ name, email, gender }) => {
  console.log('Gender:', gender);
  const genderIcon = gender === 'male' ? maleImage : femaleImage;
  
  return (
    <div className="page">
      <div className="accountsettingspage">
        <h2>Account Settings</h2>
        <hr className="line" />
        {genderIcon && <img src={genderIcon} alt="Gender Icon" className='gendericon_image'/>}
        <p className='accountsettingspage_name'>{name}</p>
        <p className='accountsettingspage_name'>{email}</p>
      
        <p className="accountsettings_para">Welcome, How may I help you. This is the Account Settings Page. 
        Feel free to explore the settings. Your feedback is always Appreciated!</p>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
