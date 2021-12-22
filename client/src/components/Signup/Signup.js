import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <header className="signScreen animate__animated animate__fadeInLeftBig">
      <form>
        <h1>Sign up</h1>
        <input placeholder="create username" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="Password" />
        <input placeholder="Password Confirmation" type="Password" />
        <button type="submit">Create Account</button>
      </form>
    </header>
  );
};

export default Signup;
