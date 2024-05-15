// components/RecipeCard.js
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

export default RecipeList;
