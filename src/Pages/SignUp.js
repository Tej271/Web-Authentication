import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../CustomHooks/useAuth";

var keygen = require("keygenerator");

const SignUp = () => {
  const styles = {
    input: {
      width: "90%",
      marginBottom: "2%",
      color: "#fff",
    },
  };

  const { login } = useAuth();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState();
  const isEmpty = Object.values(user).every((x) => x.length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty) {
      setMessage("Successfully signed up");
      login({
        ...user,
        token: keygen._({
          length: 16,
        }),
      });
      setSuccess(true);
      setTimeout(function (e) {
        navigate("/profile");
      }, 1500);
    } else {
      setSuccess(false);
      setMessage("All fields are mandatory");
    }
  };

  return (
    <div
      style={{
        margin: "5%",
      }}
    >
      <h2>Signup</h2>
      <TextField
        style={styles.input}
        label="Full Name"
        variant="standard"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
      />
      <br />
      <TextField
        style={styles.input}
        label="E-mail"
        variant="standard"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
      />
      <br />
      <TextField
        style={styles.input}
        label="Password"
        variant="standard"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
      />
      <br />
      <TextField
        style={styles.input}
        label="Confirm Password"
        variant="standard"
        type="password"
        value={user.confirmPassword}
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
      />
      <br />

      <div
        style={{
          marginTop: "2%",
          color: success ? "green" : "red",
        }}
      >
        {message}
      </div>
      <br />
      <button
        type="submit"
        style={{
          margin: "2%",
          width: "100px",
          height: "40px",
        }}
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
