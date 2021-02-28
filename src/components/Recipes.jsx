import React from 'react';
import Recipe from './Recipe';
const Recipes = ({ recipes }) => {
  return (
    <div className="Recipes">
      <div className="Recipes-items">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
