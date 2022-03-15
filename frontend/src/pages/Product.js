import React from "react";
import Announcement from "../components/announcement";
import Fototer from "../components/Footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/Newsletter";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../style/ProductList.scss";

function Product() {
  return (
    <section className="Product-container">
      <Navbar />
      <Announcement />
      <div className="Wrapper-Item">
        <div className="Img-container">
          <img
            className="Img-item"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="img"
          />
        </div>
        <div className="Item-info">
          <h4 className="Item-title">Denim Jumpsuit</h4>
          <h4 className="Item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </h4>
          <h4 className="Item-price">$20</h4>

          <div className="FilterContainer">
            <div className="filter-choice">
              <h2 className="title-filter">Color:</h2>
              <div className="FilterSizes">
                <button
                  className="FilterColor"
                  style={{ backgroundColor: "black" }}
                ></button>
                <button
                  className="FilterColor"
                  style={{ backgroundColor: "darkblue" }}
                ></button>
                <button
                  className="FilterColor"
                  style={{ backgroundColor: "gray" }}
                ></button>
              </div>
            </div>

            <div className="filter-choice">
              <h2 className="title-filter">Size:</h2>
              <select className="FilterSize">
                <option disabled selected>
                  Size
                </option>
                <option className="FilterSizeOption">XS</option>
                <option className="FilterSizeOption">S</option>
                <option className="FilterSizeOption">M</option>
                <option className="FilterSizeOption">L</option>
                <option className="FilterSizeOption">XL</option>
              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="AmountContainer">
              <RemoveIcon />
              <p className="Amount">1</p>
              <AddIcon />
            </div>
            <button className="Amount-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Fototer />
    </section>
  );
}

export default Product;
