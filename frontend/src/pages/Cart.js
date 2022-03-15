import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import "../style/Cart.scss";
import { Add } from "@mui/icons-material";
function Cart() {
  return (
    <div className="Cart-container">
      <Navbar />
      <Announcement />
      <div className="Wraperr-cart">
        <h2 className="carttitle">cart</h2>
        <div className="top-cart">
          <button className="TopButton-cart" style={{}}>
            CONTINUE SHOPPING
          </button>
          <div className="TopTexts">
            <p className="TopText">Shopping Bag(2)</p>
            <p className="TopText">Your Wishlist (0)</p>
          </div>
          <button className="TopButton-cart getborder">CHECKOUT NOW</button>
        </div>
        <div className="bottom-cart">
          <div className="Info-cart">
            <div className="Product-cart">
              <div className="Product-cart-detail">
                {" "}
                <img
                  className="img-cart"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="shoes"
                />
                <div className="Item-details">
                  <p className="Product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </p>
                  <p className="Product-Price">
                    <b>ID:</b> 93813718293
                  </p>
                  <div className="ProductColor" color="black" />
                  <p className="Product-Size">
                    <b>Size:</b> 37.5
                  </p>
                </div>
              </div>
              <div className="Product-cart-detailprice">
                <div className="cart-ProductAmountContainer">
                  <RemoveIcon />
                  <span className="cart-ProductAmount">2</span>

                  <Add />
                </div>
                <div className="cart-ProductPrice">$ 30</div>
              </div>
            </div>
            <hr className="hr" />
            <div className="Product-cart">
              <div className="Product-cart-detail">
                {" "}
                <img
                  className="img-cart"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="shoes"
                />
                <div className="Item-details">
                  <p className="Product-name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </p>
                  <p className="Product-Price">
                    <b>ID:</b> 93813718293
                  </p>
                  <div className="ProductColor" color="black" />
                  <p className="Product-Size">
                    <b>Size:</b> 37.5
                  </p>
                </div>
              </div>
              <div className="Product-cart-detailprice">
                <div className="cart-ProductAmountContainer">
                  <RemoveIcon />
                  <span className="cart-ProductAmount">2</span>

                  <Add />
                </div>
                <div className="cart-ProductPrice">$ 30</div>
              </div>
            </div>
          </div>
          <div className="Summary-cart">
            <h4 className="SummaryTitle">ORDER SUMMARY</h4>
            <div className="cart-SummaryItem">
              <p className="SummaryItemText">Subtotal</p>
              <p className="SummaryItemPrice">$ 80</p>
            </div>
            <div className="cart-SummaryItem">
              <p className="SummaryItemText">Estimated Shipping</p>
              <p className="SummaryItemPrice">$ 5.90</p>
            </div>
            <div className="cart-SummaryItem">
              <p className="SummaryItemText">Shipping Discount</p>
              <p className="SummaryItemPrice">$ -5.90</p>
            </div>
            <div className="cart-SummaryItem">
              <p className="SummaryItemText">Total</p>
              <p className="SummaryItemPrice">$ 80</p>
            </div>
            <button className="cart-Button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
