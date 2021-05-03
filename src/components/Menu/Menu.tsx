import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Container, MenuItem } from "@material-ui/core";
import { MenuStyle } from "./Menu.style";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { expireUserToken, getUserToken } from "../../services/token";

export default function Menu() {
  const { root, menuButton, title } = MenuStyle();
  let history = useHistory();
  const [token, setToken] = useState(Boolean);
  const [menuText, setMenuText] = useState("Login");
  useEffect(() => {
    let tokenResponse = getUserToken();
    if (tokenResponse != "") {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);
  useEffect(() => {
    if (token) {
      setMenuText("Sair")
    } else {
      setMenuText("Login")
    }
  }, [token]);


  return (
    <Box>
      <div className={root}>
        <AppBar position="static">
          
          <Toolbar>
            <IconButton
              edge="start"
              className={menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="initial" className={title}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Pets 🐶
              </Link>
            </Typography>

            <Button
              color="inherit"
              onClick={() => {
                if(token){
                  expireUserToken();
                  setToken(false);
                  window.location.reload(false);
                }
                history.push("/login");
                window.location.reload(false);
              }}
            >
              {menuText}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
}
