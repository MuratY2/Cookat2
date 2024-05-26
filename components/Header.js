// components/Header.js

"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header({ showForm, loggedInUser, handleLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <header>
      <div className="logo-container">
        <Link href="/">
          <img src="/images/logo2.png" alt="Logo" />
        </Link>
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
          <span>{loggedInUser ? `Logged in: ${loggedInUser.username}` : 'Account'}</span>
          {showDropdown && (
            <div className="dropdown-content">
              {loggedInUser ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <button onClick={() => showForm('login')}>Login</button>
                  <button onClick={() => showForm('signup')}>Signup</button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
