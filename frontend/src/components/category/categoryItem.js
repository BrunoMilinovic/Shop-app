import "../../style/category.scss";
import React from "react";

function categoryItem({ item }) {
  return (
    <div className="containercategoryS">
      <img src={item.img} className="image" alt="img" />
      <div className="info">
        <div className="title">{item.title}</div>
        <button className="shop">SHOP NOW</button>
      </div>
    </div>
  );
}

export default categoryItem;
