import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
//import '../styles/components/Payment.css';

const Payments = ({ history }) => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const paypalOptions = {
    clientId:
      'AZF3D_WMEOtML8XB0AndCQEyUpEq3vntI60mRKcUe2S_QPItjcu6eTjkKXhHzD56TtzqFCMJxr4HRw69',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div>
            <div>
              <h4>{item.title}</h4>
              <span>
                {' '}
                $ {''} {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={() => console.log(error)}
            onPaymentCancel={() => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;
