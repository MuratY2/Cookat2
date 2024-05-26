// components/UploadRecipeForm.js

"use client";

import React, { useState } from 'react';
import styles from './UploadRecipeForm.module.css';

const UploadRecipeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rating, setRating] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      imageUrl,
      rating,
      cookTime,
      ingredients,
      price,
      description,
      calories,
      uploader: 'Admin', 
    };
    onSubmit(newRecipe);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <input type="text" placeholder="Cook Time" value={cookTime} onChange={(e) => setCookTime(e.target.value)} required />
      <input type="text" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <input type="text" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} required />
      <button type="submit">Upload Recipe</button>
    </form>
  );
};

export default UploadRecipeForm;
