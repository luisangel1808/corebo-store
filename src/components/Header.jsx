import React from 'react';
import './styles/header.css'

let menu;
const Header = () => {
  return (
    <header className="Header">
      <input type="checkbox" name="menu" id="menu-responsive"/>
      <label className="Header-icon" htmlFor="menu-responsive">
        <span className="s1"></span>
        <span className="s2"></span>
        <span className="s3"></span>
      </label>
      <nav className="Header-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/checkout">My account</a></li>
          <li><a href="/checkout">My account</a></li>
          <li><a href="/checkout">My account</a></li>
        </ul>
      </nav>
      <h1 className="Header-title">
      <a href="/Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 89 19" fill="none">
          <path d="M27.2875 18H25.0258L16.4359 4.85156V18H14.1742V0.9375H16.4359L25.0492 14.1445V0.9375H27.2875V18ZM38.6069 16.7461C37.7631 17.7383 36.5248 18.2344 34.892 18.2344C33.5405 18.2344 32.5092 17.8438 31.7983 17.0625C31.0952 16.2734 30.7397 15.1094 30.7319 13.5703V5.32031H32.8998V13.5117C32.8998 15.4336 33.6811 16.3945 35.2436 16.3945C36.8998 16.3945 38.0014 15.7773 38.5483 14.543V5.32031H40.7162V18H38.6537L38.6069 16.7461ZM55.9848 2.78906H50.5005V18H48.2622V2.78906H42.7895V0.9375H55.9848V2.78906ZM60.3667 18H58.1987V5.32031H60.3667V18ZM58.023 1.95703C58.023 1.60547 58.1284 1.30859 58.3394 1.06641C58.5581 0.824219 58.8784 0.703125 59.3003 0.703125C59.7222 0.703125 60.0425 0.824219 60.2612 1.06641C60.48 1.30859 60.5894 1.60547 60.5894 1.95703C60.5894 2.30859 60.48 2.60156 60.2612 2.83594C60.0425 3.07031 59.7222 3.1875 59.3003 3.1875C58.8784 3.1875 58.5581 3.07031 58.3394 2.83594C58.1284 2.60156 58.023 2.30859 58.023 1.95703ZM63.108 11.543C63.108 10.3008 63.3502 9.18359 63.8345 8.19141C64.3267 7.19922 65.0064 6.43359 65.8736 5.89453C66.7486 5.35547 67.7447 5.08594 68.8619 5.08594C70.5884 5.08594 71.983 5.68359 73.0455 6.87891C74.1158 8.07422 74.6509 9.66406 74.6509 11.6484V11.8008C74.6509 13.0352 74.4127 14.1445 73.9361 15.1289C73.4673 16.1055 72.7916 16.8672 71.9087 17.4141C71.0337 17.9609 70.0259 18.2344 68.8853 18.2344C67.1666 18.2344 65.772 17.6367 64.7017 16.4414C63.6392 15.2461 63.108 13.6641 63.108 11.6953V11.543ZM65.2877 11.8008C65.2877 13.207 65.6119 14.3359 66.2603 15.1875C66.9166 16.0391 67.7916 16.4648 68.8853 16.4648C69.9869 16.4648 70.8619 16.0352 71.5103 15.1758C72.1587 14.3086 72.483 13.0977 72.483 11.543C72.483 10.1523 72.1509 9.02734 71.4869 8.16797C70.8306 7.30078 69.9556 6.86719 68.8619 6.86719C67.7916 6.86719 66.9283 7.29297 66.272 8.14453C65.6158 8.99609 65.2877 10.2148 65.2877 11.8008ZM79.2555 5.32031L79.3258 6.91406C80.2945 5.69531 81.5602 5.08594 83.1227 5.08594C85.8023 5.08594 87.1539 6.59766 87.1773 9.62109V18H85.0094V9.60938C85.0016 8.69531 84.7906 8.01953 84.3766 7.58203C83.9703 7.14453 83.3336 6.92578 82.4664 6.92578C81.7633 6.92578 81.1461 7.11328 80.6148 7.48828C80.0836 7.86328 79.6695 8.35547 79.3727 8.96484V18H77.2047V5.32031H79.2555Z" fill="#1F1F1F"/>
          <path d="M8.78641 7.43842C6.21324 7.26246 -0.353299 2.6426 4.92665 1.63167C7.68364 1.1038 8.78641 4.79901 8.78641 7.43842Z" fill="#3EB000"/>
          <path d="M5.75118 8.2698C4.63887 9.71874 -0.660009 11.7817 0.81302 8.27082C1.58218 6.43758 4.19419 7.23533 5.75118 8.2698Z" fill="#3EB000"/>
          <path d="M8.50556 10.3672C8.95053 13.3753 5.07251 22.1633 2.51026 16.3565C1.17235 13.3244 5.33284 11.0706 8.50556 10.3672Z" fill="#3EB000"/>
        </svg>
      </a>
      </h1>
      <a className="Header-cart" href="/checkout">
        <svg className="Header-cart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
