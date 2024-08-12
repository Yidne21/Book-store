// src/pages/Unauthorized.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "5rem", fontWeight: "bold", color: "#d32f2f" }}
      >
        403
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Unauthorized Access
      </Typography>
      <Typography variant="body1" sx={{ mb: 5 }}>
        You do not have permission to view this page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        sx={{
          textTransform: "none",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default Unauthorized;
