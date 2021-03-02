import React from 'react';
import { Link } from 'react-router-dom';
const ProductGeneral = ({ product, handleAddToCart }) => {
  return (
    <div className="Product-item">
      <img src={product.image[0]} alt={product.title} />
      <div className="Product-item-info">
        <Link to={`productMain/${product.id}`}>
          <h2>
            {product.title}
            <span>$ {product.price}</span>
          </h2>
        </Link>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default ProductGeneral;
