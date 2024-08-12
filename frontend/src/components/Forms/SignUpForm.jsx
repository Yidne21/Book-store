import { Link } from 'react-router-dom';
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React from "react";
import { SignUpFormData } from '../../utils/constant';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignUpForm() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, }}>
      {SignUpFormData.map((item, index) => (
        <TextField
          key={index}
          id="outlined-basic"
          label={item.label}
          type={item.type}
          variant="outlined"
          sx={
            {
              height: "50px",
              
            }
          }
        />
      ))}

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox  {...label}/>
        <Typography>I accept the Terms and Conditions</Typography>
      </Box>
      <Link to="/login">
        <Button variant="contained" sx={{ width: "100%" }}>
          SIGN UP
        </Button>
      </Link>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Already have an account?</Typography>
        <Link to="/login" style={{ color: "#0f4ec2" }}>
          Login
        </Link>
      </Box>
    </Box>
  );
}

export default SignUpForm;
