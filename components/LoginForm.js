// components/LoginForm.js

"use client";

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { signupUser, loginUser } from '../utils/auth';

const LoginForm = ({ formType, onLoginSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formType === 'signup') {
        await signupUser(username, password);
        alert('Signup successful');
      } else if (formType === 'login') {
        const user = await loginUser(username, password);
        onLoginSuccess(user);  
        alert('Login successful');
      }
      onClose();  
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.label}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>
        {formType === 'signup' ? 'Signup' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
