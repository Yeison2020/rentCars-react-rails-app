import React from "react";
import "./login.css";

const Login = () => {
  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Login</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="Password" />
        <button type="submit">Login</button>

        <h4>
          <span className="signUp_color_gray">Welcome? </span>{" "}
          <span className="signupScreen_link">Sign Up now.</span>
        </h4>
      </form>
    </header>
  );
};

export default Login;
