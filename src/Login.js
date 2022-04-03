import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SignUp from "./SignUp";
import NotFound from "./NotFound";
import history from "./history";
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header.js";

async function loginUser(credentials) {
  return fetch("https://api.volunti.me/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return null;
    }
  });
}

function Menu({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate("/signup", { replace: true }),
    [navigate]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    // Handle unsuccessful login
    if (!token) {
      setErrorMessage("Error: Unable to Login");
    } else {
      // TODO set local storage to user data to keep user logged in
      setToken(token);
    }
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <Header/>
        <div className="form content">
          <h2>login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="uname"
                placeholder="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              {/* {renderErrorMessage("email")} */}
            </div>
            <div className="input-container">
              <input
                type="password"
                name="pass"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div>
              {errorMessage && <div className="error"> {errorMessage} </div>}
            </div>
            <div className="button-container">
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
            <div className="button-container">
              <p>
                No account? <Button onClick={handleClick}>Sign Up</Button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Login({ setToken }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu setToken={setToken} />} />
        <Route path="/signup" element={<SignUp setToken={setToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
