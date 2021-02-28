import React from 'react';
import Product from '../components/Product';
import initialState from '../initialState';
const ProductMain = () => {
  return (
    <div>
      <Product product={initialState.products[0]} />
    </div>
  );
};

export default ProductMain;
