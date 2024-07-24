import  { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const paperStyle = {
    padding: 40,
    height: "50vh",
    width: 280,
    margin: "70px auto",
  };

  const handleLogin = () => {
    // e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/dash");
    } else {
      navigate("/");
    }
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <Box sx={{  backgroundColor: "grey" }}>
      <Grid
        container
  
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={6}>
          <Paper
            elevation={10}
            style={paperStyle}
            className="border border-1 rounded"
          >
            <Grid container direction="column" alignItems="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5" component="h2">
                Login
              </Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Grid
                  container
                  justifyContent="center"
                  style={{ marginTop: 16 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4} style={{
                //   backgroundColor: 'beige',
            
        }}>
          <Box display="flex" justifyContent="start">
            <img
              src="https://ncetir.com/Images/login@4x.png"
              alt="login"
              style={{ maxWidth: "80vh", height: "70vh" }}
            />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Login;
