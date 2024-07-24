// import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";

function Navbar() {
    const username=localStorage.getItem('username')
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: deepPurple[100] }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: deepPurple[300] }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {username}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar