import React from 'react';
import '../styles/components/Recipe.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Recipe = ({ recipe }) => {
  return (
    <div className="Recipe-item">
      <div className="Recipe-item-valoration">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faComment} />
        20
      </div>
      <img src={recipe.image[0]} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <FontAwesomeIcon icon={faHeart} />
      <div className="Recipe-item-value">
        <h2>{`${recipe.time} min`}</h2>
        <div className="Recipe-item-value-quantity">
          <FontAwesomeIcon icon={faUser} />
          <h3>{recipe.portions}</h3>
        </div>
      </div>
      <h2>Ingredients</h2>
      <div className="Recipe-item-ingredients">
        <ul>
          {recipe.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
      <h2>Preparation</h2>
      <div className="Recipe-item-preparation">
        <p>{recipe.preparation}</p>
      </div>
      <h2>Productos</h2>
      <div className="Recipe-item-products">
        <ul>
          {recipe.products.map((product) => {
            return <li>{product}</li>;
          })}
        </ul>
      </div>

      <h2>Comments</h2>
      <div className="Recipe-item-comments">
        <ul>
          {recipe.comments.map((comment) => {
            return (
              <li>
                <p>{comment.text}</p>
                <h5>{comment.autor}</h5>
                <h5>{comment.date}</h5>
              </li>
            );
          })}
        </ul>
        <input type="text" />
        <button>Enviar comentario</button>
      </div>
    </div>
  );
};
export default Recipe;
