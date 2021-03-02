import React, { useContext } from 'react';
import ProductGeneral from './ProductGeneral';
import AppContext from '../context/AppContext';
const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <ProductGeneral
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
