import React from "react";
import "../style/auth/auth.scss";
function Login() {
  return (
    <div className="Login-container">
      <div className="Login-Wrapper">
        <h2 className="Title-Login">LOGIN IN ACCOUNT</h2>
        <form className="Login-form">
          <input type="text" placeholder="username" />

          <input type="password" placeholder="password" />

          <button className="Login-btn">LOGIN</button>
          <p>DO NOT YOU REMEMBER THE PASSWORD?</p>
          <p>CREATE A NEW ACCOUNT</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
