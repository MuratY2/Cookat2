// components/RecipeCard.js

import Link from 'next/link';
import styles from './RecipeCard.module.css';

function RecipeCard({ recipe }) {
    return (
        <Link href={`/recipe-detail/${recipe.id}`} passHref>
            <div className={styles.recipeCard}>
                <img src={recipe.imageUrl} alt={recipe.name} className={styles.recipeImage} />
                <div className={styles.recipeInfo}>
                    <h2>{recipe.name}</h2>
                    <p>Rating: {recipe.rating}</p>
                    <p>Cook Time: {recipe.cookTime}</p>
                    <p>Price: {recipe.price}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;
