import React from "react";
import "../../style/Products.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

function Product({ item }) {
  return (
    <section className="containers-product">
      <div className="circle"></div>
      <img src={item.img} className="Image-product" alt="" />
      <div className="Info-product">
        <div className="icon-product">
          <ShoppingCartIcon />
        </div>
        <div className="icon-product ">
          <SearchIcon />
        </div>
        <div className="icon-product">
          <FavoriteIcon />
        </div>
      </div>
    </section>
  );
}

export default Product;
