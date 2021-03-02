import React from 'react';
import Product from '../components/Product';
import initialState from '../initialState';
const ProductMain = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <Product product={initialState.products[id]} />
    </div>
  );
};

export default ProductMain;
