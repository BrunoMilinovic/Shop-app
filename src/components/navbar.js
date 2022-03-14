import { Search } from "@mui/icons-material";
import { Input, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import "../style/Navbar.scss";
function navbar() {
  return (
    <div className="container">
      <div className="Wrapper">
        <div className="left">
          <span className="language">EN / HR</span>
          <span className="Search">
            <Input />
            <Search style={{ color: "gray", fontSize: 14 + "px" }} />
          </span>
        </div>
        <div className="center">
          <h1 className="logo">Mili SHOP.</h1>
        </div>
        <div className="right">
          <span className="MenuItem">Registar</span>
          <span className="MenuItem">Sign In</span>
          <span className="MenuItem">
            <Badge badgeContent={4} color="success">
              <ShoppingCartIcon />
            </Badge>
          </span>
        </div>
      </div>
    </div>
  );
}

export default navbar;
