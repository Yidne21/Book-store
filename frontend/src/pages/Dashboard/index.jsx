import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/SideBar";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";



function Dashboard() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F0F2FF"} }>
      <Box sx={{ flex: 1, height: "100vh", position: "fixed", top: 0 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 1, p: 1, ml: 30,  }}>
        <Navbar />
        <Box sx={{ mt: 2, }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard