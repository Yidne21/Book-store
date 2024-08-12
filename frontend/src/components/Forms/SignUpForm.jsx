import { Link } from 'react-router-dom';
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SignUpFormData } from '../../utils/constant';
import { signUpSchema } from '../../utils/validation';
import { useSignUp } from '../../hooks';
import { useNavigate } from 'react-router-dom';


function SignUpForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', location: '', phone: '', role: "owner" });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUpMutation = useSignUp();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSignUp = () => {
    const result = signUpSchema.safeParse(formData);

    if (!result.success) {
      const errors = result.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setFormErrors(errors);
      return;
    }

    signUpMutation.mutate(formData, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        setError(error.response.data.error);
      },
    });
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1}}>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      {SignUpFormData.map((item, index) => (
        <TextField
          key={index}
          id={item.id}
          name={item.name}
          label={item.label}
          type={item.type}
          variant="outlined"
          size="small"
          value={formData[item.name]}
          onChange={handleChange}
          error={!!formErrors[item.name]} 
          helperText={formErrors[item.name]}
        />
      ))}

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox />
        <Typography>I accept the Terms and Conditions</Typography>
      </Box>
        <Button variant="contained" sx={{ width: "100%" }} onClick={handleSignUp} disabled={signUpMutation.isLoading}>
          {signUpMutation.isLoading ? "Signing Up..." : "SIGN UP"}
        </Button>
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
