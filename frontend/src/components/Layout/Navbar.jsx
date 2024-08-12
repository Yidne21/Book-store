import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const location = useLocation();
  const role = localStorage.getItem("role");
  const pathname = location.pathname;
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "text", fontWeight: "bold" }}>
        {role.toUpperCase()}
      </Typography>
      <Typography variant="h6" sx={{ color: "text" }}>
        {pathname}
      </Typography>
    </Box>
  );
};

export default Navbar;
