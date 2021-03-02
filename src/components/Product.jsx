import React, { useState, useContext } from 'react';
import '../styles/components/Product.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from '../context/AppContext';

const Product = ({ product }) => {
  const [image, setImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(AppContext);
  const addItems = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  return (
    <div className="Product-item">
      <div className="Product-item-valoration">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faComment} />
        {product.comments.length}
      </div>
      <img src={product.image[image]} alt={product.title} />
      <div className="Product-item-change">
        {product.image.map((_, index) => {
          return <button onClick={() => setImage(index)}></button>;
        })}
      </div>

      <h3>{product.title}</h3>
      <FontAwesomeIcon icon={faHeart} />
      <div className="Product-item-value">
        <h2>
          ${''}
          {product.price}
        </h2>

        <div className="Product-item-value-quantity">
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={() => setQuantity(quantity + 1)}
          />
          {quantity}
          <FontAwesomeIcon
            icon={faMinusCircle}
            onClick={() => setQuantity(quantity - 1)}
          />
        </div>
      </div>
      <h2>Description</h2>
      <p>{product.description}</p>
      <h2>Recipes</h2>
      <div className="Product-item-recipes">
        <ul>
          {product.recipes.map((recipe) => {
            return <li>{recipe}</li>;
          })}
        </ul>
      </div>
      <h2>Comments</h2>
      <div className="Product-item-comments">
        <ul>
          {product.comments.map((comment) => {
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
        <button type="button" onClick={() => addItems()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
