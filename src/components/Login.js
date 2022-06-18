import React, { useState } from "react";
import banner from "../images/banner.png";
import axios from "axios";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState({
    open: false,
    msg: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState({
    open: false,
    msg: "",
  });
  const handleLogin = () => {
    const loginData = {
      email: mail,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", loginData)
      .then((response) => {
        console.log(response);
        setShowSuccessAlert({ open: true, msg: response.data.token });
      })
      .catch((err) => {
        console.log(err);
        err.response.data
          ? setShowErrorAlert({ open: true, msg: err.response.data.error })
          : setShowErrorAlert({ open: true, msg: err.message });
      });
  };

  return (
    <div className="container-fluid d-lg-flex justify-content-center align-items-center">
      <div className="d-flex  align-items-center flex-column col-12 col-lg-5 ">
        {showErrorAlert.open && (
          <div class="alert alert-danger" role="alert">
            {showErrorAlert.msg}{" "}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {showSuccessAlert.open && (
          <div class="alert alert-success" role="alert">
            {showSuccessAlert.msg}{" "}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        <div className="fs-2 fw-bold">Welcome Back</div>
        <div className="fs-6 mb-3">Sub-title text goes here</div>
        <form className=" form-group row justify-content-center mb-2">
          <div className="col-12 col-lg-9 col-md-8 input-group-lg ">
            <input
              className="form-control mb-3"
              id="email"
              type="email"
              placeholder="Enter email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="col-12 col-lg-9 col-md-8 input-group-lg ">
            <input
              className="form-control mb-3"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary btn-lg formSubmitButton col-12 col-md-8 col-lg-9"
              type="button"
              style={{ background: "#023047" }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="d-flex col-12 col-lg-9 col-md-8 justify-content-between">
            <div className=" form-check">
              <input
                type="checkbox"
                id="formBasicCheckbox"
                className="form-check-input"
              />
              <label
                title=""
                htmlFor="formBasicCheckbox"
                className="form-check-label fw-bold label"
                style={{ color: "#023047" }}
              >
                Remember Password
              </label>
            </div>
            <div>
              <a style={{ color: "#023047" }} className="fw-bold anchor">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="col-12 col-lg-7 d-flex justify-content-center ">
        <img src={banner} alt="" className="img-fluid" />
      </div>
    </div>
  );
}

export default Login;
