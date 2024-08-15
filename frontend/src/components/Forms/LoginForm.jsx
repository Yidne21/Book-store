import React, { useState } from "react";
import { Box, Button, Checkbox, TextField, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks";
import { loginFormData } from "../../utils/constant";
import { loginSchema } from '../../utils/validation'; // Import your Zod schema
import { defineAbilitiesFor } from '../../abilities/abilities';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const loginMutation = useLogin();
  const [isLogging, setIsLogging] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const result = loginSchema.safeParse(formData);
    setIsLogging(true);

    if (!result.success) {
      setIsLogging(false);
      const errors = result.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setFormErrors(errors);
      return;
    }

    loginMutation.mutate(formData, {
      onSuccess: (data) => {
        setIsLogging(false);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        defineAbilitiesFor(data.role);

        if (data.role) {
          navigate(`/dashboard/${data.role}`);
        }

      },
      onError: (error) => {
        setIsLogging(false);
        setError(error.response.data.error);
      },
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      {loginFormData.map((item, index) => (
        <TextField
          key={index}
          id={item.id}
          name={item.name}
          label={item.label}
          type={item.type}
          variant="outlined"
          value={formData[item.name]}
          onChange={handleChange}
          error={!!formErrors[item.name]} 
          helperText={formErrors[item.name]}
        />
      ))}

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox />
        <Typography>Remember me</Typography>
      </Box>
      
      <Button variant="contained" sx={{ width: "100%" }} onClick={handleLogin} disabled={isLogging}>
        {isLogging ? <CircularProgress size={24} color="primary"  />  : "LOGIN"}
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
