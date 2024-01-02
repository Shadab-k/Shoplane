import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form style={{ width: "50%", margin: "auto" }}>
        <div className="text-center mb-3">
          <Link to="/login" className="me-3">
            <button
              style={{ borderRadius: "10rem" }}
              type="button"
              className="btn btn-success btn-lg"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              style={{ borderRadius: "10rem" }}
              type="button"
              className="btn btn-success btn-lg"
            >
              SignUp
            </button>
          </Link>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
