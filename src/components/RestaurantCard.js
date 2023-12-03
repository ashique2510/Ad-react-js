import { CDN_URL } from "../../utils/constants";


const RestaurantCard = ({
  resName,
  cuisine,
  img,
  rating,
  locality,
  costForTwo,
}) => {
  return (
    <div className="res-card">
      <img src={CDN_URL + img} alt="res card image" />
      <h3>{resName}</h3>
      <h4 className="cuisine">{cuisine?.join(', ')}</h4>
      <h4>Rating:{rating}</h4>
      <h5>Location:{locality}</h5>
      <h4>Price:{costForTwo}</h4>
    </div>
  );
};


export default RestaurantCard;