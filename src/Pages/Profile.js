import React, { StyleSheet, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../CustomHooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  const { logout } = useAuth();
  const navigation = useNavigate();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("user_data")) || {}
  );

  const styles = {
    text: {
      fontWeight: "400",
    },
  };

  const handleLogOut = () => {
    logout();
    // navigation("/signup");
    // localStorage.setItem("user_data", JSON.stringify({}));
  };

  return (
    <div style={{ margin: "5%" }}>
      <h2 style={styles.text}>Profile</h2>
      <h4 style={styles.text}>Full Name: {user.name}</h4>
      <h4 style={styles.text}>E-mail: {user.email}</h4>
      <h4 style={styles.text}>Password: {user.password}</h4>
      <button
        type="submit"
        style={{
          margin: "5%",
          width: "100px",
          height: "40px",
        }}
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
