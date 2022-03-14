import React from "react";
import "../style/footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Fototer() {
  return (
    <section className="footer-container">
      <div className="left-footer">
        <h1 className="logo-footer">MILI SHOP</h1>
        <p className="footer-dec">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <article className="Social-container">
          <div className="footer-social">
            <FacebookIcon />
          </div>
          <div className="footer-social">
            {" "}
            <Instagram />
          </div>
          <div className="footer-social">
            {" "}
            <Twitter />
          </div>
          <div className="footer-social">
            {" "}
            <LinkedIn />
          </div>
        </article>
      </div>

      <div className="center-footer">
        {" "}
        <h3 className="footer-links">Useful links</h3>
        <ul className="footer-list">
          <li className="footer-items">Home</li>
          <li className="footer-items">Cart</li>
          <li className="footer-items">Man Fashion</li>
          <li className="footer-items">Woman Fashion</li>
          <li className="footer-items">Accessories</li>
          <li className="footer-items">My Account</li>
          <li className="footer-items">Order Tracking</li>
          <li className="footer-items">Wishlist</li>
          <li className="footer-items">Wishlist</li>
          <li className="footer-items">Terms</li>
        </ul>
      </div>
      <div className="rigth-footer">
        <h3 className="footer-contact">Contact</h3>

        <div className="contact-item">
          <PersonPinIcon style={{ marginRight: "10px" }} /> 622 Dixie Path ,
          South Tobinchester 98336
        </div>
        <div className="contact-item">
          <LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className="contact-item">
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@lama.dev
        </div>
        <img
          className="payment"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Fototer;
