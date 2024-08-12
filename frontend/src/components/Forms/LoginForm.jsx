import { loginFormData } from "../../utils/constant";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import React from "react";


const label = { inputProps: { "aria-label": "Checkbox demo" } };
const LoginForm = () => {
  const Navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "jhfdsf");
    localStorage.setItem("role", "owner");
    Navigate("/dashboard");
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {loginFormData.map((item, index) => (
        <TextField
          key={index}
          id="outlined-basic"
          label={item.label}
          type={item.type}
          variant="outlined"
        />
      ))}

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox {...label} />
        <Typography>Remember me</Typography>
      </Box>
        <Button variant="contained" sx={{ width: "100%" }} onClick={handleLogin}>
          LOGIN
        </Button>
      

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Does not have an account?</Typography>
        <Link to="/signup" style={{ color: "#0f4ec2" }}>
          Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;