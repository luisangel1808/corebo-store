import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from '../context/AppContext';
const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">NuTion</Link>
      </h1>
      <div>
        <Link to="/checkout">
          <FontAwesomeIcon icon={faShoppingBasket} />
        </Link>
        {cart.length > 0 && <div>{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
