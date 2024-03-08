import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


 const RestaurantMenu = () => {
   //const [resInfo, setResInfo] = useState(null);

   const { resId } = useParams();
   console.log('resId resId', resId);
   const resInfo = useRestaurantMenu(resId);

   console.log('resInfo resInfo', resInfo);

   if (resInfo === null) return <Shimmer />;

   const { name, cuisines, costForTwoMessage } =
     resInfo?.cards[0]?.card?.card?.info;

   const { itemCards } =
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
       ?.card;

    const allItemCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item)=> item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log('allItemCategory', allItemCategory);

   //   const {statusMessage} = resInfo;
   console.log(
     'menuuu',
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
   );

   return (
     <div className="w-full flex justify-center mt-10">
       <div>
         <h1 style={{ fontSize: '35px', color: 'green' }}>{name}</h1>
         <h3 style={{ marginTop: '10px', fontSize: '25px', color: 'red' }}>
           {cuisines.join(' ,')}
         </h3>
         <h3 style={{ marginTop: '10px' }}>{costForTwoMessage}</h3>
         <ul>
           {itemCards?.map((item) => (
             <li key={item.card.info.id}>
               {item.card.info.name} : Rs-
               {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
             </li>
           ))}
         </ul>
       </div>
     </div>
   );
 }

 export default RestaurantMenu;