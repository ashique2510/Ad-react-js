import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../../utils/useOnlineStatus";


 const Header = () => {
   const btnName = 'Login';
   const [btnText, setBtnText] = useState(btnName);

   const onlineStatus = useOnlineStatus();

   useEffect(() => {
     console.log('use effect called');
   }, [btnText]);

   /*
 .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
}
 .logo{
    width: 120px;
}

.nav-items > ul{
    display: flex;
    align-items: center;
    list-style: none;
}
.nav-items > ul >li {
    margin-right: 30px;
}

*/

   return (
     <div className="header flex justify-between items-center	border border-gray-300 shadow-lg">
       <div className="logo-container my-4">
         <Link to={'/'}>
           <img className="logo w-[120px]" src={LOGO_URL} alt="logo" />
         </Link>
       </div>

       <div className="nav-items">
         <ul className="flex items-center">
           <li className="mr-8">
             Online Status: {onlineStatus ? '🔵' : 'offline'}{' '}
           </li>
           <li className="mr-8">
             <Link to={'/'}>Offers</Link>
           </li>
           <li className="mr-8">
             {/* <a href="/about">About Us</a> */}
             <Link to={'/about'}>Help</Link>
           </li>
           {/* <li className="mr-8">
             <Link to={'/contact'}>Contact Us</Link>
           </li>
           <li className="mr-8">
             <Link to={'/grocery'}>Grocery</Link>
           </li> */}

           <li className="mr-8">Cart</li>
           <button
             onClick={() =>
               setBtnText(btnText === 'Login' ? 'Logout' : 'Login')
             }
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