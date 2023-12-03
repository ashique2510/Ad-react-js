import resData from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from 'react'
import Shimmer from "./Shimmer";


const Body = () => {

  const [restaurantData, setRestData] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [ data, setData ] = useState([])


  useEffect(() => {
    setData(restaurantData);
  }, [restaurantData]);

  useEffect(()=>{
    
    fetchData()

  },[])

 const fetchData = async ()=>{
   const data = await fetch(
     'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2895691&lng=73.1297692&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
   );
   const json = await data.json();

   console.log('json data', json);
   console.log(
     'json rest data',
     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   );

    setRestData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
 }


//  if(restaurantData?.length === 0){
//   return <Shimmer />
//  }
  
  return data?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="search-tag"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            setData(
              restaurantData.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setData(restaurantData.filter((res) => res?.info?.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {data?.map((data, index) => (
          <RestaurantCard
            key={index}
            resName={data?.info?.name}
            cuisine={data?.info?.cuisines}
            img={data?.info?.cloudinaryImageId}
            rating={data?.info?.avgRating}
            locality={data?.info?.locality}
            costForTwo={data?.info?.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;