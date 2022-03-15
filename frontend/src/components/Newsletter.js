import React from "react";
import "../style/Newsletter.scss";
import SendIcon from "@mui/icons-material/Send";
function Newsletter() {
  return (
    <section className="Newsletter-container">
      <h2 className="Newsletter-title">Newsletter</h2>
      <p className="Newsletter-desc">
        Get timely updates from your favorite products.
      </p>
      <div className="Newsletter-inputcontainer">
        <input
          type="email"
          placeholder="Your email"
          className="Newsletter-input"
        />
        <button className="Newsletter-btn">
          <SendIcon />
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
