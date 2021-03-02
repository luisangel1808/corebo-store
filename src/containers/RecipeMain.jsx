import React from 'react';
import Recipe from '../components/Recipe';
import initialState from '../initialState';
const RecipeMain = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <Recipe
        recipe={initialState.recipes[id]}
        products={initialState.products}
      />
    </div>
  );
};

export default RecipeMain;
