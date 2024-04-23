import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './authentication/WelcomePage';
import SigninPage from './authentication/SigninPage';
import CreateAccountPage from './authentication/CreateAccountPage';
import AccountSettingsPage from './authentication/AccountSettingsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handlePageChange = (page, userData = {}) => {
    setCurrentPage(page);
    if (page === 'accountSettings') {
      setUserData(userData);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signin':
        return <SigninPage onPageChange={handlePageChange} />;
      case 'createAccount':
        return <CreateAccountPage onPageChange={handlePageChange} />;
      case 'accountSettings':
        return <AccountSettingsPage onPageChange={handlePageChange} name={userData.name} email={userData.email} gender={userData.gender} />;
      default:
        return <WelcomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
