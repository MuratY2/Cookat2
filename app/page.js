// app/page.js

"use client";

import React, { useEffect, useState } from 'react';
import Layout from './layout';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';

function Page() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://66452cfcb8925626f89138a2.mockapi.io/recipes');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setRecipes(data);
        setFilteredRecipes(data);
        console.log('Fetched recipes:', data); 
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredRecipes(recipes);
      return;
    }
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <Layout>
      <h1 className="welcome-heading">Welcome to Cookat</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={filteredRecipes} />
    </Layout>
  );
}

export default Page;
