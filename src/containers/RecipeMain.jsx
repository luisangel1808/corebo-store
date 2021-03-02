import React from 'react';
import Recipe from '../components/Recipe';
import initialState from '../initialState';
const RecipeMain = () => {
  return (
    <div>
      <Recipe recipe={initialState.recipes[0]} />
    </div>
  );
};

export default RecipeMain;
