// Dash.jsx
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
    Typography,
    Grid,

} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import picture from './../assets/pic.jpg'
import { deepPurple } from "@mui/material/colors";
import './Dash.css'



function Dash() {
  const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    
    const username = localStorage.getItem("username");


  const handleLogout = () => {
    localStorage.removeItem("username");
    setOpen(false);
    
    navigate("/", { replace: true }); 
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    setOpen(true);
  };

  const handleBackBtn = () => {
    
      setOpen(true);
      window.history.pushState(null, "");
  };

  useEffect(() => {
    const handlePopState = (event) => {
      event.preventDefault(); 
      handleBackBtn(); 
    };

    window.addEventListener("popstate", handlePopState);
    window.history.pushState(null, "");
if (!username) {
  navigate("/", { replace: true });
}
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

    return (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card
              sx={{
                backgroundColor: deepPurple[100],
              }}
              className="card"
            >
              <CardMedia
                sx={{ height: 140 }}
                image={picture}
                title="green iguana"
              />
              <CardContent>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  className="text"
                >
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    Welcome,{" "}
                    <span style={{ color: "purple" }}>{username}!</span>
                  </Typography>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    className="btn"
                    variant="contained"
                    color="secondary"
                    onClick={handleLogoutClick}
                   
                  >
                    Logout
                  </Button>
                </Grid>
              </CardActions>

              <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle sx={{ color: deepPurple[600] }}>
                  Logout
                </DialogTitle>
                <DialogContent>
                  <Typography>Are you sure you want to logout?</Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleCloseDialog}
                    sx={{
                      color: "red",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleLogout}
                    sx={{
                      color: "green",
                    }}
                  >
                    Logout
                  </Button>
                </DialogActions>
              </Dialog>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
}

export default Dash;
