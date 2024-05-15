// components/RecipeDetail.js
"use client";

import React from 'react';

function RecipeDetail({ recipe }) {
    if (!recipe) {
        return <p>Loading...</p>;  
    }

    return (
        <div className="recipe-detail">
            <h1>{recipe.name}</h1>
            <img src={recipe.imageUrl} alt={recipe.name} className="recipe-detail-image" />
            <div className="recipe-metadata">
                <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Calories:</strong> {recipe.calories}</p>
                <p><strong>Rating:</strong> {recipe.rating}</p>
                <p><strong>Price:</strong> {recipe.price}</p>
                <p><strong>Description:</strong> {recipe.description}</p>
            </div>
        </div>
    );
}

export default RecipeDetail;
