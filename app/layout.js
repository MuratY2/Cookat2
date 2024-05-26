// app/layout.js

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../app/globals.css';
import Header from '../components/Header';
import Popup from '../components/Popup';
import LoginForm from '../components/LoginForm';
import { getLoggedInUser, logoutUser } from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Layout({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [formType, setFormType] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const user = await getLoggedInUser();
      setLoggedInUser(user);
    }
    fetchUser();
  }, []);

  const showForm = (type) => {
    setFormType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormType(null);
  };

  const handleLogout = async () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/upload-recipe') {
      if (!confirm('If you log out now, any information you have entered will be lost and you will be redirected to the home page. Do you want to proceed?')) {
        return;
      }
      router.push('/');
      return;
    }
    
    if (loggedInUser) {
      await logoutUser(loggedInUser.id);
      setLoggedInUser(null);
    }
  };

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);  
    closePopup(); 
  };

  return (
    <html lang="en">
      <head>
        <title>Cookat</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header showForm={showForm} loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <main>
          {children}
        </main>
        <footer>
          2024 Cookat
        </footer>
        {showPopup && (
          <Popup show={showPopup} onClose={closePopup}>
            {formType && <LoginForm formType={formType} onLoginSuccess={handleLoginSuccess} onClose={closePopup} />}
          </Popup>
        )}
      </body>
    </html>
  );
}
