import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/SideBar";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboard from "../../components/Dashboard/Admin";



function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flex: 1, height: "100vh", position: "fixed", top: 0 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 4, p: 1, ml: 35 }}>
        <Navbar />
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard