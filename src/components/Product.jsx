import React from 'react';
import './styles/components/Product.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product }) => {
  return (
    <div className="Product-item">
        <div className="Product-item-valoration">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faComment} />
            20
        </div>
        <img src={product.image[0]} alt={product.title} />
        <h3>{product.title}</h3>
        <FontAwesomeIcon icon={faHeart} />
        <div className="Product-item-value">
          <h2>
            ${''}
            {product.price}
          </h2>

          <div className="Product-item-value-quantity">
            <FontAwesomeIcon icon={faPlusCircle} />
            1
            <FontAwesomeIcon icon={faMinusCircle} />
          </div>
        </div>
        <h2>Description</h2>
        <p>{product.description}</p>
        <h2>Recipes</h2>
        <div className="Product-item-recipes">
            <ul>
                {product.recipes.map((recipe)=>{
                    return <li>{recipe}</li>
                })}
            </ul>
        </div>
        <h2>Comments</h2>
        <div className="Product-item-comments">
            <ul>
                {product.comments.map((comment)=>{
                    return(
                        <li>
                            <p>{comment.text}</p>
                            <h5>{comment.autor}</h5>
                            <h5>{comment.date}</h5>
                        </li>
                    ) 
                })}
            </ul>
        </div>

      <button type="button">Add to Cart</button>
    </div>
  );
};
export default Product;
