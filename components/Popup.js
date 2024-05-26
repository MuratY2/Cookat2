// components/Popup.js

"use client";

import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
