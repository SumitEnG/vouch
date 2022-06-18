import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <span
          className="navbar-brand mb-0 h1 fw-bold fs-2"
          style={{ color: "#023047" }}
        >
          ATools
          <span className="text-danger"> .</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#micon"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="micon"
        >
          <button
            className="btn btn-primary btn-lg rounded border-0 m-2 text-white"
            style={{ background: "#023047" }}
          >
            Start Free Trail
          </button>
          <button
            className="btn btn-primary btn-lg rounded border-0 text-white"
            style={{ background: "#FB8500" }}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
