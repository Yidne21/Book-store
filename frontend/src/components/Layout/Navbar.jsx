import { Box } from "@mui/material";
import { useLocation } from 'react-router-dom';  
import React from "react";

const Navbar = () => {
    const location = useLocation();  
    const pathname = location.pathname; 
    return (
    <Box sx={{ bgcolor: "Background", p: 2, borderRadius: 2 }}>
      {pathname.split("/").pop()}
    </Box>
  );
};

export default Navbar;