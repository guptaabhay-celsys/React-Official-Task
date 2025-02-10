import React, { useRef, useState } from "react";
import { Button, Typography, TextField, Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    setIsLoading(true);
  
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd.entries());
  
    const { name, email, password, confirmPassword } = data;
  
    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      setIsLoading(false);
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
      alert("Invalid email address.");
      setIsLoading(false);
      return;
    }
    if ((password as string).length < 8) {
      alert("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        navigate("/");
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred while signing up.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" style={{ marginTop: "50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <form
            ref={formRef}
            onSubmit={handleSignUp}
            style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <TextField label="Name" name="name" variant="outlined" fullWidth />
            <TextField label="Email" name="email" variant="outlined" fullWidth />
            <TextField label="Password" name="password" type="password" variant="outlined" fullWidth />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#88c8bc",
                ":hover": { backgroundColor: "#80c8bc" },
              }}
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          <Typography variant="body2">
            Already have an account? <Link to="/">Login</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;
