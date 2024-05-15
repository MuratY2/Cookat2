//app/recipe-detail[id]/page.js
"use client";

import React, { useEffect, useState } from 'react';
import Layout from '../../layout';
import { useParams } from 'next/navigation';
import RecipeDetail from '../../../components/RecipeDetail';  

function RecipeDetailPage() {
    const [recipe, setRecipe] = useState(null);  
    const params = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            if (params.id) {
                try {
                    const response = await fetch(`https://my-json-server.typicode.com/MuratY2/main/recipes/${params.id}`);
                    if (!response.ok) throw new Error('Failed to fetch');
                    const data = await response.json();
                    setRecipe(data);
                } catch (error) {
                    console.error('Error fetching recipe:', error);
                    setRecipe(null);
                }
            }
        };
        fetchRecipe();
    }, [params.id]);

    return (
        <Layout>
            <RecipeDetail recipe={recipe} />  
        </Layout>
    );
}

export default RecipeDetailPage;
