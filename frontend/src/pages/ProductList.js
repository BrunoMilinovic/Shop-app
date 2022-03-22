import React, { useState } from "react";
import "../style/ProductList.scss";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Product from "../components/products";
import Newsletter from "../components/Newsletter";
import Fototer from "../components/Footer";
import { useLocation } from "react-router";
function ProductPage() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filterItem, setfilterItem] = useState({});
  const [sort, setsort] = useState("newest");
  const filters = (e) => {
    const values = e.target.value;
    setfilterItem({ ...filterItem, [e.target.name]: values });
  };

  return (
    <section className="productlist-container">
      <Navbar />
      <Announcement />
      <h1 className="title-product-page">Dresses</h1>
      <div className="Filter-container">
        <div className="filter">
          <h4 className="filter-text">Filter Products:</h4>
          <select name="color" onChange={filters}>
            <option>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select name="size" onChange={filters}>
            <option disabled>Size</option>
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
          <select name="New" onChange={(e) => setsort(e.target.value)}>
            <option value="Newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Product category={category} filterItem={filterItem} sort={sort} />
      <Newsletter />
      <Fototer />
    </section>
  );
}

export default ProductPage;
