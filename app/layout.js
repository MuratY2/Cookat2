"use client";

import React, { useState } from 'react';
import '../app/globals.css'; // Adjust path if needed
import Link from 'next/link';
import Popup from '../components/Popup'; // Import the Popup component
import LoginForm from '../components/LoginForm'; // Import the LoginForm component

export default function Layout({ children }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formType, setFormType] = useState(null); // 'login' or 'signup'

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const showForm = (type) => {
    setFormType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormType(null);
  };

  return (
    <html lang="en">
      <head>
        <title>Cookat</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {}
      </head>
      <body>
        <header>
          <div className="logo-container">
            <img src="/images/logo2.png" alt="Logo" />
            <span>Cookat</span>
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/upload-recipe">Upload Recipe</Link>
            <div
              className="account-dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span>Account</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={() => showForm('login')}>Login</button>
                  <button onClick={() => showForm('signup')}>Signup</button>
                </div>
              )}
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          2024 Cookat
        </footer>
        <Popup show={showPopup} onClose={closePopup}>
          {formType && <LoginForm formType={formType} />}
        </Popup>
      </body>
    </html>
  );
}
