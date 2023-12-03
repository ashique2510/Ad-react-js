import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from 'react-router-dom'


 const Header = () => {

   const btnName = 'Login';
 const [btnText, setBtnText] = useState(btnName);


 useEffect(() => {
   console.log('use effect called');
 }, [btnText]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            {/* <a href="/about">About Us</a> */}
            <Link to={'/about'}>About Us</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li>

          <li>Cart</li>
          <button
            onClick={() => setBtnText(btnText === 'Login' ? 'Logout' : 'Login')}
            className="nav-button"
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};


export default Header;