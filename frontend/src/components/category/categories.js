import React from "react";
import "../../style/category.scss";
import { categories } from "../../data";
import CategoryItem from "./categoryItem";
function categorys() {
  return (
    <div className="containers-category">
      {categories.map((item) => {
        return <CategoryItem item={item} />;
      })}
    </div>
  );
}

export default categorys;
