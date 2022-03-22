import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/Products.scss";
import Product from "./Product";
import { popularProducts } from "../../data";
function Index({ category, filterItem, sort }) {
  const [product, setproduct] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (category) {
          const res = await axios.get(
            "https://localhost:8000/api/v1/find/categoryproduct"
          );
          const data = await res.json();
        } else {
          const res = await axios.get(
            "https://localhost:8000/api/v1/find/allproducts"
          );
          const data = await res.json();
        }
      } catch (err) {}
    };
  }, [category]);
  return (
    <section className="container-products">
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </section>
  );
}

export default Index;
