// app/page.js
"use client"; 
import React, { useEffect, useState } from 'react';
import Layout from './layout';
import RecipeList from '../components/RecipeList'; 

function Page() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://my-json-server.typicode.com/MuratY2/main/recipes');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <Layout>
            <h1>Welcome to Cookat</h1>
            <RecipeList recipes={recipes} />
        </Layout>
    );
}

export default Page;
