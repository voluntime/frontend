import Button from "@mui/material/Button";
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

async function signUpUser(credentials) {
  return fetch("https://api.volunti.me/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  }).then((data) => data.status === 201);
}

function SignUp({ setToken }) {
  const [username, setUserName] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [organization, setOrganization] = useState();
  const [zip, setZip] = useState();
  const [bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signUpUser({
      username,
      name,
      email,
      password,
      zip,
      organization,
      bio,
    });

    // Handle unsuccessful login
    if (!token) {
      setErrorMessage("Error: Unable to Sign Up!");
    }
    // TODO fix reroute to main feed
    setToken(token);
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <Header/>
        <div className="form content">
          <h2>sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container" id="username">
              <input
                type="text"
                name="uname"
                placeholder="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="full name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="pass"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="org"
                placeholder="organization"
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="zip"
                placeholder="zip code"
                pattern="[0-9]*"
                required
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="bio"
                placeholder="biography"
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div>
              {errorMessage && <div className="error"> {errorMessage} </div>}
            </div>
            <div className="button-container">
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
            <p>
              Have an account? <Button onClick={handleClick}>login</Button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default SignUp;
