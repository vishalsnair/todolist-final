import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { context } from "../../App";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  const navigate = useNavigate();
  //   const { setflag } = useContext(context);
  const signout = () => {
    localStorage.setItem("flag", false);
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TO DO LIST
          </Typography>
          <Button color="inherit" onClick={signout}>
            Signout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
