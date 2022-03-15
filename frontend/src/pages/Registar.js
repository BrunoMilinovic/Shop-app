import React from "react";
import "../style/auth/auth.scss";
const Registar = () => {
  return (
    <div className="Registar-container">
      <div className="Registar-Wrapper">
        <h2 className="Title-registar">CREATE AN ACCOUNT</h2>
        <form className="Registar-form">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <p className="Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <a href=".Agreement">PRIVACY POLICY</a>
          </p>
          <button className="Registar-create">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Registar;
