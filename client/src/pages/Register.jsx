import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Register</button>
        <p>Error message!</p>
        <span>
        Have an account? <Link to="/login">Login here</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
