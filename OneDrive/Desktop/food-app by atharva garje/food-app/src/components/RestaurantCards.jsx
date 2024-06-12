import React from "react";
import { CARDSIMG } from "../Utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, area } = resData;

  return (
    <div
      className="restaurant-cards"
      style={{  
        height: "390px",
        width: "250px",
        border: "1px solid #e5e5e5",
        margin: "20px",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        fontFamily:'cursive'
      }}
    >
      <img
        alt="food-pic"
        src={CARDSIMG + cloudinaryImageId}
        style={{
          width: "100%",
          height: "60%",
          objectFit: "cover",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{name}</h3>
        <p style={{ fontSize: "14px", color: "#666" }}>{cuisines.join(", ")}</p>
        <h3>{area}</h3>
      </div>
    </div>
  );
};

export default RestaurantCards;
