import React from "react";
import { Button } from "@mui/material/";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <header
      style={{
        borderBottom: "2px solid white",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{}}>
          <span style={{ fontWeight: "300" }}>Header</span>
        </div>
        <div style={{ width: "200px" }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              color: "inherit",
              fontFamily: "Inter",
              fontWeight: "300",
            }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              marginLeft: 20,
              padding: 0,
              cursor: "pointer",
              textTransform: "uppercase",
              color: "inherit",
              fontFamily: "Inter",
              fontWeight: "300",
            }}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
