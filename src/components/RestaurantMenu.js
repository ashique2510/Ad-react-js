import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


 const RestaurantMenu = () => {
   const [resInfo, setResInfo] = useState(null);

   useEffect(() => {
     fetchMenu();
   }, []);

   const fetchMenu = async () => {
     const data = await fetch(
       'https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER'
     );

     const json = await data.json();
     setResInfo(json?.data?.cards[0]?.card?.card?.info);
     console.log('json rest', json?.data?.cards[0]?.card?.card?.info);
   };

  
 if(resInfo !== null){
   var { name, cuisines, costForTwoMessage } = resInfo;
  }
   console.log('res', resInfo);

   return resInfo === null ? (
     <Shimmer />
   ) : (
     <div>
       <h1>{name}</h1>
       <h3 style={{ marginTop: '10px' }}>{cuisines.join(' ,')}</h3>
       <h3 style={{ marginTop: '10px' }}>{costForTwoMessage}</h3>
     </div>
   );
 }

 export default RestaurantMenu;