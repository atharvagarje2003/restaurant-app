import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../src/components/Header";
import Box from "@mui/material/Box";
import reportWebVitals from "./reportWebVitals";
import Body from "../src/components/Body";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Box
      component="section"
      sx={{
        p: 2,
        border: "0px solid black",
        borderRadius: "4px",
        marginLeft: "10px",
        marginRight: "10px",
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px;",
        marginTop: "10px",
      }}
    >
      <Header />
    </Box>
  
    <Body />
  </React.StrictMode>
);

reportWebVitals();
