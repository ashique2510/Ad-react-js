import resData from "../../utils/mockData";
import RestaurantCard, {withPromotedLab} from "./RestaurantCard";
import { useState ,useEffect } from 'react'
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import HorizontalCard from "./HorizontalCard";


const Body = () => {
  const [restaurantData, setRestData] = useState([]);
  const [horiCardData, setHoriCardData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState('')

  useEffect(() => {
    setData(restaurantData);
  }, [restaurantData]);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async ()=>{
  //  const data = await fetch(
  //    'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2895691&lng=73.1297692&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  //  );

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2895691&lng=73.1297692&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    console.log('json dataa', json);
    // console.log(
    //   'json?.data',
    //   json?.data?.cards[0]?.card?.card
    // );
    setHoriCardData(json?.data?.cards[0]?.card?.card);
    setHeading(json?.data?.cards[1]?.card?.card?.header?.title)
    setRestData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //  if(restaurantData?.length === 0){
  //   return <Shimmer />
  //  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  /* 
  .search{
    margin-top: 30px;
}
.search-tag{
    width: 20%;
    height: 30px;
    font-size: 16px;
    border: 1px solid lightgray;
}
.search > button{
    height: 35px;
    background-color: orange;
    border: 0px;
    font-size: 16px;
    cursor: pointer;
     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
}
.filter {
    margin-top: 30px;
   
}
.filter-btn{
    padding: 10px 20px;
    background-color: orange;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
    border: 0px;
    font-size: 17px;
    cursor: pointer;

}
  */

  return data?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-3">
      <HorizontalCard horiCardData={horiCardData} />

      <div className="flex">
        <div className="search mt-8">
          <input
            type="text"
            placeholder="Search..."
            className="search-tag w-[200px] h-8 text-base border border-gray-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="h-9 bg-orange-500 border-0 text-base cursor-pointer shadow-md"
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

        <div className="filter mt-8">
          <button
            className="filter-btn px-5 py-[6px] bg-orange-500 rounded-lg shadow-md border-0 text-base cursor-pointe ml-4"
            onClick={() => {
              setData(restaurantData.filter((res) => res?.info?.avgRating > 4));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-3xl leading-7 mt-10 ml-10">
          {heading}
        </h1>
      </div>
      <div className="res-container flex justify-center flex-wrap px-8 py-0">
        {data?.map((data, index) => (
          <RestaurantCard
            key={index}
            id={data?.info?.id}
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

/*
.res-container {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    padding: 0px 30px; 
}
*/