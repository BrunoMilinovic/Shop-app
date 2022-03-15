import React from "react";
import "../../style/Products.scss";
import Product from "./Product";
import { popularProducts } from "../../data";
function index() {
  return (
    <section className="container-products">
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </section>
  );
}

export default index;
