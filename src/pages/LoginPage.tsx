import React, { useContext, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

interface LoginPageProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserInfo, setAuthToken } = useContext(AuthContext);

  const handleLogin = async () => {
    setIsLoading(true);

    if (!email || !password) {
      alert("Both email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        const { token, user } = result;
        
        localStorage.setItem("authToken", token);
        setAuthToken(token);
        setUserInfo({
          id: user.id,
          name: user.name,
          email: user.email,
        });
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        alert(result.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
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
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#88c8bc",
              ":hover": { backgroundColor: "#80c8bc" },
            }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          <Typography variant="body2">
            Don’t have an account?{" "}
            <Link to="/signup">Create an account</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
