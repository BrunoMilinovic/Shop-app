import React from "react";
import "../style/ProductList.scss";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Product from "../components/products";
import Newsletter from "../components/Newsletter";
import Fototer from "../components/Footer";
function ProductPage() {
  return (
    <section className="productlist-container">
      <Navbar />
      <Announcement />
      <h1 className="title-product-page">Dresses</h1>
      <div className="Filter-container">
        <div className="filter">
          <h4 className="filter-text">Filter Products:</h4>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          {" "}
          <h4 className="filter-text">Sort Products:</h4>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Product />
      <Newsletter />
      <Fototer />
    </section>
  );
}

export default ProductPage;
