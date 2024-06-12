import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

const Body = () => {
  let [restaurantsList, setrestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");
  //Whenever State variable updates the reconciliation cycle updates (the whole component re-renders once again )
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const live = await fetch(
      " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.457448398053405&lng=73.86356702605325&restaurantId=749303&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsondata = await live.json();

    setrestaurantList(jsondata?.data?.cards);
    console.log(jsondata?.data?.cards);
  };

  // ? = if , : = otherwise
  // conditional rendering using Ternary operator
  // eslint-disable-next-line eqeqeq
  return restaurantsList == 0 ? (
    <Shimmer />
  ) : (
    <div className="search-cont">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={() => {
            console.log(searchText);

            const filteredRestaurants = restaurantsList.filter((restaurant) =>
              restaurant?.card?.card?.info?.name?.includes(searchText)
            );
            setSearchText(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>

      <div
        className="res-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {restaurantsList
          ?.filter((restaurant) => restaurant?.card?.card?.info)
          .map((restaurant) => (
            <RestaurantCards
              key={restaurant?.card?.card?.info?.id}
              resData={restaurant?.card?.card?.info}
            />
            //   <div>{restaurant.card.card.info.name}</div>
          ))}
      </div>
    </div>
  );
};

export default Body;
