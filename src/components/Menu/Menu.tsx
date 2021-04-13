import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import { MenuStyle } from './Menu.style';



export default function Menu() {
  const {root, menuButton, title} = MenuStyle();

  return (
    <Container>
      <div className={root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={title}>
              Pets 🐶
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}