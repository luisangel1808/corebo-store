import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Your products: </h3>
        ) : (
          <h3>Sin pedidos...</h3>
        )}
        {cart.map((item) => (
          <ul>
            <div className="Checkout-element">
              <img src={item.image[0]} alt={item.title}/>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              Eliminar
            </button>
          </ul>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3> Total: <span>${handleSumTotal()}</span>  </h3>
          <Link to="/checkout/Information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
