// components/RecipeDetail.js

"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getLoggedInUser } from '../utils/auth';

function RecipeDetail({ recipe }) {
    const router = useRouter();
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getLoggedInUser();
                setLoggedInUser(user);
            } catch (error) {
                console.error('Error fetching logged-in user:', error);
            }
        };
        fetchUser();
    }, []);

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://66452cfcb8925626f89138a2.mockapi.io/recipes/${recipe.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Recipe deleted successfully!');
                router.push('/');
            } else {
                throw new Error('Failed to delete recipe');
            }
        } catch (error) {
            alert('Failed to delete recipe. Please try again.');
        }
    };

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
                <p><strong>Uploader:</strong> {recipe.uploader || 'Admin'}</p>
                <p><strong>Description:</strong> {recipe.description}</p>
            </div>
            {loggedInUser && recipe.uploader && loggedInUser.username === recipe.uploader && (
                <button onClick={handleDelete} className="delete-button">Delete</button>
            )}
        </div>
    );
}

export default RecipeDetail;
