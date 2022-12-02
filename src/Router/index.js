import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Fallback from "../Pages/Fallback";
import { ProtectedRoute } from "../Components/ProtectedRoute";
import { ProtectedSignUpRoute } from "../Components/ProtectedSignUpRoute";

const token = JSON.parse(localStorage.getItem("user_data"))?.token;

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/signup" />} />
      <Route
        path="/signup"
        element={
          <ProtectedSignUpRoute>
            <SignUp />
          </ProtectedSignUpRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Router;
