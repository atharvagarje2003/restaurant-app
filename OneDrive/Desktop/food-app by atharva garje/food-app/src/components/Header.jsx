import React, { useState } from "react";
import header from "../images/header.jpeg";
import { Box } from "@mui/material";

const Header = () => {
  const [button, setbutton] = useState("Login");
  return (
    <div className="header-layout">
      <div
        className="header-img"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Align items to the space between
        }}
      >
        <img src={header} style={{ height: "50px" }} alt="logo-img" />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <h5
            style={{
              fontFamily: "cursive",
              marginRight: "1070px",

              position: "relative", // Set the position to relative
            }}
          >
            Atharva Food's
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end", // Align the button to the right side
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#f18935",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                color: "#fff",
                transition: "background-color 0.3s",
              }}
              onClick={() => {
                button === "Login" ? setbutton("Logout") : setbutton("Login");
              }}
            >
              {button}
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Header;
