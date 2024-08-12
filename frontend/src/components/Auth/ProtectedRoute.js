// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { defineAbilitiesFor } from "../../abilities/abilities";

const ProtectedRoute = ({ action, subject, element }) => {
  const role = localStorage.getItem("role");
  const ability = defineAbilitiesFor(role);
  if (ability.can(action, subject)) {
    return element ? element : <Outlet />;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
