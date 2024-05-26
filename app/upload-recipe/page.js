// app/upload-recipe/page.js

"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../layout';
import UploadRecipeForm from '../../components/UploadRecipeForm';
import { getLoggedInUser } from '../../utils/auth';

const UploadRecipePage = () => {
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const user = await getLoggedInUser();
      if (!user) {
        alert('Please login to upload recipes');
        router.push('/');
      }
    }
    checkUser();
  }, [router]);

  const handleFormSubmit = async (newRecipe) => {
    const user = await getLoggedInUser();
    newRecipe.uploader = user ? user.username : 'Admin'; 
    const response = await fetch('https://66452cfcb8925626f89138a2.mockapi.io/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });
    if (response.ok) {
      alert('Recipe uploaded successfully!');
      console.log('Recipe uploaded:', newRecipe); 
      router.push('/');
    } else {
      const errorData = await response.json();
      console.error('Failed to upload recipe:', errorData); 
      alert('Failed to upload recipe. Please try again.');
    }
  };

  return (
    <Layout>
      <h1>Upload Recipe</h1>
      <UploadRecipeForm onSubmit={handleFormSubmit} />
    </Layout>
  );
};

export default UploadRecipePage;
