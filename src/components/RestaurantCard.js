import { useNavigate } from 'react-router-dom';
import { CDN_URL } from "../../utils/constants";


const RestaurantCard = ({
  id,
  resName,
  cuisine,
  img,
  rating,
  locality,
  costForTwo,
}) => {

  const navigate = useNavigate();


  return (
    <div
      onClick={() => navigate(`/restaurant/${id}`)}
      className="res-card w-64 h-82 border border-black border-opacity-80 bg-yellow-300 shadow-md rounded-lg p-4 cursor-pointer mt-8 ml-8"
    >
      <img src={CDN_URL + img} alt="res card image" className="w-full h-1/2" />
      <h3 className="mt-2">{resName}</h3>
      <h4 className="cuisine font-light mt-2">{cuisine?.join(', ')}</h4>
      <h4 className="mt-2">Rating:{rating}</h4>
      <h5 className="mt-2">Location:{locality}</h5>
      <h4 className="mt-2">Price:{costForTwo}</h4>
    </div>
  );
};


export const withPromotedLab = (RestaurantCard) => {

   return () => {

     return (
      <div>
       <label>Promoted</label>  
       <RestaurantCard />
      </div>
     )

   }

};



export default RestaurantCard;


/*

.res-card{ 
    width: 250px;
    height: 300px;
    border: .5px solid rgba(0, 0, 0, 0.788);
    background-color: rgb(248, 231, 164);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
    border-radius: 7px;
    padding: 6px;
    cursor: pointer;
    margin-top: 30px;
    margin-left: 30px;
}
.res-card >img{
    width: 100%;
    height: 50%;
}
.res-card >h3,h4,h5 {
    margin-top: 5px;
}
.cuisine{
    font-weight: 300;
}
*/